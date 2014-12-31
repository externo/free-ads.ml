"use strict";

app.directive('towns', [function () {
    return {
        restrict: 'M',
        templateUrl: './views/townsNcategories.html',
        link: function ($scope) {
            $scope.getAdsByTown = function (town) {
                if (town) {
                    angular.extend($scope.adsRequestParams, {townId: town.id});
                } else {
                    delete $scope.adsRequestParams['townId'];
                }
                $scope.getAll(scope.adsRequestParams);
            }
        }
    }
}]);