'use strict';

app.controller('UserAdsController',
    function ($scope, userAdsService, notifyService, pageSize) {

        $scope.userAds = function (requestParams) {
            userAdsService.getUserAds(requestParams)
                .then(
                function getUserAdsSuccess(userAdsData) {
                    $scope.userAds = userAdsData.ads;
                    $scope.pagesArr = new Array(userAdsData.numPages);
                },
                function getUserAdsError(userAdsError) {
                    console.log(userAdsError);
                }
            )
        };
    }
);
