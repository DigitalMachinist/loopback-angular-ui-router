'use strict';

describe( 'Module: gitWritingApp', function () {

  // Load the controller's module.
  beforeEach( module( 'gitWritingApp' ) );

  describe( 'Controller: MainCtrl', function () {

    var controller;
    var scope;

    // Initialize the controller and a mock scope.
    beforeEach( inject( function ( $controller, $rootScope ) {
      scope = $rootScope.$new();
      controller = $controller( 'MainCtrl', { $scope: scope } );
    } ) );

    it( 'should attach a list of awesomeThings to the scope', function () {
      expect( scope.awesomeThings.length ).toBe( 3 );
    } );

  } );

} );
