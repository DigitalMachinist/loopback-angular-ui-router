'use strict';

angular.module( 'gitWritingApp' )
  .controller( 'MainCtrl', [
    '$scope',
    function ( $scope ) {

      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

    }
  ] );