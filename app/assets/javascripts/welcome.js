var app = angular.module('UserTweet', []);

app.controller('UsersController', ['$scope', '$http', '$q', function($scope, $http, $q){

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

app.filter('myDateFormat', function myDateFormat($filter){
  if(!$filter){
    console.log('none to be found');
  } else {
    return function(text){
      var newDate = new Date(moment(text).format('YYYY-MM-DD hh:mm:ss a'));
      console.log(newDate);
      var fromNow = moment(newDate).fromNow();
      console.log(fromNow);
      return $filter('date')(fromNow);
    }
  }
});
