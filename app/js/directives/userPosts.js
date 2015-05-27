'use strict';

socialNetwork.directive('loggedUserPosts', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/posts.html',
        controller: 'feedPostsController'
    }
});