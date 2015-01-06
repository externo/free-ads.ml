'use strict';

app.controller('AllCategoriesController', function($scope, $log, adsData) {
	adsData.getAllCategories()
		.success(function (categories) {
			$scope.categories = categories;
		})
		.error(function (error) {
			$log.error(error);
		});
});