'use strict';

app.controller('TownsCtrl', ['$scope', 'townsData', function($scope, townsData) {
	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
		});

	$scope.townClicked = function townClicked(town){
		filter.filterByTown(town);
	}
}]);