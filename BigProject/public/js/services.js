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
		return $http.post('/api/user').then(handleSuccess, handleError('Error getting all users'));
	}

	function GetByUser(user) {
		return $http.post('/api/user',user).then(handleSuccess, handleError('Error getting user by Id'));
	}

	function Create(user){
		return $http.post('/api/user', user).then(handleSuccess, handleError('Error by create user '))
	}

	function Update(user){
		return $http.put('/api/user', user).then(handleSuccess, handleError('Error by Update!'));
	}

	function Delete(user){
		return $http.delete('/api/user', user).then(handleSuccess, handleError('Error by delete!'));
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
          