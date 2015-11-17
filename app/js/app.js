

angular.module('angularWeb', ['ngAnimate', 'ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('index', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'navBar@index': {
                            templateUrl: 'tpls/navbar.html'
                        },
                        'mainView@index': {
                            templateUrl: 'tpls/home.html'
                        }
                    }
                });

            $locationProvider.html5Mode(true).hashPrefix('!');
        }
    ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['angularWeb']);
});