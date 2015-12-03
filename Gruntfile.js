module.exports = function(grunt){
 
    grunt.initConfig({

    	uglify: {
      		my_target: {
        		files: {
        			'dist/js/app.min.js': ['dev/js/*.js']
        		}
      		} //my_target
    	}, 
        watch: {
 
          scripts: {
         
            files: ['dev/js/*.js'],
            tasks: ['uglify'],
            options: {
              spawn: false,
            }
         
          },

          images: {
 
            files: ['dev/img/*.{png,jpg,gif}'],
            tasks: ['newer:imagemin'],
            options: {
              spawn: false,
            }
         
          },
          css: {
         
            files: ['dev/css/*.css'],
            tasks: ['cssmin'],
            options: {
              spawn: false,
            }
         
          }
          
        },

        imagemin: {
 
            main: {
         
              files: [{
                expand: true,
                cwd: 'dev/img/',
                src: ['**/*.{png,jpg,gif,.svg}'],
                dest: 'dist/img/'
              }]
         
            }
         
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'dev/css',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/css',
              ext: '.min.css'
            }]
          }
        },

        bower: {
            install: {
                options: {
                    targetDir: 'dist/vendor',
                    layout: 'byComponent',
                    install: true,
                    verbose: true,
                    cleanBowerDir: false
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('default', ["watch"]);
 
};