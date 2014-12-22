module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		replace: {
			main: {
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
			},
			readme: {
				options: {
					patterns: [
						{
							match: "LICENSE",
							replacement: "<%= grunt.file.read('LICENSE') %>"
						}
					]
				},
				files: {
					"README.md": "README.src.md"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('default', ['replace']);
};
