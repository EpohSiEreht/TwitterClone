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
    return $http.get('http://faker.hook.io/?property=image.avatar&locale=de');
  };


  // fakerInfo.loadAll = function(){

  //           // Clears the holding array of locations
  //           allInfo = [];

            

  //           // Perform an AJAX call to get current user's record
  //           $http.get('https://faker.hook.io?property=name.findName&locale=de').success(function(response){
  //               console.log(response);
  //               var name = JSON.parse(response.data);
  //               allInfo.push(name);
  //               return allInfo;
  //           });

  //           // Perform an AJAX call to get current user's record
  //           $http.get('https://faker.hook.io?property=internet.userName&locale=de').success(function(response){
  //               console.log(response);
  //               var username = JSON.parse(response.data);
  //               allInfo.push(username);
  //               return allInfo;
  //           });

  //           // Perform an AJAX call to get current user's record
  //           $http.get('https://faker.hook.io/?property=image.avatar&locale=de').success(function(response){
  //               console.log(response);
  //               var image = JSON.parse(response.data);
  //               allInfo.push(image);
  //               return allInfo;
  //           });

          
  //       };






  return fakerInfo;

}]);
