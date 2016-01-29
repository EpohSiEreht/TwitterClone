var app = angular.module('UserTweet', ['fakerApiFactory']);

app.controller('UsersController', ['$scope', '$http', 'fakerApi', function($scope, $http, fakerApi){

  $http.get('/api/users').then(function(response){
    var data = response.data;
    $scope.users = data.users;
  });

  $scope.users = [];

  $scope.newUser = {};

  $scope.createTweet = function(){

    fakerApi.getName().then(function(response){
      $scope.newUser.name = JSON.parse(response.data);

      fakerApi.getUsername().then(function(response){
        $scope.newUser.username = "@" + JSON.parse(response.data);

        fakerApi.getImage().then(function(response){
          $scope.newUser.image = JSON.parse(response.data);

          $http.post('/api/users', {user: $scope.newUser}).then(function(response){
            var data = response.data;

            $scope.users.push({name: data.name, image: data.image, tweet: data.tweet, username: data.username});

          });

        });

      });

    });

  };

  return $scope.newUser;

}]);
