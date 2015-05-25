'use strict';

socialNetwork.factory('profileService', function ($http, baseServiceUrl, authentication) {

    function getOwnProfileData() {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'me',
            headers: authentication.getHeaders()
        });
    }

    function editOwnProfileData(editData) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + 'me',
            headers: authentication.getHeaders(),
            data: editData
        })
    }

    function editPassword(passwordData) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + 'me/ChangePassword',
            headers: authentication.getHeaders(),
            data: passwordData
        })
    }

    return {
        getOwnProfileData: getOwnProfileData,
        editOwnProfileData: editOwnProfileData,
        editPassword: editPassword
    }

});