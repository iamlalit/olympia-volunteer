'use strict';
/* main App */
var app = angular.module('app', []);

app.controller('Ctrl', function($scope){
	$scope.sortByList = ['Best Match', 'Newest Applicants', 'Oldest Applicants', 'Feedback'];
	//best match 80% matches
	//Perfect match 100% match
	//No match 0% match
	//
	$scope.Applicants = [];
	$scope.hiddenApplicants = [];
	$scope.Applicants.push({Name:"Sandy Sharma",
            job: 'QA Analyst',
            city: 'Amsterdam', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            selected: false,
            value: true
    }); 
	$scope.Applicants.push({Name:"Lalit Sachdeva",
            job: 'QA Specialist',
            city: 'Delhi', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills',     
            selected: true,
            value: true
    }); 
	$scope.Applicants.push({Name:"Rodger Georgin",
            job: 'QA Engineer',
            city: 'Chicago', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"George Ducart",
            job: 'Automation Engineer',
            city: 'New York', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Benjamin Schuffl",
            job: 'QA Analyst',
            city: 'Netherlands', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            selected: false,      
            value: false
    }); 
	//find number of applicants
	$scope.lengthOfApplicants = $scope.Applicants.length;
	$scope.lengthOfHiddenApplicants = $scope.hiddenApplicants.length;
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
        console.log($scope.Applicants.length, $scope.hiddenApplicants.length)
    };
    

});
