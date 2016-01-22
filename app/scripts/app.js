'use strict';

angular
  .module( 'yourApp', [
    'LoopBack',
    'ngResource',
    'ui.router'
  ] )
  .config( [ '$stateProvider', '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {

      // Delete $httpProvider.defaults.headers.common[ 'X-Requested-With' ];
      $urlRouterProvider.otherwise( '/' );
      $stateProvider
        .state( 'index', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        } );

    }
  ] );
