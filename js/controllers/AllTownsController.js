'use strict';

app.controller('AllTownsController', function($scope, $resource, $log, adsData, $route) {
	adsData.getAllTowns()
		.success(function (towns) {
            $scope.towns = towns;
        })
		.error(function (error) {
			$log.error(error);
		});
});