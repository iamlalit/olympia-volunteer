'use strict';
/* main App */
var app = angular.module('jobApplicationcontroller', ['ngTable']);

app.controller('jobAPPlicationCtrl', function($scope, $filter, ngTableParams){
	var data = [{jobTitle: "Volunteer Grant Writers", client:"Red Cross" , date:"12-Dec-214", status:"Active"},
                {jobTitle: "Outreach Volunteer", client:"Red Cross",  date:"12-Dec-214", status:"Archived", reason: "Declined by You"},
                {jobTitle: "Looking for Technical Volunteer", client:"Red Cross",  date:"12-Dec-214", status:"Hired"},
                {jobTitle: "Website QA Engineering", client:"Red Cross",  date:"12-Dec-214", status:"Hired"},
                {jobTitle: "Software Developer", client:"Red Cross",  date:"12-Dec-214", status:"Sent"},
                {jobTitle: "Volunteering Coordinator", client:"Red Cross",  date:"12-Dec-214", status:"Invited"},
                {jobTitle: "Crowd Control Volunteer", client:"Red Cross",  date:"12-Dec-214", status:"invited"},
                {jobTitle: "Football Refree Volunteering", client:"Red Cross",  date:"12-Dec-214", status:"Sent"},
                {jobTitle: "Software Designer", client:"Red Cross",  date:"12-Dec-214", status:"Archived", reason: "Declined by You"},
                {jobTitle: "Public Relation Intern - Volunteer", client:"Red Cross",  date:"12-Dec-214", status:"Archived", reason: "Declined by Organization"}];


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