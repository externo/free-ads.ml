app.factory('authentication', ['localStorageServiceProvider', function(){
    var key = 'user';
    function saveUserData(data){
        localStorageServiceProvider.set(key, data);
    }
    function getUserData(key){
        localStorageServiceProvider.get(key);
    }

    return {
        saveUser: saveUserData,
        saveUser: getUserData
    }
}]);