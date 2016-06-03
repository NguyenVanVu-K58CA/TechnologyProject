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
	});
});