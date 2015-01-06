'use strict';

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config('$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
            })
            .when('/register', {
                templateUrl: 'templates/register.html'
            })
            .when('/ads', {
                templateUrl: 'templates/allAds.html',
                controller: 'AllAdsController'
            })
            .when('/adsByTown', {
                templateUrl: 'templates/allAds.html',
                controller: 'AdsByTownController'
            })
            .otherwise({
                redirectTo: '/'
            });
});