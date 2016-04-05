angular.module('app', [
  'app.blackjack',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/blackjack');

  $stateProvider
  .state('blackjack', {
      url: '/blackjack',
      templateUrl: 'app/views/blackjack.html',
      controller: 'blackjackController'
    })

});
