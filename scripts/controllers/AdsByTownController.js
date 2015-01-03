'use strict';

app.controller('AdsByTownController', function($scope, $route, $log, $resource) {
    $resource('http://softuni-ads.azurewebsites.net/api/ads?townid=' + 5).get()
        .success(function (data) {
            $scope.data = data;
        })
        .error(function (error) {
            $log.error(error);
        });

    $scope.reload = function () {
        $route.reload();
    }
});