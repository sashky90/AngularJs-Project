socialNetwork.directive('loggedInUserHeader', function () {
   return {
       restrict: 'A',
       templateUrl: 'header.html',
       controller: 'loggedInUserController'
   }
});