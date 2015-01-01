app.controller('AdsByTownController', function($scope, $log, adsData) {
    adsData.getAdsByTown()
        .$promise
        .then(function (data) {
            console.log('done');
            $scope.data = data;
        }, function (error) {
            console.log('NOT done');
            $log.error(error);
        });

    $scope.reload = function () {
        $route.reload();
    }
});