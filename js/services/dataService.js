angular.module('dataService', [])
    .factory('dataService', function($http) {
        return {
            getData : function() {
                var config = {
					headers : {
						'Content-Type': 'application/json;'
					}
				}
                return $http.get('json/data.json');
            }
        }
})