
	app.controller('myCtrl',function($scope){
			$scope.input = "input your note";

		$scope.save = function(){
			alert( $scope.input + "  saved" );

		}
		$scope.clear = function(){

			$scope.input = "";
		}

		$scope.left = function(){
			var left = 1500 - $scope.input.length;
			return left + '/1500';
		};
	})