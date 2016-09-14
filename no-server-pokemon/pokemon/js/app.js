angular.module('pokeFinder', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('pokemon',{
                url:'/pokemon',
                parent:'home',
                templateUrl: "../views/about-pokemon.html"
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl',
                controllerAs: 'vm'
            })
            .state('caught',{
                url:'/caught/:id',
                templateUrl: "../views/caught.html",
                controller: 'caughtCtrl',
                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/pokemon-locations.html",
                controller: 'locationsCtrl',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');
    });
