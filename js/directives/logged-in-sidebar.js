app.directive('loggedInSidebar', function(){
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'template/public/left-sidebar.html',
        replace: true
    }
});