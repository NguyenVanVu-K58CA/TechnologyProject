angular.module('starter.services', [])
.factory('UserService', UserService)
.factory('messages', function(){
	var messages = {};
	messages.score = 0.0;
	messages.count = 0;
	messages.result = [];
	messages._ans = [];
	messages.del = 1;
	messages.isLogIn = false;
	messages.user = null;

	messages.addresult = function(message){
		messages.result.push(message);
	};

	messages.addans = function(message){
		messages._ans.push(message);
	}

	messages.addscore = function(){
		messages.score = messages.score + 1;
	}

	messages.addcount = function(){
		messages.count = messages.count + 1;
	}

	return messages;
});


UserService.$inject = ['$http'];

function UserService ($http) {
	var service = {};

	service.GetAll = GetAll;
	service.GetByUser = GetByUser;
	service.Create = Create;
	service.Update = Update;
	service.Delete = Delete;

	return service;

	function GetAll () {
		return $http.post('/api/user', {"verb" : "GET_ALL", "userName" : "", "email" : "", "password" : ""});
	}

	function GetByUser(user) {
		return $http.post('/api/user', {"verb" : "GET_BY_USER", "userName" : user.userName, "email" : user.email, "password" : user.password});
	}

	function Create(user){
		return $http.post('/api/user', {"verb" : "CREATE", "userName" : user.userName, "email" : user.email, "password" : user.password});
	}

	function Update(user){
		return $http.post('/api/user', {"verb" : "UPDATE", "userName": user.userName, "email" : user.email, "password": user.password});
	}

	function Delete(user){
		return $http.post('/api/user', {"verb" : "DELETE", "userName": user.userName, "email": user.email, "password": user.password});
	}
}
          