app.controller('AllTownsController', function($scope, $resource, $log, adsData, $route, idN) {
	adsData.getAllTowns()
		.success(function (towns) {
            $scope.towns = towns;
                $scope.data = $resource(
                    'http://softuni-ads.azurewebsites.net/api/ads?townid=' + '5'
                ).get();
                console.log($scope.data);
                $scope.reload = function () {
                    $route.reload();
                }
        })
		.error(function (error) {
			$log.error(error);
		});
});