//Develope by Nguyen Van Vu, Nguyen Huu Thuc and Nguyen Van Quan
//use MVC model 

angular.module('starter', ['starter.controllers', 'starter.services', 'ui.router', 'ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url : '/',
		templateUrl: 'templates/home.html',
		controller: 'loginCtrl'
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
	.state('/1/exam/cambridge-ielts-1/listening/practice-test-1', {
		url: '/1/exam/cambridge-ielts-1/listening/practice-test-1',
		templateUrl: 'templates/exam/cambridge-ielts-1/listening/practice-test-1.html',
		controller: 'listeningCtrl'
	})
	.state('writing-tip',{
		url: '/writing-tip',
		templateUrl: 'templates/tip/writing_tip.html'
	})
	.state('admin', {
		url: '/admin', 
		templateUrl: 'templates/admin.html',
		controller: 'adminCtrl'
	})
	.state('reading-tip', {
		url: '/reading-tip', 
		templateUrl: 'templates/tip/reading_tip.html'
	})
	.state('listening-tip', {
		url: '/listening-tip',
		templateUrl: 'templates/tip/listening_tip.html'
	})
	.state('listeningResult', {
		url: '/1/result/cambridge-ielts-1/listening/practice-test-1',
		templateUrl: 'templates/result/cambrige-ielts-1/listening/practice-test-1.html',
		controller: 'resultListeningCtrl'
	});
});