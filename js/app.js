'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            })
            //.when('/ads', {
            //    templateUrl: 'templates/ads.html',
            //    controller: 'AllAdsController'
            //})
            //.when('/adsByTown', {
            //    templateUrl: 'templates/allAds.html',
            //    controller: 'AdsByTownController'
            //})
            .otherwise({
                redirectTo: '/'
            });
    //localStorageServiceProvider.setStorageType('localStorage');
    //localStorageServiceProvider.setPrefix('adsApp');
}]);