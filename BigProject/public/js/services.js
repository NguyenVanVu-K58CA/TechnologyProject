angular.module('starter.services', [])
.factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService ($http) {
	var service = {};

	service.GetAll = GetAll;
	service.GetById = GetById;
	service.GetByUsername = GetByUsername;
	service.Create = Create;
	service.Update = Update;
	service.Delete = Delete;

	return service;

	function GetAll () {
		return $http.post('/api/users').then(handleSuccess, handleError('Error getting all users'));
	}

	function GetById(id){
		return $http.post('/api/user/' + id).then(handleSuccess, handleError('Error getting user by id'));
	}

	function GetByUsername(username) {
		return $http.post('/api/user' + username).then(handleSuccess, handleError('Error getting user by Id'));
	}

	function Create(user){
		return $http.post('/api/users', user).then(handleSuccess, handleError('Error '))
	}

	function Update(user){
		return $http.put('/api/users' + user.id, user).then(handleSuccess, handleError('Error !'));
	}

	function Delete(id){
		return $http.delete('/api/users'+id).then(handleSuccess, handleError('Error !'));
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
