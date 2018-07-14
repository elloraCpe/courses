module.exports = function(grunt) {

	grunt.initConfig({

		sass: {

	  		dist: {
	    		
		    	files: {

		      		"css/main.css": "sass/main.scss"
		      		
		    	}

	  		}

	  	},  //end sass

	  	watch: {

	  		options: { //reload browser if it detects changes to any watched files

	  			livereload: true

	  		},

  			sass_files: {

	  			files: ["sass/**/*"],
	  			tasks: ["sass"], //execute sass task

  			},

	  		html_files: { //watch for changes

	  			files: ["*.html"]
	  			
	  		},

	  		js_files: {

	  			files: ["js/playground.js"]

	  		}

	  	} //end watch

	}); //end initConfig

	grunt.loadNpmTasks('grunt-contrib-sass'); //sass compiler
	grunt.loadNpmTasks('grunt-contrib-watch'); //watcher

} //end function