app.controller('LoginCtrl',
    function ($scope, $rootScope, $location, authService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    $location.path("/");
                    console.log("success");
                },
                function error(err) {
                    console.log("error");
                }
            );
        };
    }
);