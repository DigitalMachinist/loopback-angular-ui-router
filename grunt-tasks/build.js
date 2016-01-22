'use strict';

module.exports = function ( grunt ) {

  grunt.registerTask( 'build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cdnify',
    'ngAnnotate',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ] );

}
