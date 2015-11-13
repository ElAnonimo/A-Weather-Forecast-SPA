// DIRECTIVES
weatherApp.directive("weatherReport", function() {
	return {
		restrict: 'Element',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToFahrenheit: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});