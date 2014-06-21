'use strict';
/* main App */
var app = angular.module('app.controller', []);

app.controller('viewAppCtrl', function($scope){
	$scope.sortByList = ['Best Match', 'Newest Applicants', 'Oldest Applicants', 'Feedback'];

	$scope.Applicants = [];
	$scope.hiddenApplicants = [];
    $scope.shortlistedApplicants = [];
    $scope.messagedApplicants = [];
    $scope.hiredApplicants = [];
    $scope.hiddenModalData = ["Okay, but not quite right", "Poor comments in work history", "Poor quality of work letter", "Other", "Report to volunteer"];
	$scope.Applicants.push({Name:"Sandy Sharma",
            job: 'QA Analyst',
            city: 'Amsterdam', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            statusColor: 'red',
            invited: true,   
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Lalit Sachdeva",
            job: 'QA Specialist',
            city: 'Delhi', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            statusColor: 'green',    
            invited: false,
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Rodger Georgin",
            job: 'QA Engineer',
            city: 'Chicago', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: false,
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"George Ducart",
            job: 'Automation Engineer',
            city: 'New York', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: true,
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Benjamin Schuffl",
            job: 'QA Analyst',
            city: 'Netherlands', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            statusColor: 'red',
            invited: false,
            selected: false,      
            value: false
    }); 
	//find number of applicants
	$scope.lengthOfApplicants = $scope.Applicants.length;
	$scope.lengthOfHiddenApplicants = $scope.hiddenApplicants.length;
    $scope.lengthOfshortlistedApplicants = $scope.shortlistedApplicants.length;
    $scope.lengthOfMessagedApplicants = $scope.messagedApplicants.length;
    $scope.lengthOfHiredApplicants = $scope.hiredApplicants.length;
	//hidden applicant functionality
	$scope.moveApplicant = function(item, from, to) {
        var idx=from.indexOf(item);
        console.log(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);      
        }
    	$scope.lengthOfApplicants = $scope.Applicants.length;
        $scope.lengthOfHiddenApplicants = $scope.hiddenApplicants.length;
        $scope.lengthOfshortlistedApplicants = $scope.shortlistedApplicants.length;
        $scope.lengthOfMessagedApplicants = $scope.messagedApplicants.length;
        $scope.lengthOfHiredApplicants = $scope.hiredApplicants.length;
    };
    

});
