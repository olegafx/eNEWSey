module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
            files : ['Gruntfile.js', 'app/js/*.js'],
            options : {
                validthis : true,
                laxcomma : true,
                laxbreak : true,
                browser : true,
                eqnull : true,
                debug : true,
                devel : true,
                boss : true,
                expr : true,
                asi : true,
                globals : {
                    jQuery : true
                }
            }
        },
        qunit : {
            all : {
                options : {
                    urls : ['http://localhost/tests/index.html']
                }
            }
        },
        concat : {
            dist : {
                src : ['app/js/*.js'],
                dest : 'app/js/concat.js'
            }
        },
        uglify : {
            options : {
                mangle : {
                    except : ['jQuery']
                }
            },
            my_target : {
                files : {
                    'app/js/main.min.js' : ['app/js/concat.js']
                }
            }
        },
        cssmin : {
            compress : {
                files : {
                    "app/css/app.min.css" : ['app/css/main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};