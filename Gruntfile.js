module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
      png: {
        options: {
          optimizationLevel: 10,
        },
        files: [{
          expand: true,
          cwd: 'build/release/media_assets/images/',
          src: ['**/*.png'],
          dest: 'build/release/media_assets/images/'
        }]
      },
      jpg: {
        options: {
          progressive: true,
          optimizationLevel: 10,
        },
        files: [{
          expand: true,
          cwd: 'build/release/media_assets/images/',
          src: ['**/*.jpg'],
          dest: 'build/release/media_assets/images/'
        }]
      },
      gif: {
        options: {
          optimizationLevel: 10,
        },
        files: [{
          expand: true,
          cwd: 'build/release/media_assets/images/',
          src: ['**/*.gif'],
          dest: 'build/release/media_assets/images/'
        }]
      }
    },
    copy: {
      build: {
        cwd: 'src',
        src: ["**" ],
        dest: 'build/src/',
        expand: true
      },
      release: {
        cwd: 'build/release',
        src: ["**"],
        dest: 'release/',
        expand: true
      },
      assets: {
        cwd: 'build/src',
        src: ["media_assets/**", "properties.xml", "pages/**"],
        dest: 'build/release/',
        expand: true
      }
    },
    clean: {
      build: ['build', 'release'],
      release: ['build/release']
    },
    uglify: {
      production: {
        options: {
          dead_code: true,
          compress: true,
          report: 'min'
        },
        expand: true,
        cwd: "release/javascripts/",
        src: ["*.js", "filters/*.js", "menus/*.js", "widgets/*.js"],
        dest: "release/javascripts/"
      },
      templates: {
        options:{
          footer: "(function(){ Handlebars.templates = this['JST']; })();"
        },
        files: {
          'build/release/javascripts/templates/templates.cmpl.js': 'build/release/javascripts/templates/templates.cmpl.js'
        }
      },
      scripts: {
       options: {
          mangle: false,
          beautify: true
        },
        expand: true,
        cwd: "build/src/js",
        src: ["*.js", "filters/*.js", "menus/*.js", "widgets/*.js"],
        dest: "build/release/javascripts/",
      },
      frameworks: {
        expand: true,
        cwd: "build/src/frameworks/",
        src: ["*"],
        dest: "build/release/frameworks/"
      }
    },
    handlebars: {
      compile: {
        options: {
          processName: function(filePath) {
            var pieces = filePath.split("/");
            return pieces[pieces.length - 1];
          }
        },
        files: {
          "build/release/javascripts/templates/templates.cmpl.js" : ["build/src/templates/*.tmpl.js"]
        },
      },
    },
    less: {
      build: {
        options: {
          paths: ["build/src/less"]
        },
        files: {
          "build/release/stylesheets/main.css": "build/src/less/main.less"
        }
      },
      production: {
        options: {
          paths: ["src/less"],
          cleancss: true,
          compress: true
        },
        files: {
          "build/release/stylesheets/main.css": "build/src/less/main.less"
        },
      },
      development: {
        options: {
          paths: ["src/less"]
        },
        files: {
          "build/release/stylesheets/main.css": "src/less/main.less"
        }
      }
    },
    compress: {
      production: {
        options: {
          mode: 'zip',
          archive: "theme.zip"
        },
        expand: true,
        cwd: "build/release/",
        src: ["**/*"]
      }
    },
    watch: {
      scripts: {
        files: 'src/js/**/*.js',
        tasks: ['clean:build', 'copy:build', 'copy:assets', 'scripts']
      },
      handlebars: {
        files: 'src/templates/**/*.js',
        tasks: ['copy:build', 'templates']
      },
      stylesheets: {
        files: 'src/less/**/*.less',
        tasks: ['less:development']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Templates task
  grunt.registerTask('templates', ['handlebars', 'uglify:templates']);

  // Javascript Tasks
  grunt.registerTask('scripts', ['uglify:scripts', 'uglify:frameworks']);

  // Default task(s).
  //grunt.registerTask('development', ['less:development', 'templates']);
    grunt.registerTask('development', ['watch']);

  // Image task(s)
  grunt.registerTask('image', ['imagemin:png', 'imagemin:jpg', 'imagemin:gif']);

    //Build tasks 
  grunt.registerTask('build', ['clean:build', 'copy:build', 'copy:assets', 'scripts', 'templates', 'less:build']);
  grunt.registerTask('production', ['build',  'image', 'less:production', 'uglify:production', 'compress']);

};