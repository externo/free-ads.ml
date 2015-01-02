app.controller('AllTownsController', function($scope, $resource, $log, adsData, $route) {
	adsData.getAllTowns()
		.success(function (towns) {
            $scope.towns = towns;
            $scope.currentID = 5;
            $scope.getID = function(id){
                $scope.currentID = id;
            };
            $scope.data = $resource(
                'http://softuni-ads.azurewebsites.net/api/ads?townid=' + $scope.currentID
            ).get();
        })
		.error(function (error) {
			$log.error(error);
		});
    $scope.reload = function () {
        $route.reload();
    };
});