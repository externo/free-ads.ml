app.controller('AllTownsController', function($scope, $log, adsData) {
	adsData.getAllTowns()
		.success(function (towns) {
			$scope.towns = towns;
		})
		.error(function (error) {
			$log.error(error);
		});
});