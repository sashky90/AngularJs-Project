'use strict';

socialNetwork.directive('userPreview', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/userPreview.html',
        controller: 'userPreviewController',
        scope: {
            userUsername: '=userUsername',
            userName: '=userName'
        }
    }
});