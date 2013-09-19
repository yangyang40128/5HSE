module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			development:{
				options:{
					yuicompress:false,
				},
				files:{
					'css/main-<%= pkg.version %>-dev.css':'css/main.less',
				}
			},
			product:{
				options:{
					yuicompress:true,
				},
				files:{
					'public/asset/css/main-<%= pkg.version %>.css':'css/main.less'
				}
			}
		},
		uglify:{
			product:{
				files:{
					'public/asset/js/main-<%= pkg.version %>.js':'js/*.js'
				}
			}
		},
		watch:{
			css:{
				files:'css/*.less',
				tasks:['less:development','less:product']
			},
			js:{
				files:'js/*.js',
				tasks:'uglify:product'
			}
		},
		connect:{
			tiger:{
				options:{
					hostname: "0.0.0.0",
                    port: 8080,
                    base: '.'
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['less','uglify']);
}