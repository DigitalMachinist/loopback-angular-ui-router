// Generated on 2015-05-31 using generator-angular-ui-router 0.5.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'


module.exports = function (grunt) {
    //Load all .js tasks definitions at tasks folder
    grunt.loadTasks('./grunt-tasks');
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    var options = {
        appName: require('./package.json').name,
        yeoman: {
      // configurable paths
      app: require( './bower.json' ).appPath || 'app',
      dist: 'client'
    },
    };

    // Load grunt configurations automatically at config folder
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask( 'default', [
    'jshint',
    'loopback',
    'test',
    'build'
    ] );

};