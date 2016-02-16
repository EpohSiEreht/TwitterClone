var app = angular.module('UserTweet', ['fakerApiFactory']);

app.service('myDateFormat', function myDateFormat($filter){
  return function(text){
    var newDate = new Date(moment(text).format('YYYY-MM-DD hh:mm:ss a'));
    console.log(newDate);
    var fromNow = moment(newDate).fromNow();
    console.log(fromNow);
    return $filter('date')(fromNow);
  }
});

app.controller('UsersController', ['$scope', '$http', 'myDateFormat', function($scope, $http, myDateFormat){

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

    $scope.newUser.name = faker.name.findName();

    $scope.newUser.username = faker.internet.userName();

    $scope.newUser.image = faker.internet.avatar();

    $http.post('/api/users', {user: $scope.newUser}).then(function(response){
      console.log(response);
      var data = response.data;
      console.log( data );
      $scope.users.unshift({name: data.name, image: data.image, tweet: data.tweet, username: data.username, created_at: data.created_at});
      $scope.newUser.tweet = '';
    });
  };

  return $scope.newUser;

}]);
