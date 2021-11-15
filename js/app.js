(function() {
    
    var app = angular.module('app', []);

	app.service('nps', ['$http', function($http) {
					
		this.getParkPromise = function(stateCode) {
			return $http.get("https://developer.nps.gov/api/v1/parks?stateCode="+stateCode+"&api_key=k9RwPfwCIelpFrKpVWL04jR6BnUgzfQggFjjtdgB");
		};
				
	}]);


    app.controller('AppController', ['$scope','$http', 'nps', 
		function($scope,$http, nps) {

			let _this = this;
			this.parkData = null;
			this.stateCodes = ['ME', 'VT', 'NH', 'MA', 'CT', 'RI'];
			this.currentState = null;
			this.currentPark = null;
			
			this.stateSelected = function()
			{
				nps.getParkPromise(this.currentState).then(function(response) {				   
					_this.parkData = response.data.data;	
				
				});	
			};
					
		
		}]);
	
})();