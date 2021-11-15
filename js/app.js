(function() {
    
    var app = angular.module('app', []);

    // call API and return promise
	app.service('nps', ['$http', function($http) {
					
		this.getParkPromise = function(stateCode) {
			return $http.get("https://developer.nps.gov/api/v1/parks?stateCode="+stateCode+"&api_key=k9RwPfwCIelpFrKpVWL04jR6BnUgzfQggFjjtdgB");
		};
				
	}]);


    app.controller('AppController', ['$scope','$http', 'nps', 
		function($scope,$http, nps) {

			let _this = this;
			this.parkData = null;       // data on all parks in state
			this.stateCodes = ['ME', 'VT', 'NH', 'MA', 'CT', 'RI'];
			this.currentState = null;   // state selected from pulldown
			this.currentPark = null;    // park selected from main screen
			
            // called when a state is slected in the dropdown
			this.stateSelected = function()
			{
                // get park date for state 
				nps.getParkPromise(this.currentState).then(function(response) {				   
					_this.parkData = response.data.data;	
				
				});	
			};
					
		
		}]);
	
})();