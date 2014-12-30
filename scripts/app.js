'use strict';

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .when('/register', {
                templateUrl: 'views/register.html'
            })
            .when('/ads', {
                templateUrl: 'views/allAds.html',
                controller: 'AllAdsController'
            })
            .when('/adsByTown', {
                templateUrl: 'views/allAds.html',
                controller: 'AdsByTownController'
            })
            .otherwise({
                redirectTo: '/ads'
            });
});

app.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                attrs.$set('src', attrs.errSrc);
            });
        }
    }
});