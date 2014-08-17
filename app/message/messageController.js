var messageApp = angular.module('messageApp', []);

messageApp.controller('messageController', ['$scope', function ($scope) {
    $scope.compose = true;
    $scope.inbox = false;
    $scope.send = false;
    $scope.archive = false;
    $scope.currentnode = null;
    $scope.messageSidebar = [
        { 'name': 'Inbox' },
        { 'name': 'Sent' },
        { 'name': 'Archive' }
    ];
    $scope.toggle = function ($index) {
        $scope.currentnode = $index;
        if ($index == 0) {
            $scope.inbox = true;
            $scope.compose = false;
            $scope.send = false;
            $scope.archive = false;
        }
        else if ($index == 1) {
            $scope.send = true;
            $scope.compose = false;
            $scope.inbox = false;
            $scope.archive = false;
        }
        else if ($index == 2) {
            $scope.archive = true;
            $scope.compose = false;
            $scope.inbox = false;
            $scope.send = false;
        } else {
            $scope.compose = true;
            $scope.send = false;
            $scope.inbox = false;
            $scope.archive = false;
        }
    }

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');
}]);