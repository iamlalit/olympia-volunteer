var messageApp = angular.module('messageApp', []);

messageApp.controller('messageController', ['$scope', function ($scope) {
    $scope.messageSidebar = [{'name': 'Inbox'},
    { 'name': 'Sent' },
    { 'name': 'Archive' }];
}]);