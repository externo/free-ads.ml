'use strict';

app.controller('AdsByTownController', function($scope, $route, $log, adsData, town) {
    adsData.getAdsByTown(town.id)
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