'use strict';

app.controller('UserAdsController',
    function ($scope, $rootScope, $location, adsService, authService, notifyService, $resource) {
        $rootScope.pageTitle = "User ads";

        $scope.userAds = adsService.getAds($resource);

    }
);
