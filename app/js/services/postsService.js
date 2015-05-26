'use strict';

socialNetwork.factory('postsService', function ($http, baseServiceUrl, authentication) {
    function getNewsFeedPosts() {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'me/feed?StartPostId=&PageSize=5',
            headers: authentication.getHeaders()
        })
    }

    function getUserWallPosts(username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'users/' + username + '/wall?PageSize=5',
            headers: authentication.getHeaders()
        })
    }

    function getPostById(postId) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + 'Posts/' + postId,
            headers: authentication.getHeaders()
        })
    }

    function addNewPost(postData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'posts',
            headers: authentication.getHeaders(),
            data: {
                username: postData.username,
                postContent: postData.postContent
            }

        })
    }

    function deletePost(postId) {
        return $http({
            method: 'DELETE',
            url: baseServiceUrl + 'posts/' + postId,
            headers: authentication.getHeaders()
        })
    }

    function likePost(postId) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + 'posts/' + postId + '/likes',
            headers: authentication.getHeaders()
        })
    }

    function unlikePost(postId) {
        return $http ({
            method: 'DELETE',
            url: baseServiceUrl + 'posts/' + postId + '/likes',
            headers: authentication.getHeaders()
        })
    }

    function getAvailablePostOptions(post, currentUserUsername) {
        post.deleteButtonAvailable =
            post.author.username == currentUserUsername ||
            post.wallOwner.username == currentUserUsername;

        if (post.author.isFriend || post.wallOwner.isFriend || post.deleteButtonAvailable) {
            post.likeDislikeOptionAvailable = true;
            post.commentOptionAvailable = true;
        }

        return post;
    }

    return {
        getNewsFeedPosts: getNewsFeedPosts,
        getUserWallPosts: getUserWallPosts,
        getPostById: getPostById,
        addNewPost: addNewPost,
        deletePost: deletePost,
        likePost: likePost,
        unlikePost: unlikePost,
        getAvailablePostOptions: getAvailablePostOptions

    }
});