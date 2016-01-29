var api = angular.module('fakerApiFactory', []);

api.factory('fakerApi', ['$http', function($http){

  var fakerInfo = {};


  fakerInfo.getName = function(){
    return $http.get('http://faker.hook.io?property=name.findName&locale=de');
  };


  fakerInfo.getUsername = function(){
    return $http.get('http://faker.hook.io?property=internet.userName&locale=de');
  };


  fakerInfo.getImage = function(){
    return $http.get('http://faker.hook.io?property=image.people&locale=de');
  };




  return fakerInfo;

}]);

// var fakerName = $http.get('http://faker.hook.io?property=name.findName&locale=de').then(function(response){
//     console.log(response.data);
//     return response.data;
//   });

//   var fakerUsername = $http.get('http://faker.hook.io?property=internet.userName&locale=de').then(function(response){
//     console.log(response.data);
//     return response.data;
//   });

//   var fakerImage = $http.get('http://faker.hook.io?property=image.people&locale=de').then(function(response){
//     console.log(response.data);
//     return response.data;
//   });

// getName.then(function(response){
//       console.log(response.data);
//       fakerInfo.name = response.data;
//     });

//     getUsername.then(function(response){
//       var username = response.data;
//       console.log(username);
//       fakerInfo.username = "@"+username;
//     });

//     getImage.then(function(response){
//       console.log(response.data);
//       fakerInfo.image = response.data;
//     });
