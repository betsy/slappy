// // Listen for messages
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'report_back') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//     }
// });

// // Listen for messages
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'report_back') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//     }
// });
$( document ).ready(function(){

	console.log("mo0o0");
	var onScreen = 99999;
	
	function trackSlaps(){
		window.setInterval(function(){
		  var cur = $('img[alt="✋"]').length;
		  console.log(cur);
		  if(cur>onScreen){
		  	console.log("THWACK");
		  	$.post('http://localhost:3000');
		  }
		  onScreen = cur;
		}, 1000);
	}

	setTimeout(trackSlaps, 5000);

	// var observer = new MutationObserver(function(mutations, observer) {
	//     // fired when a mutation occurs
	//     console.log(mutations, observer);
	//     // ...
	// });

	// observer.observe(document.getElementById('js_1'), {
	//   subtree: true,
	//   attributes: true
	//   //...
	// });

	// var observer = new MutationObserver(function(mutations) {
	//     mutations.forEach(function(mutation) {
	//         if (mutation.addedNodes && mutation.addedNodes.length > 0) {
	//             // element added to DOM
	//         	console.log(mutation)
	//             var hasClass = [].some.call(mutation.addedNodes, function(el) {
	//                 return el.classList.contains('_1ift')
	//             });
	//             if (hasClass) {
	//                 // element has class `MyClass`
	//                 console.log('element ".1ift" added');
	//             }
	//         }
	//     });
	// });
	// observer.observe(document.body, {
	//   subtree: true,
	//   attributes: true
	//   //...
	// });

});

