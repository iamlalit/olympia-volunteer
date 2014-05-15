$(document).ready(function(){

	$('#phoneToggler').hide();
	$('#phoneToggle').click(function(){
		$(this).hide();
		$('#phoneToggler').show();
	});

	$('#mailToggler').hide();
	$('#mailToggle').click(function(){
		$(this).hide();
		$('#mailToggler').show();
	});

	$('#cvWrite').hide();
	$('input[name=cvChoice]').click(function(){
		var thisval = $(this).val();

		if(thisval == 'cvUpload'){
			$('#cvUpload').show();
			$('#cvWrite').hide();
		}
		else if(thisval == 'cvWrite'){
			$('#cvUpload').hide();
			$('#cvWrite').show();
		}
	});

	$('input[name=cv]').change(function() {
		console.log($(this).val()); 
		var FileName  = $(this).val();
		var cvFile = FileName.match(/\\([^\\]+)$/)[1];
		$('#cvVal-div').show();
		$('#cvVal').html('<a href="javascript:void(0)">'+cvFile+'</a>');
	});

	$('#removeCv').click(function(){
		$('#cvVal').empty();
		$('#cvVal-div').hide();
	});
})

$(document).ready(function(){

	$('.job-vacancy')
	.mouseover(function(){
		if($(this).children().find('a').hasClass('focused')){
			$(this).children().find('a').removeClass('focused');
		}
	})
	.mouseout(function(){
		if($(this).children().find('a').hasClass('focused') == false){
			$(this).children().find('a').eq(2).addClass('focused');
		}
	});

	$('#password-container').hide();
	$('#password-container-hide').show();

	$('input:radio[name=ques1]').click(function() {
		var checkval = $(this).val();
		$('#ques1-opt1-ans').prop('disabled', !(checkval == '1'));
    });	

    $('#radio-email1').click(function(){
    	$('#password-container').hide();
    	$('#password-container-hide').show();
    });
    $('#radio-email2').click(function(){
    	$('#password-container').show();
    	$('#password-container-hide').hide();
    });

	/*function validatePass(pass){
		var validLength = /.{6}/.test(pass);
		var hasCaps = /[A-Z]/.test(pass);
		var hasNums = /\d/.test(pass);
		var hasSpecials = /[~_&*%@$]/.test(pass);
		if(!validLength){
		arr.push("password should be minimum 6 character long.");
			//alert('password should be minimum 6 character long.');
		}else if(!hasCaps){
			arr.push("password should contain at least 1 Capital letter.");
			//alert('password should contain at least 1 Capital letter.');
		}else if(!hasNums){
			arr.push("password should contain at least 1 numerical.");
			//alert('password should contain at least 1 numerical.');
		}else if(!hasSpecials){
			arr.push("password should contain at least 1 special character.");
			//alert('password should contain at least 1 special character.');
		}
	}*/

	$('#errorMsg').hide();
	
	var
	errorDiv	=	$('#errorMsg'),
	errorList	=	$('#errorList'),

	email		=	$('#email'),
	logOpt		=	$('input[name="radioEmail"]'),

	firstname	=	$('input[name="firstname"]'),
	lastname	=	$('input[name="lastname"]'),
	gender		=	$('input[name="Gaslachet"]'),

	phone		=	$('input[name="Telefoonnummer"]'),
	street		=	$('input[name="Straat"]'),
	houseNo		=	$('input[name="Huisnummer"]'),
	postalCode	=	$('input[name="Postcode"]'),
	residense	=	$('input[name="Woonplaats"]'),
	cv	 		=	$('input[name="cv"]'),

	ques1 		=	$('input[name="ques1"]'),

	moreHelp 	=	$('input[name="optionsRadios"]'),
	terms		=	$('#terms');

	var 
	emailStr 		= localStorage.getItem('userEmail-ID'),
	emailRadioStr	= localStorage.getItem('logRadioOpt'),
	
	firstnameStr	= localStorage.getItem('logFirstname'),
	lastnameStr		= localStorage.getItem('logLastname'),
	genderStr		= localStorage.getItem('logGender'),
	
	dobmonthStr 	= localStorage.getItem('logMonthDob'),
	dobdayStr 		= localStorage.getItem('logDayDob'),
	dobyearStr 		= localStorage.getItem('logYearDob'),

	phoneStr		= localStorage.getItem('logPhone'),
	streetStr		= localStorage.getItem('logStreet'),
	houseNoStr		= localStorage.getItem('logHouseNo'),
	postalCodeStr	= localStorage.getItem('logPostalCode'),
	residenseStr	= localStorage.getItem('logResidense'),
	cvStr			= localStorage.getItem('logCV'),
	ques1Str		= localStorage.getItem('logQues1'),
	ques2Str		= localStorage.getItem('logQues2'),

	moreHelpStr		= localStorage.getItem('logMoreHelp'),
	termsStr		= localStorage.getItem('logTerms');

	$('#jobForm-section2 :input').prop("disabled", true);
	
	//Form 1
	$('#jobForm-section1').submit(function(e) {
		e.preventDefault();
		//Email
		if(email.val() == '' || email.val() == null){
			if(errorList.find('.errormessage-form1mail').length == 0){
				var li = $('<li />', {class: 'col-sm-6 errormessage-form1mail'});
				$('<label />', {html: 'Email required !', for: 'email'}).appendTo(li);
				li.appendTo(errorList);
				$('#errorMsg').show();
				email.parent().addClass('has-error');
			}
		}else{
			var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
			if (!re.test(email.val())) {
				if(errorList.find('.col-sm-6 errormessage-form1mail').length == 0){
					var li = $('<li />', {class: '.col-sm-6 errormessage-form1mail'})
					$('<label />', {html: 'Not a valid e-mail address.', for: 'email'}).appendTo(li);
					li.appendTo(errorList)
					$('#errorMsg').show();
				}
			} else {
				if(email.parent().hasClass('has-error')){
					email.parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-form1mail').length > 0){
					errorList.find('.errormessage-form1mail').remove();
					$('#errorMsg').hide();
				}
				localStorage.setItem('userEmail-ID', email.val());
				console.log(localStorage);
			}
		}

		// radio
		$.each(logOpt, function() {
			if (this.checked)
				emailRadioStr = this.value;
	   
			if(emailRadioStr == '' || emailRadioStr == undefined){
				if(errorList.find('.logOpt-form1radio').length == 0){
					$('<li />', {html: 'Please select one option !', class : 'col-sm-6 logOpt-form1radio'}).appendTo(errorList);
					$('#errorMsg').show();
					logOpt.parent().parent().parent().addClass('has-error');
				}
			}else{
				if(logOpt.parent().parent().parent().hasClass('has-error')){
					logOpt.parent().parent().parent().removeClass('has-error')
				};
				if(errorList.find('.logOpt-form1radio').length > 0){
					errorList.find('.logOpt-form1radio').remove();
					$('#errorMsg').hide();
				}
				//localStorage.setItem('logRadioOpt', emailRadioStr);
			}
		});
		if(errorList.find('.errormessage-form1mail').length == 0 && errorList.find('.logOpt-form1radio').length == 0){
			$('#jobForm-section2 :input').prop("disabled", false);
			$('#firstname').focus();
			$('html, body').animate({
			    scrollTop: $("#firstname").offset().top - 100
			}, 500);
		}
		else
		{
			$('html, body').animate({
			    scrollTop: $("#errorMsg").offset().top - 100
			}, 500);
		}

	});
	
	function checkFormSection2(){
		if(firstname.val() == '' || firstname.val() == null)
		{
			if(errorList.find('.errormessage-firstname').length == 0){
				var li = $('<li />', {class : 'col-sm-6 errormessage-firstname'});
				$('<label />', {html: 'First Name required !', for : 'firstname'}).appendTo(li);
				li.appendTo(errorList);
				$('#errorMsg').show();
				firstname.parent().addClass('has-error');
			}
		}else{
			if(firstname.parent().hasClass('has-error')){
				firstname.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-firstname').length > 0){
				errorList.find('.errormessage-firstname').remove();
				$('#errorMsg').hide();
			}
		}

		if(lastname.val() == '' || lastname.val() == null)
		{
			if(errorList.find('.errormessage-lastname').length == 0){
				var li = $('<li />', {class : 'col-sm-6 errormessage-lastname'});
				$('<li />', {html: 'Last Name required !', for : 'lastname'}).appendTo(li);
				li.appendTo(errorList);
				$('#errorMsg').show();
				lastname.parent().addClass('has-error');
			}
		}else{
			if(lastname.parent().hasClass('has-error')){
				lastname.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-lastname').length > 0){
				errorList.find('.errormessage-lastname').remove();
				$('#errorMsg').hide();
			}
		}
		
		//Gender
		$.each(gender, function() {
			if (this.checked)
				genderStr = this.value;
	   
			if(genderStr == '' || genderStr == undefined){
				if(errorList.find('.errormessage-gender').length == 0){
					var li = $('<li />', {class : 'col-sm-6 errormessage-gender'});
					$('<li />', {html: 'Please select either male or female !', class : 'col-sm-6 errormessage-gender'}).appendTo(errorList);
					$('#errorMsg').show();
					gender.parent().parent().addClass('has-error');
				}
			}else{
				if(gender.parent().parent().hasClass('has-error')){
					gender.parent().parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-gender').length > 0){
					errorList.find('.errormessage-gender').remove();
					$('#errorMsg').hide();
				}
				//localStorage.setItem('logGender', genderStr);
			}
		});

		// DOB
		if(
			parseInt($('#month option:selected').val()) == 0 ||
			parseInt($('#day option:selected').val()) == 0 ||
			parseInt($('#year option:selected').val()) == 0
		){
			if(errorList.find('.errormessage-dob').length == 0){
				$('<li />', {html: 'Date of Birth required !', class : 'col-sm-6 errormessage-dob'}).appendTo(errorList);
				$('#errorMsg').show();
				$('#month , #day, #year').parent().parent().parent().addClass('has-error');
			}
		}else{
			if($('#month , #day, #year').parent().parent().parent().hasClass('has-error')){
				$('#month , #day, #year').parent().parent().parent().removeClass('has-error')
			};

			if(errorList.find('.errormessage-dob').length > 0){
				errorList.find('.errormessage-dob').remove();
				$('#errorMsg').hide();
			}

			//localStorage.setItem('logMonthDob', $('#month option:selected').val());
			//localStorage.setItem('logDayDob', $('#day option:selected').val());
			//localStorage.setItem('logYearDob', $('#year option:selected').val());
			//console.log(localStorage);
		}

		//Phone
		if(phone.val() == '' || phone.val() == null)
		{
			if(errorList.find('.errormessage-phone').length == 0){
				$('<li />', {html: 'Phone number required !', class : 'col-sm-6 errormessage-phone'}).appendTo(errorList);
				$('#errorMsg').show();
				phone.parent().addClass('has-error');
			}
		}else{
			var reg = new RegExp('^\\d+$');
			if(!reg.test(phone.val())){
				if(errorList.find('.errormessage-phone').length == 0){
					$('<li />', {html: 'Enter a valid Phone number !', class : 'col-sm-6 errormessage-phone'}).appendTo(errorList);
					$('#errorMsg').show();
					phone.parent().addClass('has-error');
				}
			}
			else{
				if(phone.parent().hasClass('has-error')){
					phone.parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-phone').length > 0){
					errorList.find('.errormessage-phone').remove();
					$('#errorMsg').hide();
				}
				//localStorage.setItem('logPhone', phone.val());
			}
		}

		// Street
		if(street.val() == '' || street.val() == null)
		{
			if(errorList.find('.errormessage-street').length == 0){
				$('<li />', {html: 'Street Name required !', class : 'col-sm-6 errormessage-street'}).appendTo(errorList);
				$('#errorMsg').show();
				street.parent().addClass('has-error');
			}
		}else{
			if(street.parent().hasClass('has-error')){
				street.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-street').length > 0){
				errorList.find('.errormessage-street').remove();
				$('#errorMsg').hide();
			}
			//localStorage.setItem('logStreet', street.val());
		}

		// House no.
		if(houseNo.val() == '' || houseNo.val() == null)
		{
			if(errorList.find('.errormessage-houseNo').length == 0){
				$('<li />', {html: 'House number required !', class : 'col-sm-6 errormessage-houseNo'}).appendTo(errorList);
				$('#errorMsg').show();
				houseNo.parent().addClass('has-error');
			}
		}else{
			if(houseNo.parent().hasClass('has-error')){
				houseNo.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-houseNo').length > 0){
				errorList.find('.errormessage-houseNo').remove();
				$('#errorMsg').hide();
			}
			//localStorage.setItem('logHouseNo', houseNo.val());
		}

		// postal Code
		if(postalCode.val() == '' || postalCode.val() == null)
		{
			if(errorList.find('.errormessage-postalCode').length == 0){
				$('<li />', {html: 'Postcode required !', class : 'col-sm-6 errormessage-postalCode'}).appendTo(errorList);
				$('#errorMsg').show();
				postalCode.parent().addClass('has-error');
			}
		}else{
			if(postalCode.parent().hasClass('has-error')){
				postalCode.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-postalCode').length > 0){
				errorList.find('.errormessage-postalCode').remove();
				$('#errorMsg').hide();
			}
			//localStorage.setItem('logPostalCode', postalCode.val());
		}

		// Woonplaats
		if(residense.val() == '' || residense.val() == null)
		{
			if(errorList.find('.errormessage-residense').length == 0){
				$('<li />', {html: 'Residense required !', class : 'col-sm-6 errormessage-residense'}).appendTo(errorList);
				$('#errorMsg').show();
				residense.parent().addClass('has-error');
			}
		}else{
			if(residense.parent().hasClass('has-error')){
				residense.parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-residense').length > 0){
				errorList.find('.errormessage-residense').remove();
				$('#errorMsg').hide();
			}
			//localStorage.setItem('logResidense', residense.val());
		}

		// CV
		if(cv.val() == '' || cv.val() == null){
			if(errorList.find('.errormessage-cv').length == 0){
				$('<li />', {html: 'CV required !', class : 'col-sm-6 errormessage-cv'}).appendTo(errorList);
				$('#errorMsg').show();
				cv.parent().parent().parent().addClass('has-error');
			}
		}else{
			var FileName  = cv.val();
			var FileExt = FileName.substr(FileName.lastIndexOf('.')+1);
			var FileSize = cv[0].files[0].size;
			var FileSizeMB = (FileSize/10485760).toFixed(2);
			if (FileExt != "pdf" && FileExt != "doc" && FileExt != "docx"){
				if(errorList.find('.errormessage-cv2').length == 0){
					$('<li />', {html: 'Please upload .doc, .docx or .pdf file for cv!', class : 'col-sm-6 errormessage-cv2'}).appendTo(errorList);
					$('#errorMsg').show();
					cv.parent().parent().parent().addClass('has-error');
				}
				return false;
			}else if(FileSize > 10485760){
				if(errorList.find('.errormessage-cv3').length == 0){
					$('<li />', {html: 'CV File size is bigger then allowed !', class : 'col-sm-6 errormessage-cv3'}).appendTo(errorList);
					$('#errorMsg').show();
					cv.parent().parent().parent().addClass('has-error');
				}
			}else{
				if(cv.parent().parent().parent().hasClass('has-error')){
					cv.parent().parent().parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-cv, .errormessage-cv2, .errormessage-cv3').length > 0){
					errorList.find('.errormessage-cv, .errormessage-cv2, .errormessage-cv3').remove();
					$('#errorMsg').hide();
				}
				
				var cvFile = FileName.match(/\\([^\\]+)$/)[1];

				$('#cvVal-div').show();
				$('#cvVal').html('<a href="javascript:void(0)">'+cvFile+'</a>');

			}
		}

		// Question 1
		$.each(ques1, function() {
			if (this.checked)
				ques1Str = this.value;
				
			if(ques1Str == '' || ques1Str == undefined){
				if(errorList.find('.errormessage-ques1').length == 0){
					$('<li />', {html: 'Please select an option for Q-1 !', class : 'col-sm-6 errormessage-ques1'}).appendTo(errorList);
					$('#errorMsg').show();
					ques1.parent().parent().parent().addClass('has-error');
				}
			}else{
				if(ques1.parent().parent().parent().hasClass('has-error')){
					ques1.parent().parent().parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-ques1').length > 0){
					errorList.find('.errormessage-ques1').remove();
					$('#errorMsg').hide();
				}
				//localStorage.setItem('logQues1', ques1Str);
			}
		});

		// Experiance
		if(	parseInt($('#xp option:selected').val()) == 0 ){
			if(errorList.find('.errormessage-xp').length == 0){
				$('<li />', {html: 'Choose your experiance !', class : 'col-sm-6 errormessage-xp'}).appendTo(errorList);
				$('#errorMsg').show();
				$('#xp').parent().parent().parent().addClass('has-error');
			}
		}else{
			if($('#xp').parent().parent().parent().hasClass('has-error')){
				$('#xp').parent().parent().parent().removeClass('has-error')
			};

			if(errorList.find('.errormessage-dob').length > 0){
				errorList.find('.errormessage-dob').remove();
				$('#errorMsg').hide();
			}

			//localStorage.setItem('logQues2', $('#xp option:selected').val());
		}

		$.each(moreHelp, function() {
			if (this.checked)
				moreHelpStr = this.value;
				
			if(moreHelpStr == '' || moreHelpStr == null || moreHelpStr == undefined){
				if(errorList.find('.errormessage-moreHelp').length == 0){
					$('<li />', {html: 'Please select an option !', class : 'col-sm-6 errormessage-moreHelp'}).appendTo(errorList);
					$('#errorMsg').show();
					moreHelp.parent().parent().parent().parent().parent().addClass('has-error');
				}
			}else{
				if(moreHelp.parent().parent().parent().parent().parent().hasClass('has-error')){
					moreHelp.parent().parent().parent().parent().parent().removeClass('has-error')
				};
				if(errorList.find('.errormessage-moreHelp').length > 0){
					errorList.find('.errormessage-moreHelp').remove();
					$('#errorMsg').hide();
				}
				//localStorage.setItem('logMoreHelp', moreHelpStr);
			}
		});

		if(terms.is(':checked') == true){
			if(terms.parent().parent().parent().parent().parent().hasClass('has-error')){
				terms.parent().parent().parent().parent().parent().removeClass('has-error')
			};
			if(errorList.find('.errormessage-terms').length > 0){
				errorList.find('.errormessage-terms').remove();
				$('#errorMsg').hide();
			}
		}else{
			if(errorList.find('.errormessage-terms').length == 0){
				$('<li />', {html: 'Please accept the terms and conditions !', class : 'col-sm-6 errormessage-terms'}).appendTo(errorList);
				$('#errorMsg').show();
				terms.parent().parent().parent().parent().parent().addClass('has-error');
			}
		}

		if(errorList.length > 0){
			$('html, body').animate({
			    scrollTop: $("#errorMsg").offset().top - 100
			}, 500);
		}
	}

	$('#jobForm-section2').submit(function(e)
	{
		e.preventDefault();

		if(checkFormSection2()){
			alert('asdfasdfadf');
		}
		/*return setTimeout(function(){
			window.location.href="partial3.html"
		} , 1);*/
		
	});

function loadPartial3(){
	
}
	//-------------------

	/*var loadForm1 = function(){	
		if(localStorage.getItem('userEmail-ID')){
			if(email.val() == ''){
				email.val(emailStr);
			}
		}
		if(localStorage.getItem('logRadioOpt')){
			if(logOpt.is(':checked') === false) {
				logOpt.filter('[value='+emailRadioStr+']').prop('checked', true);
			}
		}	
	}();*/

	//var loadForm2 = function(){	

		// First Name
		/*if(localStorage.getItem('logFirstname')){
			if(firstname.val() == ''){
				firstname.val(firstnameStr);
			}
		}

		// Last Name
		if(localStorage.getItem('logLastname')) {
			if(lastname.val() == ''){
				lastname.val(lastnameStr);
			}	
		}
		
		// Gender
		if(localStorage.getItem('logGender')){
			if(gender.is(':checked') === false) {
				gender.filter('[value='+genderStr+']').prop('checked', true);
			}
		}
		
		// DOB
		if( localStorage.getItem('logMonthDob') && localStorage.getItem('logDayDob') && localStorage.getItem('logYearDob')) {
		
			if($('#month').val() == 0){
				$('#month').val(dobmonthStr);
			}

			if($('#day').val() == 0){
				$('#day').val(dobdayStr);
			}

			if($('#year').val() == 0){
				$('#year').val(dobyearStr);
			}	
		}

		// Phone
		if(localStorage.getItem('logPhone')){
			if(phone.val() == ''){
				phone.val(phoneStr);
			}	
		}

		//Street
		if(localStorage.getItem('logStreet')){
			if(street.val() == ''){
				street.val(streetStr);
			}	
		}

		//House Number
		if(localStorage.getItem('logHouseNo')){
			if(houseNo.val() == ''){
				houseNo.val(houseNoStr);
			}	
		}

		// postalCode
		if(localStorage.getItem('logPostalCode')){
			if(postalCode.val() == ''){
				postalCode.val(postalCodeStr);
			}	
		}

		// Woonplaats
		if(localStorage.getItem('logResidense')){
			if(residense.val() == ''){
				residense.val(residenseStr);
			}	
		}*/

		// cv
		/*if(localStorage.getItem('logCV')){
			if(cv.val() == ''){
				cv.val(cvStr);
			}	
		}*/

		// Ques 1
		/*if(localStorage.getItem('logQues1')){
			if(ques1.val() == ''){
				ques1.val(ques1Str);
			}	
		}

		// Ques 2
		if(localStorage.getItem('logQues2')){
			if($('#xp').val() == 0){
				$('#xp').val(ques2Str);
			}
		}

		// more help
		if(localStorage.getItem('logMoreHelp')){
			if(moreHelp.val() == 0){
				moreHelp.val(moreHelpStr);
			}
		}

	}();*/

	var mem = function(){
		var pathname = window.location.pathname;
		var path = pathname.split('/');
		var pathlen = path.length;
		var pagestr = path[pathlen-1];
		var validUrl = ['partial1.html','partial2.html','partial3.html']
		if($.inArray(pagestr,validUrl) > -1){
			return true;
		}else{
			localStorage.clear();
		}
	}();
	
	$('#tooltip1').popover().css({'cursor': 'pointer'});
});

$(document).ready(function(){
	$('#text-content').on('blur', function () {
		$('#zoomTextarea').removeClass('foucs-color-text')
    }).on('focus', function () {
        $('#zoomTextarea').addClass('foucs-color-text')
    });
});

$(document).ready(function(){
	$('#pastwork-info-container').hide();
	$('#manual-xp-add').click(function(){
		var // cache variables
		functie1 = $('#pop-functie'),
		bedrijf = $('#pop-bedrijf'),
		vestigingsplaats = $('#pop-Vestigingsplaats'),
		startMonth1 = $('#pop-startdatum-maand-1'),
		startYear1 = $('#pop-startdatum-jaar-1'),
		endMonth1 = $('#pop-einddatum-maand-1'),
		endYear1 = $('#pop-einddatum-jaar-1'),
		funtieBeschrijving = $('#FuntieBeschrijving');

		var // localstorage
		functie1Str = localStorage.getItem('log-functie1'),
		bedrijfStr = localStorage.getItem('log-bedrijf'),
		vestigingsplaatsStr = localStorage.getItem('log-vestigingsplaats'),
		startMonth1Str = localStorage.getItem('log-startMonth1'),
		startYear1Str = localStorage.getItem('log-startYear1'),
		endMonth1Str = localStorage.getItem('log-endMonth1'),
		endYear1Str = localStorage.getItem('log-endYear1'),
		funtieBeschrijvingStr = localStorage.getItem('log-funtieBeschrijving');


		if(functie1.val() == '' || functie1.val() == null){
			functie1.parent().parent().addClass('has-error');
		}else{
			if(functie1.parent().parent().hasClass('has-error')){
				functie1.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-functie1', functie1.val())
		}

		if(bedrijf.val() == '' || bedrijf.val() == null){
			bedrijf.parent().parent().addClass('has-error');
		}else{
			if(bedrijf.parent().parent().hasClass('has-error')){
				bedrijf.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-bedrijf', bedrijf.val())
		}

		if(vestigingsplaats.val() == '' || vestigingsplaats.val() == null){
			vestigingsplaats.parent().parent().addClass('has-error');
		}else{
			if(vestigingsplaats.parent().parent().hasClass('has-error')){
				vestigingsplaats.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-vestigingsplaats', vestigingsplaats.val())
		}

		if(funtieBeschrijving.val() == '' || funtieBeschrijving.val() == null){
			funtieBeschrijving.parent().parent().addClass('has-error');
		}else{
			if(funtieBeschrijving.parent().parent().hasClass('has-error')){
				funtieBeschrijving.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-funtieBeschrijving', funtieBeschrijving.val())
		}

		if($('#pop-startdatum-maand-1 option:selected').val() == 0){
			$('#pop-startdatum-maand-1').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-startdatum-maand-1').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-startdatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-startMonth1', $('#pop-startdatum-maand-1 option:selected').val())
		}

		if($('#pop-startdatum-jaar-1 option:selected').val() == 0){
			$('#pop-startdatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-startdatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-startdatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-startYear1', $('#pop-startdatum-jaar-1 option:selected').val())
		}

		if($('#pop-einddatum-maand-1 option:selected').val() == 0){
			$('#pop-einddatum-maand-1').parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-einddatum-maand-1').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-einddatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-endMonth1', $('#pop-pop-einddatum-maand-1 option:selected').val())
		}

		if($('#pop-einddatum-jaar-1 option:selected').val() == 0){
			$('#pop-einddatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-einddatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-einddatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-endYear1', $('#pop-einddatum-jaar-1 option:selected').val())
		}

		if(
			$('#pop-einddatum-jaar-1 option:selected').val() == 0 ||
			$('#pop-einddatum-maand-1 option:selected').val() == 0 ||
			$('#pop-startdatum-jaar-1 option:selected').val() == 0 ||
			$('#pop-startdatum-maand-1 option:selected').val() == 0 ||
			functie1.val() == '' ||
			funtieBeschrijving.val() == '' ||
			vestigingsplaats.val() == '' || bedrijf.val() == '' ){
			return false;
		}else{
			$('#pastwork-info-container').show();
			$('#pastwork-info-container').html(
				'<ul class="row" id="pastwork-info" style="list-style:none">'+
					'<li class="col-sm-6">Startdatum :</li><li class="col-sm-6">'+parseInt(startMonth1Str)+'-'+parseInt(startYear1Str)+'</li>'+
					'<li class="col-sm-6">Einddatum :</li><li class="col-sm-6">'+parseInt(endMonth1Str)+'-'+parseInt(endYear1Str)+'</li>'+
					'<li class="col-sm-6">Funtie :</li><li class="col-sm-6">'+functie1Str+'</li>'+
					'<li class="col-sm-6">bedrijf :</li><li class="col-sm-6">'+bedrijfStr+'</li>'+
					'<li class="col-sm-6">Plaats :</li><li class="col-sm-6">'+vestigingsplaatsStr+'</li>'+
					'<li class="col-sm-6">FuntieBeschrijving :</li><li class="col-sm-6">'+funtieBeschrijvingStr+'</li>'+
				'</ul>'
			);
			$('#pastWork').modal('hide');
		}
	});
});

$(document).ready(function(){
	$('#pastedu-info-container').hide();
	$('#manual-edu-add').click(function(){
		var // cache variables
		diploma = $('input[name="pop-diploma"]'),
		opleding = $('#pop-edu-opleiding'),
		startMonth2 = $('#pop-start-month'),
		startYear2 = $('#pop-start-year'),
		endMonth2 = $('#pop-end-month'),
		endYear2 = $('#pop-end-year');

		var // localstorage
		diplomaStr = localStorage.getItem('log-diploma'),
		opledingStr = localStorage.getItem('log-opleding'),
		startMonth2Str = localStorage.getItem('log-startMonth2'),
		startYear2Str = localStorage.getItem('log-startYear2'),
		endMonth2Str = localStorage.getItem('log-endMonth2'),
		endYear2Str = localStorage.getItem('log-endYear2');


		if(opleding.val() == '' || opleding.val() == null){
			opleding.parent().parent().addClass('has-error');
		}else{
			if(opleding.parent().parent().hasClass('has-error')){
				opleding.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-opleding', opleding.val())
		}

		if(diploma.val() == '' || diploma.val() == null){
			diploma.parent().parent().parent().addClass('has-error');
		}else{
			if(diploma.parent().parent().hasClass('has-error')){
				diploma.parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-diploma', parseInt(diploma.val()));
		}

		if($('#pop-start-month option:selected').val() == 0){
			$('#pop-start-month').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-start-month').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-start-month').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-startMonth2', $('#pop-start-month option:selected').val())
		}

		if($('#pop-start-year option:selected').val() == 0){
			$('#pop-start-year').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-start-year').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-start-year').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-startYear2', $('#pop-start-year option:selected').val())
		}

		if($('#pop-end-month option:selected').val() == 0){
			$('#pop-end-month').parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-end-month').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-end-month').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-endMonth2', $('#pop-end-month option:selected').val())
		}

		if($('#pop-end-year option:selected').val() == 0){
			$('#pop-end-year').parent().parent().parent().parent().addClass('has-error');
		}else{
			if($('#pop-end-year').parent().parent().parent().parent().hasClass('has-error')){
				$('#pop-end-year').parent().parent().parent().parent().removeClass('has-error')
			};
			localStorage.setItem('log-endYear2', $('#pop-end-year option:selected').val())
		}

		if(
			$('#pop-end-year option:selected').val() == 0 ||
			$('#pop-end-month option:selected').val() == 0 ||
			$('#pop-start-month option:selected').val() == 0 ||
			$('#pop-start-year option:selected').val() == 0 ||
			opleding.val() == '' ||
			diploma.val() == ''){
			return false;
		}else{
			$('#pastedu-info-container').show();
			$('#pastedu-info-container').html(
				'<ul class="row" id="pastwork-info" style="list-style:none">'+
					'<li class="col-sm-6">Opleiding :</li><li class="col-sm-6">'+opledingStr +'</li>'+
					'<li class="col-sm-6">Diploma behaald :</li><li class="col-sm-6">'+diplomaStr+'</li>'+
					'<li class="col-sm-6">Startdatum :</li><li class="col-sm-6">'+startMonth2Str+'-'+startYear2Str+'</li>'+
					'<li class="col-sm-6">Einddatum :</li><li class="col-sm-6">'+endMonth2Str+'-'+endYear2Str+'</li>'+
				'</ul>'
			);
			$('#educationPop').modal('hide');
		}
	});
});
/*function manualEdu(){
	$('#manual-xp-add').click(function(){
		alert('manual-xp-add clicked');
	});
}*/
