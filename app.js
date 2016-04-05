angular.module('app', [
  'app.blackjack',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'blackjack.html',
      controller: 'blackjackController'
    });


});
