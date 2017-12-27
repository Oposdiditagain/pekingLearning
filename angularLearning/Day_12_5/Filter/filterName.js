var app = angular.module("myApp",[]);

	app.controller("myCtrl",function($scope){
		$scope.persons = [
			{name:"Fgd",country:"Chongqing"},
			{name:"Mwj",country:"Chongqing"},
			{name:"Fgd",country:"Chongqing"}
		]



	});

	app.controller("secCtrl",function($scope,$filter){
		$scope.msg = "Hello World";

	// 在javascript中的用法：$filter('date')(date, format, timezone)
		var today = new Date();
		$scope.time = $filter('date')(today,'yyyy-MM-dd');

	});

	

	app.filter("reverse",function(){
			
		
		return function(str){
			console.log(arguments);
			
			return str.split("").reverse().join("");
		}
	})

