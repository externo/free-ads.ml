app.controller('AllTownsController', function($scope, $log, adsData) {
	adsData.getAllTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
		}, function (error) {
			$log.error(error);
		});
});