app.controller('AllUserAdsController', function($scope, $route, $log, adsData) {
	adsData.getUserAll()
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