'use strict';

module.exports = {
  options: {
        singleQuotes: true
      },
      dist: {
        files: {
          src: [ '<%= yeoman.dist %>/scripts/*.js' ]
        }
      }
};