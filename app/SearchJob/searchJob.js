var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.organisationMenu = false;
    $scope.volunteerMenu = false;

    var urlParams;
    var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);

    console.log(urlParams);

    var userType = urlParams.name;
    var formType = urlParams.form;
    
    if (userType == 'organisation') {
        $scope.organisationMenu = true;
    }
    if (userType == 'volunteer') {
        $scope.volunteerMenu = true;
    }
}]);