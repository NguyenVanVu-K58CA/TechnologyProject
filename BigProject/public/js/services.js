angular.module('starter.services', [])
.factory('UserService', UserService);

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
		return $http.post('/api/user', {"verb" : "GET_BY_USER", "userName" : user.username, "email" : user.email, "password" : user.password});
	}

	function Create(user){
		return $http.post('/api/user', {"verb" : "CREATE", "userName" : user.username, "email" : user.email, "password" : user.password});
	}

	function Update(user){
		return $http.post('/api/user', {"verb" : "UPDATE", "userName": user.username, "email" : user.email, "password": user.password}).then(handleSuccess, handleError('Error by Update!'));
	}

	function Delete(user){
		return $http.post('/api/user', {"verb" : "DELETE", "userName": user.username, "email": user.email, "password": user.password}).then(handleSuccess, handleError('Error by delete!'));
	}

	function handleSuccess(res){
		console.log("res.data", res.data);
		return res.data;
	}

	function handleError(error){
		return function (){
			return {sucess : false, message: error};
		}
	}
}
          