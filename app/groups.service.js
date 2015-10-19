(function(){
	'use strict';

	var groupService = (function(){
		var http;

		groupService.$inject = ['$http'];

		function groupService($http){
			http = $http;
		}

		groupService.prototype.getGroups = function (){
			return http.get('groups.json');
		};

		groupService.prototype.idGenerator = function(){
			return randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		};

		function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		    return result;
		};

		return groupService;
	})();

	angular
		.module('app')
		.service('GroupService', groupService);
})();