app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', '$http', function($resource, baseServiceUrl, authentication, $http){

    function registerUser(user){
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function(data){
                authentication.saveUser(data);
            });
    }

    function loginUser(user, success, error){
        var request = {
            method: 'POST',
            url: baseServiceUrl + 'user/login',
            data: user
        };
        $http(request).success(function(data) {
            sessionStorage['currentUser'] = JSON.stringify(data);
            success(data);
        }).error(error);
    }

    function logoutUser(){
        return $resource(baseServiceUrl + 'user/logout')
            .save(user)
            .$promise
            .then(function(data){
                authentication.removeUser();
            });
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);