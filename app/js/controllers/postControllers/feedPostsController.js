'use strict';

socialNetwork.controller('feedPostsController', function ($scope, postsService, notifyService) {
    postsService.getNewsFeedPosts().then(
        function success(newsFeedPosts) {

        },
        function error(error) {
            notifyService.showError('Data error, please reload the page', error)
        }
    )
});