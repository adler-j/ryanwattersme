module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          '../_includes/minified.min.js': ['scripts/*.js'],
          '../assets/scripts/samples.min.js': ['../assets/scripts/samples/*.js']
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourcemap: 'none',
          outputStyle: 'compressed'
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: false,
          src: ['style.scss'],
          dest: '../_includes/style.html',
          ext: '.html'
        }]
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 1 version'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '../assets/css/style.css',
        dest: '../assets/css/style.min.css'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['scripts/*.js', '../assets/scripts/samples/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['sass/*.scss', 'style.scss'],
        tasks: ['sass']
      },
      postcss: {
        files: ['../_site/assets/css/style.css'],
        tasks: ['postcss']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['watch']);
};
