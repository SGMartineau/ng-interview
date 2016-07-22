(function() {
	'use strict';

	angular
		.module('ngInterview.api')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.
        this.getStudents = getStudents;
		/**
		 * Implementations
		 */

		function getName() {
			return 'student service';
		}
        function getStudents() {
            return $http.get('http://il-resume-api.azurewebsites.net/api/students')
                .then(function (response) {
                    if (typeof response.data === 'string') {
                        return getStudents();
                    } else {
                        return response.data;
                    }
                },
                    function(error) {
                        return getStudents();
            })   
        }
	}
})();
