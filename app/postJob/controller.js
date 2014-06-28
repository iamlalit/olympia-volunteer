'use strict';
/* main App */
var app = angular.module('postJobcontroller', ['LocalStorageModule']);
app.controller('postJobCntrl', ['$scope', 'localStorageService', function($scope, localStorageService){
		$scope.user = {
			"title" : "",
			"describeWork": ""
		};
}]);
