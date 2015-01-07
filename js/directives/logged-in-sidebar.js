app.directive('loggedInSidebar', function(){
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: true
    }
});