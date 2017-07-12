module.exports = function(grunt){
    // CONFIG
    grunt.initConfig({
    less: {
      dist: {
        files: [{
          expand: true,
          cwd: './src/less',
          src: ['*.less'],
          dest: './dist/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
        browsers: ['last 15 versions', 'ie 8', 'ie 9']
      },
      single_file: {
                src: './dist/css/theme.css',
                dest: './dist/css/theme.prod.css'
            },
    }
  });
  // LOAD Grunt pligins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // REGISTER official tasks
  grunt.registerTask('production', ['less:dist','autoprefixer']);
}
