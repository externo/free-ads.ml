app.controller('AllTownsController', function($scope, $log, adsData) {
	adsData.getAllTowns()
		.$promise
		.then(function (towns) {
			$scope.towns = towns;
		}, function (error) {
			$log.error(error);
		});
});