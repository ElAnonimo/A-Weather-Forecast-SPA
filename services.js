// SERVICES
weatherApp.service('cityService', function() {
	this.city = 'New York, NY';
});

weatherApp.service('weatherDataService', ['$resource', function($resource) {
	this.getWeather = function(city, cnt) {
		var weatherAPI = 
			$resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7',
			{callback: 'JSON_CALLBACK'},
			{get: {method: 'JSONP'}}
			);
	
		return weatherResult = weatherAPI.get({ q: city, cnt: cnt, APPID: '117548eaf373b9f2f5185ee3d4e636bc' });
		// console.log($scope.weatherResult);
	};
}]);
