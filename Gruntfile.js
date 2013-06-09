module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'app/js/*.js'],
            options: {
                validthis: true,
                laxcomma: true,
                laxbreak: true,
                browser: true,
                eqnull: true,
                debug: true,
                devel: true,
                boss: true,
                expr: true,
                asi: true,
                globals: {
                    jQuery: true
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: ['http://localhost/tests/index.html']
                }
            }
        },
        concat: {
            js: {
                src: ['app/js/*.js', '!app/js/concat.js', '!app/js/main.min.js'],
                dest: 'app/js/concat.js'
            },
            css: {
                src: ['app/css/*.css', '!app/css/concat.css', '!app/css/main.min.css'],
                dest: 'app/css/concat.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'app/js/main.min.js': ['app/js/concat.js']
                },
                options: {
                    report: 'min'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "app/css/main.min.css": ['app/css/concat.css']
                }
            }
        },
        watch: {
            src: {
                files: ['app/**/*'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};