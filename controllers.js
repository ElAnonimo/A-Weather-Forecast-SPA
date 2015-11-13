// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) { 
	$scope.city = cityService.city;
	
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
	
	$scope.submit = function() {
		$location.path('/forecast');
	};
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherDataService', function($scope, $routeParams,  									cityService, weatherDataService) { 
	$scope.city = cityService.city;
	
	$scope.cnt = $routeParams.cnt || '2';
	
	$scope.weatherResult = weatherDataService.getWeather($scope.city, $scope.cnt);
	// $scope.weatherResult = weatherDataService.getWeather({ q: $scope.city, cnt: $scope.days, APPID: '117548eaf373b9f2f5185ee3d4e636bc' });
	
	$scope.convertToFahrenheit = function(degC) {
		return Math.round(1.8*degC+32);
	};
	
	$scope.convertToDate = function(dt) {
		return new Date(dt*1000);
	};
}]);