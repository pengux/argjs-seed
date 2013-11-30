define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		// Declare app level module which depends on filters, and services

		return angular.module('app', [
			'ngRoute',
			'app.controllers',
			'app.filters',
			'app.services',
			'app.directives'
		]);
});
