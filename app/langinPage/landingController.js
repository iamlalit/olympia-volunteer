var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.organisationMenu = false;
    $scope.volunteerMenu = false;
    var sPageURL = document.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    var target = sParameterName[1];
    if (target == 'organisation') {
        $scope.organisationMenu = true;
    }
    if (target == 'volunteer') {
        console.log('volunteer');
        $scope.volunteerMenu = true;
    }
}]);