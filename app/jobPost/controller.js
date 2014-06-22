'use strict';
/* main App */
var app = angular.module('jobPostcontroller', ['ngTable']);

app.controller('jobPostCtrl', function($scope, $filter, ngTableParams){
	var data = [{jobTitle: "Volunteer Grant Writers", Applicants: 50, messaged: 3, hired:2, status:"Open"},
                {jobTitle: "Public Relation Intern - Volunteer", Applicants: 43, messaged: 0, hired:0, status:"Open"},
                {jobTitle: "Outreach Volunteer", Applicants: 27, messaged: 1, hired:0, status:"Closed"},
                {jobTitle: "Volunteer Article Writings", Applicants: 29, messaged: 2, hired:2, status:"Closed"},
                {jobTitle: "Volunteer Coordinator - Volunteer", Applicants: 34, messaged: 1, hired:1, status:"Open"},
                {jobTitle: "Crowd Control Volunteering", Applicants: 43, messaged: 3, hired:0, status:"Open"},
                {jobTitle: "Football Refree Volunteer", Applicants: 27, messaged: 2, hired:0, status:"Closed"},
                {jobTitle: "Volunteer Coordinator-Volunteer", Applicants: 29, messaged: 1, hired:1, status:"Closed"},
                {jobTitle: "Volunteer Coordinator-Volunteer", Applicants: 34, messaged: 5, hired:3, status:"Open"},
                {jobTitle: "Crowd Control Volunteer", Applicants: 43, messaged: 4, hired:2, status:"Closed"},
                {jobTitle: "Outreach Volunteering", Applicants: 27, messaged: 5, hired:1, status:"Closed"},
                {jobTitle: "Volunteer Article Writers", Applicants: 29, messaged: 2, hired:0, status:"Closed"},
                {jobTitle: "Football Refree Volunteering", Applicants: 34, messaged: 1, hired:0, status:"Closed"},
                {jobTitle: "Private Relation Intern - Volunteer", Applicants: 43, messaged: 4, hired:0, status:"Open"},
                {jobTitle: "Public Relation Intern - Volunteer", Applicants: 34, messaged: 3, hired:2, status:"Open"}];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            jobTitle: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});