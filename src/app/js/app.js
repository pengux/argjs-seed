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

		var App = angular.module('app', [
			'ngRoute',
			'app.controllers',
			'app.filters',
			'app.services',
			'app.directives'
		]);

		App.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!');

			// Allow CORS
			$httpProvider.defaults.useXDomain      = true;
			$httpProvider.defaults.withCredentials = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}]);

		return App;
});
