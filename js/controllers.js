angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Dash) {
  $scope.dashes = Dash.all();
  $scope.remove = function(dash) {
    Dash.remove(dash);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.address = Chats.get($stateParams.address);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller("loveCtrl",function($scope, $stateParams, Dash){
  $scope.dash = Dash.get($stateParams.dashId);//$stateParams路由
})
.controller("orderCtrl",function($scope,$state){
	$state.go('/dash');
})
