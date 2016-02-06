var app = angular.module('UserTweet', ['fakerApiFactory']);

// app.service('myDateFormat', function () { /* ... */ });

// app.filter('myDateFormat', function myDateFormat($filter){
//   return function(text){
//     var newDate = new Date(moment(text).format('YYYY-MM-DD hh:mm:ss a'));
//     console.log(newDate);
//     var fromNow = moment(newDate).fromNow();
//     console.log(fromNow);
//     return $filter('date')(fromNow);
//   }
// });

app.controller('UsersController', ['$scope', '$http', 'fakerApi', function($scope, $http, fakerApi){

  // bind the controller to vm (view-model)
  var vm = this;

  // create a new time variable with the current date
  vm.time = new Date();
  console.log(vm.time);

  $http.get('/api/users').then(function(response){
    var data = response.data;
    $scope.users = data.users;
  });

  $scope.users = [];
  $scope.time = [];


  $scope.newUser = {};

  $scope.createTweet = function(){

    // $scope.newUser.name = Faker::Name.first_name + Faker::Name.last_name;

    $http.post('/api/users', {user: $scope.newUser}).then(function(response){
      var data = response.data;
      console.log( data );
      $scope.users.unshift({name: data.name, image: data.image, tweet: data.tweet, username: data.username, created_at: data.created_at});
    });

    fakerApi.getName().then(function(response){
      $scope.newUser.name = JSON.parse(response.data);

      fakerApi.getUsername().then(function(response){
        $scope.newUser.username = "@" + JSON.parse(response.data);

        fakerApi.getImage().then(function(response){
          $scope.newUser.image = JSON.parse(response.data);

          $http.post('/api/users', {user: $scope.newUser}).then(function(response){
            var data = response.data;
            console.log( data );
            $scope.users.unshift({name: data.name, image: data.image, tweet: data.tweet, username: data.username, created_at: data.created_at});
            $scope.newUser = '';
          });

        });

      });

    });

  };
  console.log($scope.users);

//   $scope.convertTime = function(){

//   }

//   function timeAgo(){
//   var date = $('p#time').val();
//   moment(date).format('YYYY-MM-DD hh:mm:ss');
//   var newDate = new Date(moment(date).format('YYYY-MM-DD hh:mm:ss'));
//   console.log(newDate);
//   var fromNow = moment(newDate).fromNow();
//   console.log(fromNow);
//   $('p#time').empty();
//   $('p#time').html(fromNow);
// }

  return $scope.newUser;

}]);
