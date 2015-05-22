'use strict';

socialNetwork.factory('userData', function ($http, baseServiceUrl, authentication) {
    function login(loginData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'users/login',
            data: loginData
        })
            .success(function success(data) {
                authentication.setUserData(data);
            })
    }

    function logout() {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'users/logout',
            headers: authentication.getHeaders()
        })
            .success(function success() {
                authentication.clearUserData();
            })
    }

    function register(registerData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'users/register',
            data: registerData
        })
            .success(function (data) {
                authentication.setUserData(data);
            })
    }


});