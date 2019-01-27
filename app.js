const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	// res.end('Hello World\n');

	// login to particle
	var Particle = require('particle-api-js');
	var particle = new Particle();
	var token;

	const USERNAME = '';
	const PASSWORD = '';

	if (req.method == 'POST') {
		console.log("POST");
		particle.login({username: USERNAME, password: PASSWORD}).then(
			function(data) {
				token = data.body.access_token;
				console.log("token: "+token);
				res.end("token: "+token);

				var devicesPr = particle.listDevices({ auth: token });

				devicesPr.then(
					function(devices){
						console.log('Devices: ', devices);

						var fnPr = particle.callFunction({ deviceId: '39001e001347363336383437', name: 'slap', argument: 'D0:HIGH', auth: token });

						fnPr.then(
							function(data) {
								console.log('Function called succesfully:', data);
							}, function(err) {
								console.log('An error occurred:', err);
							});
					},
					function(err) {
						console.log('List devices call failed: ', err);
					}
					);
			},
			function (err) {
				console.log('Could not log in.', err);
				res.end("token not found");
			}
			);
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});