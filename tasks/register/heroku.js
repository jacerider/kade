module.exports = function (grunt) {
	grunt.registerTask('heroku', [
		'bower:install',
		'compileAssets',
		'concat',
		'ngAnnotate:prod',
		'uglify',
		'cssmin',
		'sails-linker:prodJs',
		'sails-linker:prodStyles',
		'sails-linker:devTpl',
		'sails-linker:prodJsJade',
		'sails-linker:prodStylesJade',
		'sails-linker:devTplJade'
	]);
};
