var app = angular.module('UserTweet', ['fakerApiFactory']);

app.controller('UsersController', ['$scope', '$http', 'fakerApi', function($scope, $http, fakerApi){

  $http.get('/api/users').then(function(response){
    var data = response.data;
    console.log(data);
    $scope.users = data.users;
    console.log($scope.users);
  });

  $scope.users = [];

  $scope.newUser = {};

  $scope.createTweet = function(){

    fakerApi.getName().then(function(response){
      console.log(response);
      $scope.newUser.name = JSON.parse(response.data);
      console.log($scope.newUser.name);

      fakerApi.getUsername().then(function(response){
        $scope.newUser.username = "@" + JSON.parse(response.data);
        console.log($scope.newUser.username);

        fakerApi.getImage().then(function(response){
          $scope.newUser.image = JSON.parse(response.data);
          console.log($scope.newUser.image);

          $http.post('/api/users', {user: $scope.newUser}).then(function(response){
            var data = response.data;
            console.log(data);

            $scope.users.push({name: data.name, image: data.image, tweet: data.tweet, username: data.username});

            console.log($scope.users);

          });

        });

      });

    });



  };
  console.log($scope.newUser);
    return $scope.newUser;
  console.log($scope.newUser);

}]);




      // $http.get('http://faker.hook.io?property=name.findName&locale=de').then(function(response){
      //   $scope.newUser.name = response.data;
      //   console.log($scope.newUser.name);

      //   $http.get('http://faker.hook.io?property=internet.userName&locale=de').then(function(response){
      //     $scope.newUser.image = response.data;
      //     console.log($scope.newUser.image);

      //     $http.get('http://faker.hook.io?property=image.people&locale=de').then(function(response){
      //       $scope.newUser.username = response.data;
      //       console.log($scope.newUser.username);

      //       $http.post('/api/users', {user: $scope.newUser}).then(function(response){

      //         console.log(response);

      //         var data = response.data;

      //         console.log(data.name);

      //         $scope.users.push(data);

      //         console.log($scope.users);
      //       });

      //     });

      // //   });
      //   console.log($scope.newUser);


// http://faker.hook.io?property=name.findName&locale=de
// http://faker.hook.io?property=internet.userName&locale=de
// http://faker.hook.io?property=image.people&locale=de
