'use strict';

app.directive('leftPublicSidebar', ['', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        controller: 'HomeCtrl',
        replace: true
    }
}]);