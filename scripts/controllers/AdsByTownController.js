app.controller('AdsByTownController', function($scope, $log, adsData) {
	adsData.getAdsByTown()
		.$promise
		.then(function (data) {
			$scope.data = data;
		}, function (error) {
			$log.error(error);
		});

	$scope.reload = function () {
		$route.reload();
	}
});