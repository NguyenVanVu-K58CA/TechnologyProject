angular.module('starter.controllers',[])
.controller('homeCtrl', function  () {
	// body...
})
.controller('loginCtrl',function ($scope, UserService, $state) {
	// body...
	$scope.logdata = {};
	$scope.regdata = {};
	$scope.register = function(){
		console.log(UserService.Create($scope.regdata));
	}	

	$scope.login = function(){
		var data = UserService.GetByUser($scope.logdata);
		console.log(data);
		$state.go('home');
	}
});