angular.module('app', [
  'app.blackjack',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('blackjack', {
      url: '/',
      templateUrl: 'app/views/blackjack.html',
      controller: 'blackjackController'
    })

});
