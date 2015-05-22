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

    return {
        getOwnProfileData: getOwnProfileData,
        editOwnProfileData: editOwnProfileData
    }

});