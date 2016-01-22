'use strict';


module.exports = {
   options: [ 'last 1 version' ],
      dist: {
        files: [ {
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        } ]
      }
};