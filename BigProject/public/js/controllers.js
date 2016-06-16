angular.module('starter.controllers',[])
.controller('homeCtrl', function  () {
	// body...
})
.controller('adminCtrl', function($scope, UserService, messages){


	$scope.loadUser = function(){
		UserService.GetAll().then(
			function(res){
				console.log(res.data);
				$scope.data = res.data;
				console.log("scope", $scope.data);
			}, 
			function(err){
				console.log(err);
			});
	}
	
	$scope.remove = function(item){
		UserService.Delete(item).then(
			function(res){
				console.log(item);
				console.log("Delete", res);
			},
			function(err){
				console.log(err);
			}	
		);
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
.controller('listeningCtrl', function($scope, $http, $state, messages){



	$scope.ans = {};	
	$scope.submit = function(){
		$http.post('/api/test_result').then(
			function(res){
				angular.forEach(res.data, function(item){
					messages.addresult(item);
				});
				angular.forEach($scope.ans, function(item){
					messages.addans(item);
				});
				$state.go('listeningResult');
			}, 
			function(err){

			});
	}
})
.controller('resultListeningCtrl', function($scope, messages){
	console.log(messages.result);
	console.log(messages._ans);

	var index = 0;

	angular.forEach(messages._ans, function(item){
		if (item == messages.result[index] ){
			messages.addscore(); messages.addcount();
		} 
		index += 1;
	});

	$scope.check = function(number){
		if (messages.result[number] == messages._ans[number]){return 'glyphicon-ok';}
		else {return 'glyphicon-remove'};
	};

	$scope.checkstyle = function(number){
		if (messages.result[number] == messages._ans[number]){return 'green';}
		else {return 'red';}
	}

	console.log('score', messages.score);
	console.log('count', messages.count);

	$scope.score = messages.score;
	$scope.count = messages.count;


});