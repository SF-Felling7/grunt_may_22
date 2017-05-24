module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        options:{
          mangle: false
        },
        files: {
          // destination : [target]
          // min : [source code]

          'server/public/scripts/heroService.min.js': ['client/public/scripts/heroService.js'],
          'server/public/scripts/script.min.js': ['client/public/scripts/script.js']
          // service and controller need to be separate.
        }
      }
    },
    watch: {
      files: ['client/public/scripts/*.js'],
      tasks: ['uglify']
    },
    copy: {
      main: {
        files: [
          // current working directory
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**', 'angular/**'], dest: 'server/public/vendors'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // grunt name
  // grunt.registerTask('name', ['watch']);

  // grunt
  grunt.registerTask('default', ['copy', 'watch']);
};
