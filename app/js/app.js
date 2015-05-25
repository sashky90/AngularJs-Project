'use strict';

var socialNetwork = angular.module('socialNetworkApp', ['ngRoute', 'ngStorage', 'naif.base64']);

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
    //$rootScope.$on('$locationChangeStart', function(event) {
    //    var isWelcome = $location.path().indexOf('/welcome'),
    //        isRegister = $location.path().indexOf('/register'),
    //        isLogin = $location.path().indexOf('/login');
    //
    //    if (!authentication.isLoggedIn() && (isWelcome == -1 && isRegister == -1 && isLogin == -1)) {
    //        notifyService.showInfo("Login or register first.");
    //        $location.path("/welcome");
    //    }
    //});
});