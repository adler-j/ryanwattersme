module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          '../_includes/minified.min.js': ['scripts/*.js'],
          '../assets/scripts/samples.min.js':['../assets/scripts/samples/*.js']
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourcemap: 'none',
          outputStyle: 'compressed'
            // Uncomment the below line to include outside directories as well.
            // loadPath: ['location/of/other/sass']
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          src: ['style-embed.scss'],
          dest: '../_includes/',
          ext: '.html'
        },{
          expand: true,
          src: ['../assets/altstylesheets/samples.scss'],
          dest: '../assets/altstylesheets/',
          ext: '.css'
        }]
      }
    },
    watch: {
      // for scripts, run uglify
      options: {
        livereload: true,
      },
      pages: {
        files: ['../_site/index.html']
      },
      scripts: {
        files: ['scripts/*.js','../assets/scripts/samples/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['sass/*.scss','style-embed.scss','../assets/altstylesheets/samples.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
