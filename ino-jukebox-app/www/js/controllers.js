angular.module('starter.controllers', [])

.controller('SongsCtrl', function($scope, $http, localStorageService) {
  
  $scope.$on('$ionicView.enter', function(e) {
    $scope.loadSongs();
  });

  $scope.loadSongs = function () {
     var url = localStorageService.get('inoURL');
     $http.get(url).
      success(function(data, status, headers, config) {
        $scope.songs = data;
      }).
      error(function(data, status, headers, config) {
       
      });
  }
 
  $scope.play = function (songId) {
    var url = localStorageService.get('inoURL');
    $http.put(url + '/' + songId).
      success(function(data, status, headers, config) {
       
      }).
      error(function(data, status, headers, config) {
       
      });
  }
})

.controller('SettingsCtrl', function($scope, localStorageService) {
  $scope.ino = { url: localStorageService.get('inoURL') };
  $scope.saveURL = function () {
    localStorageService.set('inoURL', $scope.ino.url);
    alert('Looking good!');
  }
});
