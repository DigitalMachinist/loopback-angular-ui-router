'use strict';

angular.module( 'yourApp' )
  .controller( 'MainCtrl', [
    '$scope',
    function ( $scope ) {

      $scope.awesomeThings = [
        'LoopBack',
        'AngularJS + UI Router',
        'HTML5 Boilerplate',
        'Bootstrap CSS',
        'Karma + Jasmine'
      ];

    }
  ] );