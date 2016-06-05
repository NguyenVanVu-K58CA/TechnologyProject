angular.module('starter.services', [])
.factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService ($http) {
	var service = {};
    var url = "localhost:3000"
	service.GetAll = GetAll;
	service.GetById = GetById;
	service.GetByUsername = GetByUsername;
	service.Create = Create;
	service.Update = Update;
	service.Delete = Delete;

	return service;

	function GetAll () {
		return $http.post(url + '/api/users').then(handleSuccess, handleError('Error getting all users'));
	}

	function GetByUser(user) {
		return $http.post(url + '/api/user',user).then(handleSuccess, handleError('Error getting user by Id'));
	}

	function Create(user){
		return $http.post(url + '/api/users', user).then(handleSuccess, handleError('Error '))
	}

	function Update(user){
		return $http.put(url + '/api/users', user).then(handleSuccess, handleError('Error !'));
	}

	function Delete(user){
		return $http.delete(url + '/api/users', user).then(handleSuccess, handleError('Error !'));
	}

	function handleSuccess(res){
		return res.data;
	}

	function handleError(error){
		return function (){
			return {sucess : false, message: error};
		}
	}
}
