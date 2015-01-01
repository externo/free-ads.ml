app.controller('AllAdsController', function($scope, $route, $log, adsData) {
	adsData.getAll()
		.$promise
		.then(function (data) {
			$scope.data = data;
        }, function (error) {
			$log.error(error);
		});

	$scope.reload = function () {
		$route.reload();
	}
});

app.controller('HomeController', ['$scope', '$rootScope', 'adsService', 'pageSize', function HomeController($scope, $rootScope, adsService, pageSize) {
    // This event is sent by RightSideBarController when the current category is changed
    $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.reloadAds();
    });

    // This event is sent by RightSideBarController when the current town is changed
    $scope.$on("townSelectionChanged", function(event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.reloadAds();
    });
}
]);