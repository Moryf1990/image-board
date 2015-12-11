'use strict';

$(document).ready(function() {
	var viewAd =$('#ad');
	var viewCaption =$('#caption');
	var viewImage =$('#image');
	var viewUrl =$('#url');
	var viewCancel =$('#cancel');
	var viewPlus =$('#plus');
	var viewSection =$('#section');


	var url ='http://tiyfe.herokuapp.com/collections/morris1f';


	viewAd.toggle();
	viewSection.show();

	viewPlus.click(function() {
		viewAd.toggle();

	});

	$.get(
		url,
		function(response){
			response.forEach(function(result, index) {
	            viewSection.append('<img src="'+result.url+'">' + '<div>'+result.caption+'</div>');
			});
		}
	);


	viewImage.click(function(e) {
		e.preventDefault(); 
		// $('cancel').prop('disabled', true);
		
		var newUrl =viewUrl.val();
		var newCaption =viewCaption.val();

		$.post(
			url,
			{url: newUrl, caption: newCaption},
			function(result) {
				console.log('input saved', result);
				console.log('result'._id);
				viewSection.append('<img src="'+result.url+'">' + '<div>'+result.caption+'</div>');
				viewUrl.val('');
				viewCaption.val('');
			},
			'json'

		); 

		/*$.post(
			'http://tiyfe.herokuapp.com/collections/morrisf',
			{message: newCaption},
			function(result) {
				console.log('input saved', result);
				console.log('result'._id);
				viewSection.append('<div>'+result.message+'<div>');
			},
			'json'

			);*/

		// $newUrl.click(function() {
		// 	viewSection.html(' ');
		// 	viewSection.show();
		// 	$.get(
		// 		url,
		// 		function(response){
		// 			response.forEach(function(response, index) {
  //                   	viewSection.append('<div>'+response.title+'</div><div>'+response.video+'</div><div>'+response.description+'</div>');
		// 			});
		// 			// 'json'
		// 		}
		// 	);
		// });

	});
});























