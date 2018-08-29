'use strict';

(function() {
  angular.module('descolarApp', ['ngRoute', 'MenuModule']).config([
    '$locationProvider',
    '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/servicos', {
          templateUrl: './static/pages/servicos.html',
        })
        .when('/prazos', {
          templateUrl: './static/pages/prazos.html',
        })
        .when('/faq', {
          templateUrl: './static/pages/faq.html',
        })
        .when('/adesao', {
          templateUrl: './static/pages/adesao.html',
        })
        .otherwise('/servicos');
    },
  ]);
})();
