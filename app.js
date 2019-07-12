var app = angular.module('app', ['ui.router', 'ngStorage']);

// app.config(function($stateProvider, $urlRouterProvider) {
app.config(['$stateProvider', function ($stateProvider) {
    // $urlRouterProvider.otherwise('/register');

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'register.html',
        controller: 'registerController'
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'loginController'
    });

    $stateProvider.state('success', {
        url: '/success',
        template: '<strong>Success</strong>',
    });    
}]);
