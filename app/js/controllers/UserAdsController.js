'use strict';

app.controller('UserAdsController', function($scope, adsData) {
    var url = 'http://softuni-ads.azurewebsites.net/api/ads';
    adsData.getAds(url).then( function(data) {
        $scope.userAds = data.ads;
    });
});