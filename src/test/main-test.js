// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	paths: {
		angular: '/src/bower_components/angular/angular',
		angularRoute: '/src/bower_components/angular-route/angular-route',
		angularMocks: '/src/bower_components/angular-mocks/angular-mocks',
		text: '/src/bower_components/requirejs-text/text',
		fixtures: '/src/test/unit/fixtures'

	},
	baseUrl: '/src/app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	deps: tests,
	callback: window.__karma__.start
});