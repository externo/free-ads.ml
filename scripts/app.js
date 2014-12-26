'use strict';

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html'
        });
        $routeProvider.when('/register', {
            templateUrl: 'views/register.html'
        });
    });


