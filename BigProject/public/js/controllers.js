angular.module('starter.controllers',[])
.controller('homeCtrl', function  () {
	// body...
})
.controller('adminCtrl', function($scope, UserService){
	$scope.loadUser = function(){
		UserService.GetAll().then(
			function(res){
				console.log(res.data);
				$scope.data = JSON.stringify(res.data);
				console.log("scope", $scope.data);
			}, 
			function(err){
				console.log(err);
			});
	}
	
	$scope.remove = function(item){

	}
})
.controller('loginCtrl',function ($scope, UserService, $state) {
	// body...
	$scope.logdata = {};
	$scope.regdata = {};
	$scope.register = function(){
		console.log(UserService.Create($scope.regdata));
	}	

	$scope.login = function(){
		var data = {};
		UserService.GetByUser($scope.logdata).then(
			function(res){
				console.log("res",res.data);
				if (res.data.userName == "A" && res.data.password == "12"){
					$state.go('admin');
				}
				else {
					$state.go('home');
				}
			}, 
			function(err){
				console.log("err", err);
			});
	}
})
.controller('listeningCtrl', function($scope, $http, $state){
	$scope.submit = function(){
		$state.go('listeningResult');
	}
})
.controller('resultListeningCtrl', function($scope, $http){
	$http.post('/api/test_result').then({
		function(res){
			$scope.result = JSON.stringify(res.data);
			console.log($scope.result);
		},
		function(err){
			console.log(err);
		}
	});
})
;