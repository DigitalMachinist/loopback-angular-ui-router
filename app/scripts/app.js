'use strict';

angular
  .module( 'gitWritingApp', [
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
