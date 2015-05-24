'use strict';

socialNetwork.factory('authentication', function ($sessionStorage) {
    function setUserData(data) {
        $sessionStorage.user = data;
    }

    function getUserData(data) {
        return $sessionStorage.user;
    }

    function clearUserData() {
        $sessionStorage.$reset();
    }

    function getHeaders() {
        var headers,
            userData = getUserData();

        if (userData) {
            headers = { Authorization: 'Bearer ' + userData.access_token };
        }

        return headers;
    }

    function isLoggedIn() {
        return this.getUserData() ? true : false;
    }

    return {
        setUserData: setUserData,
        getUserData: getUserData,
        clearUserData: clearUserData,
        getHeaders: getHeaders,
        isLoggedIn: isLoggedIn
    }
});