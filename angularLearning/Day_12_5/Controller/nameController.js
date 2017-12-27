var app = angular.module("myApp",[]);
	app.controller("myCtrl",function($scope){
		$scope.firstname = "Mao";
		$scope.lastname = "Fu";
		$scope.fullname = function(){
			return $scope.firstname + " " + $scope.lastname;
		};
		$scope.names = [
			{name:"Mwj",country:"China"},
			{name:"Mwj",country:"China"},
			{name:"Mwj",country:"China"},
		]
	});