app.controller('RightSideBarController', ['$scope', '$rootScope', 'categoriesService', 'townsService',
    function RightSideBarController($scope, $rootScope, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.categoryClicked = function(event) {
            var clickedCategoryId = $(event.target).data("id");
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function() {
            var clickedTownId = $(event.target).data("id");
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };
    }
]);