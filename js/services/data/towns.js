app.factory('townsData', ['$resource', function(){
    var resource = $resource('');
    function getAllTowns(){
        return
    }
    return {
        getTowns: getAllTowns
    }
}]);