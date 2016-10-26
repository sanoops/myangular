var app = angular.module("myfirstApp", []);



app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchData){

		if(!searchData){
			return arr;
		}

		var result = [];

		searchData = searchData.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.email.toLowerCase().indexOf(searchData) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});



function searchController($scope, $http){

	var url = "/data";
	// var url = "http://192.168.2.42:9999/api/user/list/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA4LCJyb2xlIjoidXNlciIsImlhdCI6MTQ3NTQ3ODQ1NH0.9CqlebleikQjvJbrtNyt31MpVrtxU_dfnW3lzBPoP8g?limit=10&offset=0";
	// var url = "http://www.w3schools.com/angular/angular_http.asp";

   $http.get(url).success( function(response) {
   		console.log("response ---- ")
   		console.log(response)
      $scope.items = response.data; 
   });


// $http.jsonp(url)
//     .success(function (result) {
//     	console.log(result)
//     	var newresult = JSON.parse(result);
//     	$scope.items = newresult; 
//         //do whatever you want with the result; the result is properly formatted JSON
//     })
//     .error(function (data, status) {
//     	$scope.items = status; 
//         //do whatever you want with the error
//     });



 //   $http.get(url)
	// .success(function(data, status, headers, config) {
 //    	$scope.items = data.data;
	// }).error(function(data, status, headers, config) {
 //    	$scope.items = status;
	// });

	}
