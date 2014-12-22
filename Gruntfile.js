module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		replace: {
			build: {
				options: {
					patterns: [
						{
							match: "VERSION",
							replacement: "<%= pkg.version %>"
						},
						{
							match: "NAME",
							replacement: "<%= pkg.name %>"
						},
						{
							match: "DESCRIPTION",
							replacement: "<%= pkg.description %>"
						},
						{
							match: "SCRIPT_CONTENT",
							replacement: "<%= grunt.file.read('index.js') %>"
						}
					]
				},
				files: {
					"bezier-easing.user.js": "bezier-easing.src.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('default', ['replace']);
};
