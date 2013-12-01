define(['angular', 'services'], function(angular, services) {
	'use strict';

  /* Directives */

	angular.module('app.directives', ['app.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
