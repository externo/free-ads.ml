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
                controller: 'AllTownsController'
            })
            .otherwise({
                redirectTo: '/ads'
            });
});