module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    '_includes/minified.min.js': ['gruntscripts/*.js']
                }
            }
        },
        imagemin: { // Task
            static: { // Target
                options: { // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                    use: [mozjpeg()]
                },
                files: { // Dictionary of files
                    'images/optimized/': ['images/*.png', 'images/*.jpg', 'images/*.jpeg']
                }
            }
        },
        watch: {
            // for scripts, run uglify
            options: {
                livereload: true,
            },
            pages: {
                files: ['_site/index.html']    
            }, 
            scripts: {
                files: ['gruntscripts/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('optimize', ['imagemin']);
};
