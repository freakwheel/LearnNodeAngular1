'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'nvd3','smart-table', 'ngResource','ngAnimate', 'ngSanitize', 'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/detail/:cname', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/companies', {
        templateUrl: 'views/companies.html',
        controller: 'CompanyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  
}]);
