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



	// $scope.items = [{
	// 	"id": 1,
	// 	"email": "sherin@toobler.com",
	// 	"created": "2016-06-15T13:58:03.000Z",
	// 	"display_name": "Sherin",
	// 	"first_name": "Sherin",
	// 	"last_name": "Mathew",
	// 	"gender": "F",
	// 	"birth_date": "2016-07-27T00:00:00.000Z"
	// }, {
	// 	"id": 2,
	// 	"email": "nimisha@toobler.com",
	// 	"created": "2016-06-15T14:01:45.000Z",
	// 	"display_name": "Nimisha",
	// 	"first_name": "Nimisha",
	// 	"last_name": "Sebastian",
	// 	"gender": "F",
	// 	"birth_date": "2016-07-20T00:00:00.000Z"
	// }, {
	// 	"id": 3,
	// 	"email": "jismy@toobler.com",
	// 	"created": "2016-06-15T14:13:10.000Z",
	// 	"display_name": null,
	// 	"first_name": "Jismy",
	// 	"last_name": null,
	// 	"gender": "F",
	// 	"birth_date": "2016-07-26T00:00:00.000Z"
	// }, {
	// 	"id": 4,
	// 	"email": "tester@tester.com",
	// 	"created": "2016-06-15T16:32:47.000Z",
	// 	"display_name": null,
	// 	"first_name": "Tester",
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": "2016-07-26T00:00:00.000Z"
	// }, {
	// 	"id": 5,
	// 	"email": "dona@toobler.com",
	// 	"created": "2016-06-16T04:04:05.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": "F",
	// 	"birth_date": null
	// }, {
	// 	"id": 6,
	// 	"email": "aijuthomas90@gmail.com",
	// 	"created": "2016-06-16T05:59:21.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }, {
	// 	"id": 7,
	// 	"email": "asha@toobler.com",
	// 	"created": "2016-06-17T06:15:03.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }, {
	// 	"id": 8,
	// 	"email": "phil@test.com",
	// 	"created": "2016-06-20T16:20:34.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }, {
	// 	"id": 9,
	// 	"email": "admin1@test.com",
	// 	"created": "2016-06-23T17:15:25.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }, {
	// 	"id": 10,
	// 	"email": "test1@toobler.com",
	// 	"created": "2016-07-28T05:00:43.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }, {
	// 	"id": 11,
	// 	"email": "test2@toobler.com",
	// 	"created": "2016-07-28T05:01:05.000Z",
	// 	"display_name": "Testing",
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": "M",
	// 	"birth_date": "2002-02-04T00:00:00.000Z"
	// }, {
	// 	"id": 12,
	// 	"email": "test3@toobler.com",
	// 	"created": "2016-07-28T05:01:20.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": "Ass",
	// 	"gender": "M",
	// 	"birth_date": "2016-07-13T00:00:00.000Z"
	// }, {
	// 	"id": 13,
	// 	"email": "bevrly@test.com",
	// 	"created": "2016-08-29T17:36:10.000Z",
	// 	"display_name": null,
	// 	"first_name": null,
	// 	"last_name": null,
	// 	"gender": null,
	// 	"birth_date": null
	// }]

	}
