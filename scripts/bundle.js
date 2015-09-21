(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var $viewAd = $('#ad');
	var $viewCaption = $('#caption');
	var $viewImage = $('#image');
	var $viewUrl = $('#url');
	var $viewCancel = $('#cancel');
	var $viewPlus = $('#plus');
	var $viewSection = $('#section');

	var url = 'http://tiyfe.herokuapp.com/collections/morris1f';

	$viewAd.toggle();
	$viewSection.show();

	$viewPlus.click(function () {
		$viewAd.toggle();
	});

	$.get(url, function (response) {

		response.forEach(function (result, index) {
			$viewSection.append('<img src="' + result.url + '">' + '<div>' + result.caption + '</div>');
		});
		'json';
	});

	$viewAd.submit(function (e) {
		e.preventDefault();

		var newUrl = $viewUrl.val();
		var newCaption = $viewCaption.val();

		$.post(url, { url: newUrl, caption: newCaption }, function (result) {
			console.log('input saved', result);
			console.log('result'._id);
			$viewSection.append('<img src="' + result.url + '">' + '<div>' + result.caption + '</div>');
		}, 'json');

		/*$.post(
  	'http://tiyfe.herokuapp.com/collections/morrisf',
  	{message: newCaption},
  	function(result) {
  		console.log('input saved', result);
  		console.log('result'._id);
  		$viewSection.append('<div>'+result.message+'<div>');
  	},
  	'json'
  		);*/

		$newUrl.click(function () {
			$viewSection.html(' ');
			$viewSection.show();
			$.get(url, function (response) {

				response.forEach(function (response, index) {
					$viewSection.append('<div>' + response.title + '</div><div>' + response.video + '</div><div>' + response.description + '</div>');
				});
				'json';
			});
		});
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map