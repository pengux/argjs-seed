/*global module */
module.exports = function(grunt) {
	"use strict";

	var appRoot = '/';

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-image-embed');
	grunt.loadNpmTasks('grunt-plugin-angular-template-inline');
	grunt.loadNpmTasks('grunt-string-replace');

	grunt.initConfig({
		clean: [
			'build',
			'dist'
		],
		"string-replace": {
			dist: {
				files: {
					'dist/index.html': 'dist/index.html'
				},
				options: {
					replacements: [{
						pattern: /<!--\s*LESS_START[\w\W]*LESS_END\s*-->/ig,
						replacement: '<link href="css/main.css" rel="stylesheet" type="text/css" />'
					}, {
						pattern: /<!--\s*JS_START[\w\W]*JS_END\s*-->/ig,
						replacement: '<script src="js/app.js"></script>'
					}]
				}
			}
		},
		copy: {
			dist: {
				files: [{
					src: 'src/index.html',
					dest: 'dist/index.html'
				},
				{
					cwd: 'src/app/',
					expand: true,
					src: ['img/**'],
					dest: 'dist/'
				}]
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'app',
					baseUrl: 'src/app/js',
					out: 'dist/js/app.js',
					mainConfigFile: 'src/app/js/main.js',
					optimize: 'uglify2'
				}
			}
		},
		angularTemplateInline: {
			dist: {
				files: [{
					src: ['src/app/partials/**/*.html'],
					dest: 'dist/index.html',
					baseFile: 'index.html'
				}]
			}
		},
		less: {
			dist: {
				options: {
					optimization: 0,
					ieCompat: true,
					yuicompress: true
				},
				files: {
					'dist/css/main.css': 'src/app/less/main.less'
				}
			}
		},
		imageEmbed: {
			dist: {
				src: ['dist/css/main.css'],
				dest: 'dist/css/main.css',
				options: {
					deleteAfterEncoding: true
				}
			}
		}
	});

	grunt.registerTask('dist', ['clean', 'copy:dist', 'requirejs:compile', 'angularTemplateInline:dist', 'string-replace:dist', 'less:dist', 'imageEmbed:dist']);
};

