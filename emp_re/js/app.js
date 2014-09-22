angular.module("myApp",[]).controller("DBController", function ($scope, dataService) {


	$scope.empArray = dataService.getNames();
	$scope.empName = '';

		

	$scope.addItem = function(empName, empStreet, empCity, empState, empZip){
		var emName = empName;
		var emStreet = empStreet;
		var emCity = empCity;
		var emState = empState;
		var emZip = empZip;
		dataService.addItem(emName, emStreet, emCity, emState, emZip);
		$scope.empName = '';
		$scope.empStreet = '';
		$scope.empCity = '';
		$scope.empState = '';
		$scope.empZip = '';
		
	};
	
	$scope.removeName = function(removeName){
		console.log("Hay");
		dataService.removeName(removeName);
	};	
});
