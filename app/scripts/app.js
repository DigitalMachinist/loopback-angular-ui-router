'use strict';

angular
  .module( 'yourApp', [
    'ngResource',
    'ui.router'
  ] )
  .config( [ '$stateProvider', '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {

      //delete $httpProvider.defaults.headers.common[ 'X-Requested-With' ];
      $urlRouterProvider.otherwise( '/' );
      $stateProvider
        .state( 'index', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        } );

    }
  ] );
