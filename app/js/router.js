'use strict';
/* main App */
var app = angular.module('app', []);

app.controller('Ctrl', function($scope){
	$scope.sortByList = ['Best Match', 'Perfect Match', 'No Match'];
	//best match 80% matches
	//Perfect match 100% match
	//No match 0% match
	//
	$scope.Applicants = [];
	$scope.Applicants.push({Name:"Sandy Sharma",
            job: 'QA Analyst',
            city: 'Amsterdam', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            selected: false      
    }); 
	$scope.Applicants.push({Name:"Lalit Sachdeva",
            job: 'QA Specialist',
            city: 'Delhi', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills',     
            selected: true      
    }); 
	$scope.Applicants.push({Name:"Rodger Georgin",
            job: 'QA Engineer',
            city: 'Chicago', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            selected: false      
    }); 
	$scope.Applicants.push({Name:"George Ducart",
            job: 'Automation Engineer',
            city: 'New York', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            selected: false      
    }); 
	$scope.Applicants.push({Name:"Benjamin Schuffl",
            job: 'QA Analyst',
            city: 'Netherlands', 
            bodyText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '3/4 diploma/certificate/skills',     
            selected: false      
    }); 

	//find number of applicants
	$scope.lengthOfApplicants = $scope.Applicants.length;
});
