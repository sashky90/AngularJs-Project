'use strict';

socialNetwork.factory('friendsService', function($http, baseServiceUrl, authentication) {

    function getOwnFriends() {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'me/friends',
            headers: authentication.getHeaders()
        })
    }

    function getOwnFriendsPreview() {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'me/friends/preview',
            headers: authentication.getHeaders()
        })
    }

    function getUserFriends(username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'users/' + username + '/friends',
            headers: authentication.getHeaders()
        })
    }

    function getUserFriendsPreview(username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'users/' + username + '/friends/preview',
            headers: authentication.getHeaders()
        })
    }

    function getFriendRequest() {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'me/requests',
            headers: authentication.getHeaders()
        })
    }

    function approveFriendRequest(requestedId) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + 'me/requests/' + requestedId + '?status=approved',
            headers: authentication.getHeaders()
        })
    }

    function rejectFriendRequest(requestedId) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + 'me/requests/' + requestedId + '?status=rejected',
            headers: authentication.getHeaders()
        })
    }

    function sendFriendRequest(username) {
        return $http ({
            method: 'POST',
            url: baseServiceUrl + 'me/requests/' + username,
            headers: authentication.getHeaders()
        })
    }

    return {
        getOwnFriends: getOwnFriends,
        getOwnFriendsPreview: getOwnFriendsPreview,
        getUserFriends: getUserFriends,
        getUserFriendsPreview: getUserFriendsPreview,
        getFriendRequest: getFriendRequest,
        approveFriendRequest: approveFriendRequest,
        rejectFriendRequest: rejectFriendRequest,
        sendFriendRequest: sendFriendRequest
    }

});