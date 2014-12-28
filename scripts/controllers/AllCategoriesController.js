app.controller('AllCategoriesController', function($scope, $log, adsData) {
	adsData.getAllCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		}, function (error) {
			$log.error(error);
		});
});