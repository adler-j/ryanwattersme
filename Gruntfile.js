module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    '_includes/minified.min.js': ['gruntscripts/*.js']
                }
            }
        },
        smushit: {
            mygroup: {
                src: ['images/*.png', 'images/*.jpg','images/*.jpeg'],
                dest: 'images/optimized'
            }
        },
        watch: {
            // for scripts, run uglify 
            scripts: {
                files: ['gruntscripts/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-smushit');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('optimize', ['smushit']);
};
