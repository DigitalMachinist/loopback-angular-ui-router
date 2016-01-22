'use strict';

describe( 'Module: yourApp', function () {

  // Load the controller's module.
  beforeEach( module( 'yourApp' ) );

  describe( 'Controller: MainCtrl', function () {

    var controller;
    var scope;

    // Initialize the controller and a mock scope.
    beforeEach( inject( function ( $controller, $rootScope ) {
      scope = $rootScope.$new();
      controller = $controller( 'MainCtrl', { $scope: scope } );
    } ) );

    it( 'has a list of awesomeThings in scope', function () {
      expect( scope.awesomeThings.length ).toBeDefined();
    } );

  } );

} );
