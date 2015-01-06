'use strict';

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config('$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
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