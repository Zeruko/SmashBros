var smashApp = angular.module('smashApp', ['ngRoute', 'ngAnimate']);

smashApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'views/home.html',
            controller: 'smashController'
    });
}]);

smashApp.controller('smashController', ['$scope', '$http', function($scope, $http){
    $scope.faveChar = "Fox"
    
    $http.get('../data/characters.json').then(function(response){
        $scope.characters = response.data;
    });
    
    $scope.displayBust = function(name, bust){
        $scope.characterBustName = name;
        $scope.characterBust = bust;
    }
    
}]);
