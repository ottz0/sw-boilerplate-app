module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        hostname: 'localhost',
        base: 'app'
      },
      livereload: {
        options: {
          open: true
        }
      }
    },

    
    /*
      Base Tasks
    */
    watch: {
      options: {
        livereload: true,
      },
      less: {
        files: ['less/*.less','less/components/*.less'],
        tasks: ['less'],
      },
      css: {
        files: ['css/*.css'],
        tasks: ['less'],
      },
      html: {
        files: ['builds/development/*.html'],
      }
    },


    /*
      Uncomment to add for dev
    */
    // concat: {
    //   development: {
    //     src: ['js/*.js', 'js/vendor/*.js'],
    //     dest: 'builds/development/js/renfrew-main.js',
    //   },
    // },   

    // copy: {
    //   distribution: {
    //     files: [
    //       {
    //         expand: true, 
    //         cwd: 'builds/development',
    //         src: 'fonts/**', 
    //         dest: 'builds/distribution/',
    //       },
    //     ],
    //   }
    // },

    // processhtml: {
    //     build: {
    //         files: {
    //             'builds/distribution/index.php' : ['builds/distribution/index.php'],
    //             'builds/distribution/conveyancing.php' : ['builds/distribution/conveyancing.php'],
    //             'builds/distribution/verify.php' : ['builds/distribution/verify.php'],
    //         }
    //     }
    // },

    // clean: {
    //   build: {
    //     src: [ 'builds/distribution/*' ]
    //   },
    // },

    // cssmin: {
    //   distribution: {
    //     files: [{
    //       expand: true,
    //       cwd: 'builds/development/css',
    //       src: ['*.css', '!*.min.css'],
    //       dest: 'builds/distribution/css',
    //       ext: '.min.css'
    //     }]
    //   }
    // },

    // uglify: {
    //   distribution: {
    //     files: {
    //       'builds/distribution/js/renfrew-main.min.js': ['builds/development/js/renfrew-main.js']
    //     }
    //   }
    // }

  


  });

  // Base tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  //Added Tasks - Uncomment to add
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task for development.
  grunt.registerTask('server', ['connect','watch']);

  // Distribution packaging.
  //grunt.registerTask('dist', ['clean','uglify','cssmin','copy','processhtml']);

};