'use strict';

app.controller('UserAdsController',
    function ($scope, $rootScope, $location, userService, authService, notifyService) {
        $rootScope.pageTitle = "User ads";

        $scope.userAds = function(ads) {
            userService.getUserAds(ads,
                function success() {
                    notifyService.showInfo("User ads showed successfully.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("User ads failed showing", err);
                }
            );
        };
    }
);
