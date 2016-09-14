angular.module('project', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('names',{
            url:'/names',
            templateUrl: "../views/pokemon-names.html",
            controller: "mainCtrl",
            controllerAs:"vm"
          })
          .state('stats',{
            url:'/stats',
            templateUrl: "../views/pokemon-stats.html",
            controller: "mainCtrl",
            controllerAs:"vm"
          });
          $urlRouterProvider
            .otherwise('/');
    });
