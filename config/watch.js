'use strict';

module.exports = {
   coffee: {
        files: [ '<%= yeoman.app %>/scripts/{,*/}*.coffee' ],
        tasks: [ 'coffee:dist' ]
      },
      coffeeTest: {
        files: [ 'test/spec/{,*/}*.coffee' ],
        tasks: [ 'coffee:test' ]
      },
      styles: {
        files: [ '<%= yeoman.app %>/styles/{,*/}*.css' ],
        tasks: [ 'copy:styles', 'autoprefixer' ]
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js(on)?',
          '<%= yeoman.app %>/../server/{,*/}*.js(on)?',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
};