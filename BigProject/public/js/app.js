//Develope by Nguyen Van Vu, Nguyen Huu Thuc and Nguyen Van Quan
//use MVC model 

angular.module('starter', ['starter.controllers', 'starter.services', 'ui.router', 'ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url : '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('aboutus', {
		url : '/aboutus',
		templateUrl: 'templates/aboutus.html'
	})
	.state('test', {
		url: '/test', 
		templateUrl: 'templates/test.html'
	})
	.state('bandscore', {
		url: '/bandscore',
		templateUrl: 'templates/ieltsbandscore.html'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
	.state('catalogue', {
		url: '/catalogue', 
		templateUrl: 'templates/catalogue/catalogue.html'
	})
	.state('/1/catalogue/cambridge-ielts-1', {
		url: '/1/catalogue/cambridge-ielts-1', 
		templateUrl: 'templates/catalogue/cambridge-ielts-1.html'
	})
	.state('/1/exam-instruction/cambridge-ielts-1/listening/practice-test-1', {
		url: '/1/exam-instruction/cambridge-ielts-1/listening/practice-test-1',
		templateUrl: 'templates/exam-instruction/cambridge-ielts-1/listening/practice-test-1.html'
	})
	.state('/1/exam/cambridge-ielts-1/writing/practice-test-1', {
		url: '/1/exam/cambridge-ielts-1/writing/practice-test-1',
		templateUrl: 'templates/exam/cambridge-ielts-1/writing/practice-test-1.html'
	})
	.state('/1/exam/cambridge-ielts-1/speaking/practice-test-1', {
		url: '/1/exam/cambridge-ielts-1/speaking/practice-test-1', 
		templateUrl: 'templates/exam/cambridge-ielts-1/speaking/practice-test-1.html'
	})
	;
});