var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.listOfSchools = [];
    $scope.lengthOfSchools = $scope.listOfSchools.length;
    var
	errorDiv = $('#errorMsg'),
	errorList = $('#errorList');
    $('#errorMsg').hide();
    var schoolAns1 = $("#schoolAns1");
    var schoolAns2 = $("#schoolAns2");
    var schoolAns3 = $("#schoolAns3");
    var schoolAns4 = $("#schoolAns4");
    var schoolAns5 = $("#schoolAns5");
    $scope.updateSchoolDetails = function(obj, check){

        

        if(schoolAns1.val() == '' || schoolAns1.val() == null){
        	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns1.focus();
                })
                $('#errorMsg').show();
                schoolAns1.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns1.parent().hasClass('has-error')) {
	                schoolAns1.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
	                errorList.find('.errormessage-schoolAns1').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns2.val() == '' || schoolAns2.val() == null){
        	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns2.focus();
                })
                $('#errorMsg').show();
                schoolAns2.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns2.parent().hasClass('has-error')) {
	                schoolAns2.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
	                errorList.find('.errormessage-schoolAns2').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns3.val() == '' || schoolAns3.val() == null){
        	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns3.focus();
                })
                $('#errorMsg').show();
                schoolAns3.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns3.parent().hasClass('has-error')) {
	                schoolAns3.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
	                errorList.find('.errormessage-schoolAns3').remove();
	                $('#errorMsg').hide();
	            }
        }

        if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                .appendTo(errorList)
                .click(function () {
                	console.log("clicked");
                    $("#schoolAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                schoolAns4.parent().addClass('has-error');
                schoolAns5.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
	                schoolAns4.parent().removeClass('has-error');
	                schoolAns5.parent().removeClass('has-error');
	            };
	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
	                errorList.find('.errormessage-schoolAns4').remove();
	                $('#errorMsg').hide();
	            }
        }

    schoolAns1.change(function() {
        if(schoolAns1.val() == '' || schoolAns1.val() == null){
        	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns1.focus();
                })
                $('#errorMsg').show();
                schoolAns1.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns1.parent().hasClass('has-error')) {
	                schoolAns1.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
	                errorList.find('.errormessage-schoolAns1').remove();
	            }
        }
    });

    schoolAns2.change(function() {
        if(schoolAns2.val() == '' || schoolAns2.val() == null){
        	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns2.focus();
                })
                $('#errorMsg').show();
                schoolAns2.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns2.parent().hasClass('has-error')) {
	                schoolAns2.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
	                errorList.find('.errormessage-schoolAns2').remove();
	            }
        }
    });

    schoolAns3.change(function() {
        if(schoolAns3.val() == '' || schoolAns3.val() == null){
        	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns3.focus();
                })
                $('#errorMsg').show();
                schoolAns3.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns3.parent().hasClass('has-error')) {
	                schoolAns3.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
	                errorList.find('.errormessage-schoolAns3').remove();
	            }
        }
    });

    schoolAns4.change(function() {

	    if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                .appendTo(errorList)
                .click(function () {
                	console.log("clicked");
                    $("#schoolAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                schoolAns4.parent().addClass('has-error');
                schoolAns5.parent().addClass('has-error');
            }
        }else {
        	console.log("updated");
	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
	                schoolAns4.parent().removeClass('has-error');
	                schoolAns5.parent().removeClass('has-error');
	            };
	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
	                errorList.find('.errormessage-schoolAns4').remove();
	            }
	        }
    });

    schoolAns5.change(function() {

	    if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
			if (errorList.find('.errormessage-schoolAns4').length == 0) {
                $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                .appendTo(errorList)
                .click(function () {
                	console.log("clicked");
                    $("#schoolAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                schoolAns4.parent().addClass('has-error');
                schoolAns5.parent().addClass('has-error');
            }
        }else {
        	console.log("updated");
	            if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
	                schoolAns4.parent().removeClass('has-error');
	                schoolAns5.parent().removeClass('has-error');
	            };
	            if (errorList.find('.errormessage-schoolAns4').length > 0) {
	                errorList.find('.errormessage-schoolAns4').remove();
	            }
	        }
    });
        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
        } else {
            $('#errorMsg').hide();
            $scope.listOfSchools.push(obj);
	        $scope.lengthOfSchools = $scope.listOfSchools.length;
	        $scope.school = {};
	        $scope.school.startDate = 0;
	        $scope.school.endDate = 0;
        }
        if(check == 1 && !errorList.children('li').length > 0){
        	$('#addSchool').modal('hide');
        }
    }
    $scope.schoolCancel = function(){
    	$('#errorMsg').hide();
    	$scope.lengthOfSchools = $scope.listOfSchools.length;
        $scope.school = {};
        $scope.school.startDate = 0;
        $scope.school.endDate = 0;
    	$('#addSchool').modal('hide');
        schoolAns1.parent().removeClass('has-error');
        schoolAns2.parent().removeClass('has-error');
        schoolAns3.parent().removeClass('has-error');
        schoolAns4.parent().removeClass('has-error');
        schoolAns5.parent().removeClass('has-error');
    }
}]);