'use strict';
/* main App */
var app = angular.module('searchVolController', []);

app.controller('searchVolCtrl', function($scope){
	$scope.categories = ['Aggriculture', 'Animals', 'Arts', 'Communications access', 
	'Community development', 'conflict resolution'];
	$scope.skills = ['Accounting', 'Crime $ Safety', 'Cooking', 'Communication', 'Disaster Relief', 
	'Problem Solving'];
	$scope.timePreference = ['Monday - Full day', 'Tuesday - Full day', 'Wednesday - Full day', 'Thursday - Full day', 'Friday - Full day', 'Saturday - Full day', 'Sunday - Full day', 
	'Monday - Morning', 'Tuesday - Morning', 'Wednesday - Morning', 'Thursday - Morning', 'Friday - Morning', 'Saturday - Morning', 'Sunday - Morning', 
	'Monday - Afternoon', 'Tuesday - Afternoon', 'Wednesday - Afternoon', 'Thursday - Afternoon', 'Friday - Afternoon', 'Saturday - Afternoon', 'Sunday - Afternoon', 
	'Monday - Evening', 'Tuesday - Evening', 'Wednesday - Evening', 'Thursday - Evening', 'Friday - Evening', 'Saturday - Evening', 'Sunday - Evening', 
	'Monday - Late Night', 'Tuesday - Late Night', 'Wednesday - Late Night', 'Thursday - Late Night', 'Friday - Late Night', 'Saturday - Late Night', 'Sunday - Late Night']
	$scope.numListCategory = 4;
	$scope.numListSkill = 4;
	$scope.numListTime = 8;

	$scope.sortByList = ['Best Match', 'Newest Applicants', 'Oldest Applicants', 'Feedback'];
	
      $scope.Applicants = [];
	$scope.Applicants.push({Name:"Marleen Bosch",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taken place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            statusColor: 'red',
            joined: 'Joined 1 year ago',
            invited: true,   
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Geertruda Brouwer",
            job: 'QA Specialist',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'My name is Geertruda Brouwer, I am 53 years of age. I am a Ghanaian fromm the Volta-Region in a small village called Sokode-Gbogame. I am a physically challenged person.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            statusColor: 'green',    
            joined: 'Joined 5 year ago',
            invited: false,
            selected: true,
            value: false
    }); 
	$scope.Applicants.push({Name:"Jan-Klaassen Groot",
            job: 'QA Engineer',
            city: 'De Kwakel, Noord Holland', 
            bodyText: 'I am interested in any position open, in your organization, concerning web development, design, database administration, or other infotech including the position posted. Please click here for optimal viewing of my curriculum vitae.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 3 months ago',
            invited: false,
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"Geertruda Dekker",
            job: 'Automation Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taking place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 1 day ago',
            invited: true,
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Hendrik Brouwer",
            job: 'QA Analyst',
            city: 'Bergen, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 6 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Applicants.push({Name:"Driel Brouwer",
            job: 'QA Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            statusColor: 'red',
            joined: 'Joined 2 months ago',
            invited: false,
            selected: false,      
            value: false
    }); 
      
      $scope.favouriteApplicants = [];
      $scope.groupedItems = [];
      $scope.applicantsPerPage = 5;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.lengthOfApplicants = $scope.Applicants.length;
      $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      // calculate page in place
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.lengthOfApplicants; i++) {
            if (i % $scope.applicantsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)] = [ $scope.Applicants[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)].push($scope.Applicants[i]);
            }
        }
        $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;

        for (var i = 0; i < $scope.lengthOfApplicants; i++) {
            if (i % $scope.applicantsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)] = [ $scope.Applicants[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)].push($scope.Applicants[i]);
            }
        }
        $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      };
      $scope.groupToPages();
      $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                  end = start;
                  start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
      };
      $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                  $scope.currentPage--;
            }
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      };
      $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                  $scope.currentPage++;
            }
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      };
      $scope.setPage = function () {
            $scope.currentPage = this.n;
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      };
      $scope.moveApplicant = function(item, from, to) {
            var idx=from.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
                  to.push(item);
            }
      };
      $scope.copyApplicant = function(item, from, to) {
            var idx=from.indexOf(item);
            //to check for uncommon objects
            var check = true;
            if (idx != -1) {
                  for (var i = 0; i <= $scope.lengthOfFavouriteApplicants; i++) {
                        if(JSON.stringify(item) === JSON.stringify($scope.favouriteApplicants[i]) ){
                              check = false;
                        }
                  };
                  if(check == true){
                        to.push(item);      
                  }
            }
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      };
      $scope.deleteApplicant = function(item, from){
            var idx=from.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
            }     
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      }
      $scope.clearSearch = function(){
            $scope.Applicants = [];
            $scope.pagedItems = [];
            $scope.lengthOfApplicants = $scope.Applicants.length;
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems.length;
      }
});