'use strict';

app.controller('AdsByTownController', function($scope, adsData, town) {
        $scope.data = adsData.getAdsByTown(town)
            .success(function (data) {
                $scope.data = data;
            })
    }
);