'use strict';

var socialNetwork = angular.module('socialNetworkApp', ['ngRoute', 'ngStorage']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

socialNetwork.config(function ($routeProvider) {
    $routeProvider.when('/welcome', {
       templateUrl: 'templates/welcome.html'
   });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    });

    $routeProvider.when('/logout', {
        templateUrl: 'templates/welcome.html',
        controller: 'logoutController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/welcome'
    });
});

socialNetwork.run(function ($rootScope, $location, authentication, notifyService) {

});