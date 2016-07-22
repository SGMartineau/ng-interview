(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$scope', 'StudentsService'];
	function StudentsController($scope, studentsService) {

		/**
		 * Model
		 */
        
        $scope.expand = false;
        

		var vm = this;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */
		function activate() {
			studentsService.getStudents().then(function(response) {
                response.forEach(function(person) {
                    person.FullName = person.FirstName + ' ' + person.LastName
                })
                $scope.students = response;
            })
		}

	}
})();
