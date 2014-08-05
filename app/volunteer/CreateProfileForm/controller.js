var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.listOfSchools = [];
    $scope.lengthOfSchools = $scope.listOfSchools.length;

    $scope.updateSchoolDetails = function(obj){
        $scope.school = {};
        $scope.listOfSchools.push(obj);
        $scope.lengthOfSchools = $scope.listOfSchools.length;
    }
}]);