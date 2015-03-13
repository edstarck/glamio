// Обязательная обёртка
module.exports = function(grunt) {
	  require('load-grunt-tasks')(grunt);
	// Задачи
	grunt.initConfig({
		sass:{
			dev:{
				files:{
					'css/main.css': 'css/sass/main.sass',
					'css/fonts.css': 'css/sass/fonts.sass'
				}
			}
	  },
	  sprite:{
		  dev:{
				src: 'img/icons/*.png',
				dest: 'img/icons/spritesheet.png',
				destCss: 'css/sprites.css'
		  }
	  },
		watch:{
			css:{
				files: [
					'css/sass/main.sass',
					'css/sass/fonts.sass'
				],
				tasks: ['sass:dev'],
				options: {
					nospawn: true
				}
			},
			sprite:{
				files: [
					'img/icons/*.png'
				],
				tasks: ['sprite'],
				options: {
					nospawn: true
				}
			}
		}
	});
	// Задача по умолчанию
	grunt.registerTask('default', ['sass:dev', 'sprite', 'watch']);
};
