(function(){
	'use strict';

	var app = angular.module('app', ['ui.tree'])

	var controller = (function(){
		var groupService, _groups, vm, 
			_group_name, scope;

		controller.$inject = ['$scope', 'GroupService']

		function controller($scope, GroupService){
			vm = this;

			scope = $scope;
			groupService = GroupService;

			$scope.groups = [
				  {
				    "categories": [
				      {
				        "name": "awefafe",
				        "sortOrder": 7,
				        "type": "category",
				        "editing": false
				      }
				    ],
				    "name": "Kian",
				    "sortOrder": 1,
				    "type": "group",
				    "id": "-K0v7-zCsq6q1a2IlQIU",
				    "editing": false
				  }
			];
		}

		Object.defineProperties(controller.prototype,{
			group_name: {
				get: function(){ return _group_name; },
				set: function(value){ 
					_group_name = value;
				}
			}
		});

	    controller.prototype.addGroup = function(){
	    	scope.groups.push({
		        name: this.group_name,
		        type: "group",
		        categories: [],
		        id: groupService.idGenerator(),
		        sortOrder: scope.groups.length
	        });

	        this.group_name = null;
	    };

		controller.prototype.editGroup = function(group){
      		group.editing = true;
    	};

	    controller.prototype.cancelEditingGroup = function(group){
	    	group.editing = false;
	    };

	    controller.prototype.saveGroup = function(group){
	    	console.log('saveGroup');
	    	this.cancelEditingGroup(group);
	    };

	    controller.prototype.removeGroup = function(group){
		    if (window.confirm('Are you sure to remove this group?')) {
		        var index = scope.groups.indexOf(group);
		        scope.groups.splice(index, 1);
		    }
	    };

	    controller.prototype.addCategory = function(group){
			if (!group.newCategoryName || group.newCategoryName.length === 0) {
				return;
			}

			group.categories.push({
				name: group.newCategoryName,
				sortOrder: group.categories.length,
				type: "category",
				editing: false
			});

			group.newCategoryName = null;
	    };

	    controller.prototype.editCategory = function(category){
	    	category.editing = true;
	    };

	    controller.prototype.cancelEditingCategory = function(category){
	    	category.editing = false;
	    };

	    controller.prototype.removeCategory = function(group, category){
		    if (window.confirm('Are you sure to remove this category?')) {
		        var index = group.categories.indexOf(category);
		        if (index > -1) {
		        	group.categories.splice(index, 1);
		        }
		    }
	    };

		return controller;
	})();

	app.controller('GroupController', controller);

})();