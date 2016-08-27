'use strict';

angular.module('nodeboilerplate', ['ngMaterial'])
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('red')
			.accentPalette('deep-orange')
      .backgroundPalette('grey');
	});
