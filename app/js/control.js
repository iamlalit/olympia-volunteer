/*
tab changing
*/
// $(document).ready(function() {
//    $('#second-tab a:first').tab('show');
//    var current = "#second-content-tab";
    
//    $('#first-content-tab a').click(function (e) {
//      e.preventDefault()
//      $(this).tab('show');
//    });
//    $('#second-content-tab a').click(function (e) {
//      e.preventDefault();
//      $(this).tab('show');
//      console.log(2);
//    });
//    $('#third-content-tab a').click(function (e) {
//      e.preventDefault();
//      $(this).tab('show');
//      console.log(3);
//    });
//    $('#fourth-content-tab a').click(function (e) {
//      e.preventDefault();
//      $(this).tab('show');
//      console.log(4);
//    });
//  });


 $(document).ready(function() {
  $('#tabs > div').hide(); // hide all child divs
  $('#tabs div:first').show(); // show first child dive
  $('#tabsnav li:first').addClass('active');

  $('.menu-internal').click(function(){
   $('#tabsnav li').removeClass('active');
   var currentTab = $(this).attr('href');
   $('#tabsnav li a[href="'+currentTab+'"]').parent().addClass('active');
   $('#tabs > div').hide();
   $(currentTab).show();
   return false;
  });
  // Create a bookmarkable tab link
  hash = window.location.hash;
  elements = $('a[href="'+hash+'"]'); // look for tabs that match the hash
  if (elements.length === 0) { // if there aren't any, then
   $("ul.tabs li:first").addClass("active").show(); // show the first tab
  } else { elements.click(); } // else, open the tab in the hash
 });


/*
date time picker
*/
$(document).ready(function() {
    $('#datetimepicker8').datetimepicker({
      pickTime: false
    });
    $('#datetimepicker9').datetimepicker({
      pickTime: false
    });

    $("#datetimepicker8").on("dp.change",function (e) {
       $('#datetimepicker9').data("DateTimePicker").setMinDate(e.date);

    });

    $("#datetimepicker9").on("dp.change",function (e) {
       $('#datetimepicker8').data("DateTimePicker").setMaxDate(e.date);
    });

});

/*popover for job dropdown */
var element_job = "<span style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie cons.</span>";
$("#job-type").popover({
      title: "Job type",
      trigger: "focus"
});
$( "#job-type" ).focus(function(event) {
    event.preventDefault();
    $("#job-type").popover('show');
    $("#jobs div.popover-content").replaceWith(element_job);
    event.stopPropagation();
});
$( "#job-type" ).focusout(function() {
    event.preventDefault();
    $("#job-type").popover('hide');
    event.stopPropagation();
});

/*popover for title */
var element_title = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>" + 
                    "<ul style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                  "</ul>";
$("#form-control-weight").popover({
      title: "What's the title?",
      trigger: "focus"
});
$( "#form-control-weight" ).focus(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $("#title div.popover-content").replaceWith(element_title);
    $("#form-control-weight").popover('show');
});
$( "#form-control-weight" ).focusout(function() {
    event.preventDefault();
    event.stopPropagation();
    $("#form-control-weight").popover('hide');
});
/*popover for textarea to descrbe the work to be done */
var element_describe = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#text-content").popover({
      title: "Describe the work?",
      trigger: "focus"
});
$( "#text-content" ).focus(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $("#describe-work div.popover-content").replaceWith(element_describe);
    $("#text-content").popover('show');
});
$( "#text-content" ).focusout(function() {
    event.preventDefault();
    event.stopPropagation();
    $("#text-content").popover('hide');
});
/* skills popover */

$( document ).ready(function() {
  var pointer = $("#skills-popover").find("input:last");
  pointer.attr( "id", "skill-text" );
  pointer.attr( "size", "120" );
  pointer.parent().attr("id", "skills");

  var element_skills = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>";
  $("#skill-text").popover({
        title: "What skills are needed?",
        trigger: "focus"
  });
  $( "#skill-text" ).focus(function(event) {
      event.preventDefault();
      event.stopPropagation();
      pointer.attr( "size", "120" );
      $("#skills div.popover-content").replaceWith(element_skills);
      $("#skill-text").popover('show');
  });
  $( "#skill-text" ).focusout(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $("#skill-text").popover('hide');
  });
});

/* Diplomas popover*/
$( document ).ready(function() {
  var pointer = $("#diploma-popover").find("input:last");
  pointer.attr( "id", "diploma-text" );
  pointer.attr( "size", "120" );
  pointer.parent().attr("id", "diplomas");

  var element_diploma = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>";
  $("#diploma-text").popover({
        title: "What Diplomas/Certificates are needed?",
        trigger: "focus"
  });
  $( "#diploma-text" ).focus(function(event) {
      event.preventDefault();
      event.stopPropagation();
      pointer.attr( "size", "120" );
      $("#diplomas div.popover-content").replaceWith(element_diploma);
      $("#diploma-text").popover('show');
  });
  $( "#diploma-text" ).focusout(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $("#diploma-text").popover('hide');
  });
});


/* days of week popover*/
$( document ).ready(function() {
  var pointer = $("#dow-popover").find("input:last");
  pointer.attr( "id", "dow-text" );
  pointer.attr( "size", "120" );
  pointer.parent().attr("id", "dow");

  var element_dow = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>";
  $("#dow-text").popover({
        title: "Days of week",
        trigger: "focus"
  });
  $( "#dow-text" ).focus(function(event) {
      event.preventDefault();
      event.stopPropagation();
      pointer.attr( "size", "120" );
      $("#dow div.popover-content").replaceWith(element_dow);
      $("#dow-text").popover('show');
  });
  $( "#dow-text" ).focusout(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $("#dow-text").popover('hide');
  });
});
/* language popover*/
$( document ).ready(function() {
  var pointer = $("#language-popover").find("input:last");
  pointer.attr( "id", "language-text" );
  pointer.attr( "size", "120" );
  pointer.parent().attr("id", "language");

  var element_language = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>";
  $("#language-text").popover({
        title: "Language",
        trigger: "focus"
  });
  $( "#language-text" ).focus(function(event) {
      event.preventDefault();
      event.stopPropagation();
      pointer.attr( "size", "120" );
      $("#language div.popover-content").replaceWith(element_language);
      $("#language-text").popover('show');
  });
  $( "#language-text" ).focusout(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $("#language-text").popover('hide');
  });
});
/* screening popover*/
$( document ).ready(function() {
  var pointer = $("#screening-popover").find("input:last");
  pointer.attr( "id", "screening-text" );
  pointer.attr( "size", "120" );
  pointer.parent().attr("id", "screening");

  var element_screening = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>";
  $("#screening-text").popover({
        title: "Screening questions",
        trigger: "focus"
  });
  $( "#screening-text" ).focus(function(event) {
      event.preventDefault();
      event.stopPropagation();
      pointer.attr( "size", "120" );
      $("#screening div.popover-content").replaceWith(element_screening);
      $("#screening-text").popover('show');
  });
  $( "#screening-text" ).focusout(function(event) {
      event.preventDefault();
      event.stopPropagation();
      $("#screening-text").popover('hide');
  });
});

/*  Start and end date*/
var element_date = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#datepicker1").popover({
      title: "Select start date",
      trigger: "focus"
});
$( "#datepicker1" ).focus(function(event) {
    $("#datepicker div.popover-content").replaceWith(element_date);
    $("#datepicker1").popover('show');
});
$("#datepicker2").popover({
      title: "Select end date",
      trigger: "focus"
});
$( "#datepicker2" ).focus(function(event) {
    $("#datepicker div.popover-content").replaceWith(element_date);
    $("#datepicker2").popover('show');
});

/* checkboxes for time comittment on hover*/
var element_time_comittment = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#time-checkbox").popover({
      title: "Time comittment",
      trigger: "hover"
});
$( "#time-checkbox" ).hover(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(".check-label div.popover-content").replaceWith(element_time_comittment);
    $("#time-checkbox").popover('show');
});

/* checkboxes for schedule on hover */
var element_schedule = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#schedule-checkbox").popover({
      title: "Schedule",
      trigger: "hover"
});
$( "#schedule-checkbox" ).hover(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(".check-label div.popover-content").replaceWith(element_schedule);
    $("#schedule-checkbox").popover('show');
});

/* checkboxes for schedule on hover */
var element_appropriate = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Duis vitae orci purus, quis euismod augue. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#appropriate-checkbox").popover({
      title: "Appropriate for",
      trigger: "hover"
});
$( "#appropriate-checkbox" ).hover(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(".check-label div.popover-content").replaceWith(element_appropriate);
    $("#appropriate-checkbox").popover('show');
});

/* checkboxes for IVO on hover */
var element_IVO = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Morbi lorem arcu, aliquet sed feugiat et, posuere non elit fusce sollicitudin.  Nunc at in hendrerit in vulputate, imperdiet fringilla.</p>";
$("#IVO-checkbox").popover({
      title: "International volunteer option",
      trigger: "hover"
});
$( "#IVO-checkbox" ).hover(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(".check-label div.popover-content").replaceWith(element_IVO);
    $("#IVO-checkbox").popover('show');
});

/* checkboxes for extra on hover */
var element_extra = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Aliquam mauris felis, viverra in mattis vitae adipiscing elit, sed diam nonummy nibh.  Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi lobortis nisl ut aliquip ex ea commodo consequat.</p>";
$("#extra-checkbox").popover({
      title: "Extra details",
      trigger: "hover"
});
$( "#extra-checkbox" ).hover(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(".check-label div.popover-content").replaceWith(element_extra);
    $("#extra-checkbox").popover('show');
});

/* Days of week popover */
var element_title = "<p style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>" + 
                    "<ul style='text-align:left; width:250px;color: #7c7c7a;font-family: Helvetica,Arial,sans-serif;font-size: 13px;'>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                    "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                  "</ul>";
$("#form-control-weight").popover({
      title: "What's the title?",
      trigger: "focus"
});
$( "#form-control-weight" ).focus(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $("#title div.popover-content").replaceWith(element_title);
    $("#form-control-weight").popover('show');
});
$( "#form-control-weight" ).focusout(function() {
    event.preventDefault();
    event.stopPropagation();
    $("#form-control-weight").popover('hide');
});


    /* adding extra questions */
$( "#skills" ).click(function() {
  $( this ).next( "ul" ).toggle();
  if($(this).is('.btn-primary')){
        $(this).removeClass('btn-primary').addClass('btn-danger');
        $( this ).text("Hide Skills / Certificates")
    }else{
        $(this).removeClass('btn-danger').addClass('btn-primary');
        $( this ).text("Add Skills / Certificates")
        //Do Stop
    }
});
$( "#time" ).click(function() {
  $( this ).next( "ul" ).toggle();
  if($(this).is('.btn-primary')){
        $(this).removeClass('btn-primary').addClass('btn-danger');
        $( this ).text("Hide Time Comittments")
    }else{
        $(this).removeClass('btn-danger').addClass('btn-primary');
        $( this ).text("Add Time Comittments")
        //Do Stop
    }
});
$( "#miscleaneous" ).click(function() {
  $( this ).next( "ul" ).toggle();
  if($(this).is('.btn-primary')){
      $(this).removeClass('btn-primary').addClass('btn-danger');
      $( this ).text("Hide Extra Preferences")
    }else{
      $(this).removeClass('btn-danger').addClass('btn-primary');
      $( this ).text("Add Extra Preferences")
      //Do Stop
    }
});

/*header dropdown selection */
$("#username .dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $( this ).addClass("active"); 
  $(this).parents('.dropdown.pull-right').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
/* to add css */
$('#username .dropdown-menu li a').click(function() {
    var style = {
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              color: "#4C4559",
              fontWeight: "600"
    }
    var style_empty = {
              backgroundColor: "",
              borderRadius: "",
              color: "",
              fontWeight: ""         
    }
    if($('#dropdown').data('open')) {
        $('#dropdown').data('open', false);
    } else
        $('#dropdown').data('open', true);
        $("#username .dropdown-menu li a").css(style_empty);
        $(this).css(style);

});
$( document ).ready(function() {
  var style = {
      backgroundColor: "#ffffff",
      borderRadius: "4px",
      color: "#4C4559",
      fontWeight: "600"
  }
  $("#username .dropdown-menu li #tab-header-1").css(style);
});


//Describe the work to be done data modal to count the number of characters
$("#text-content").keyup(function() {
  var text  = $(this).val();
  $('#text-content-pop').val(text);
  $('#text-content-count').text($(this).val().length);
  $('#text-content-count-pop').text($(this).val().length);
});
$("#text-content-pop").keyup(function() {
  var text  = $(this).val();
  $('#text-content').val(text);
  $('#text-content-count-pop').text(text.length);
  $('#text-content-count').text(text.length);
});

$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <b class="caret blue"></b>');
});



$('#language-tag').tagsinput({
  typeahead: {
    source: ['Afrikaans','Albanian', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 
            'Catalan', 'Cebuano', 'Chinese', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Filipino', 'French', 'Georgian', 
            'German', 'Greek', 'Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Irish', 'Italian', 'Japanese', 
            'Korean', 'Lao', 'Latin', 'Mongolian', 'Norwegian', 'Persian', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 
            'Spanish',  'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yoruba',
             'Zulu'],
    sorter: function (items) {
        return items.sort();
    }
  }
});


function updateValueLanCheck(){
  var listOfLan = [];
  for( i=1 ; i <= 52 ; i++){
    if($("#lan" + i +"").is(":checked")){
     listOfLan.push($("#lan" + i +"").val());
    }
  }
  $('#language-tag').tagsinput('removeAll');
  $("#language-tag").tagsinput("refresh");
  for(i = 0 ; i < listOfLan.length ; i++){
    $("#language-tag").tagsinput('add', listOfLan[i]);
  }
}
function updateValueLanText(){
  
  $("#language-tag").tagsinput("refresh");
  var tagsValue = $("#language-tag").val();
  var tagsList = tagsValue.split(",");
  console.log(tagsList);
  for( i=1 ; i <= 52 ; i++){
        $("#lan" + i + "").prop("checked", false);
  }
  for( i=1 ; i <= 52 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#lan" + i + "").val() === tagsList[j]){
        $("#lan" + i + "").prop("checked", true);
      }
    }
  }
}

$('#dow-tag').tagsinput({
  typeahead: {
    source: ['weekdays morning','weekdays evening', 'weekdays late night', 'weekdays afternoon','weekend morning', 'weekend evening', 'weekend night', 'weekend afternoon',
            'monday morning','monday evening', 'monday late night', 'monday afternoon','tuesday morning', 'tuesday evening', 'tuesday late night', 'tuesday afternoon',
            'wednesday morning','wednesday evening', 'wednesday late night', 'wednesday afternoon','thursday morning', 'thursday evening', 'thursday late night', 'thursday afternoon',
            'friday morning','friday evening', 'friday late night', 'friday afternoon','saturday morning', 'saturday evening', 'saturday late night', 'saturday afternoon',
            'sunday morning','sunday evening', 'sunday late night', 'sunday afternoon'],
    sorter: function (items) {
        return items.sort();
    }
  }
});

function updateValueDowCheck(){
  var listOfDow = [];
  for( i=1 ; i <= 36 ; i++){
    if($("#dow" + i +"").is(":checked")){
     listOfDow.push($("#dow" + i +"").val());
    }
  }
  console.log(listOfDow);
  $('#dow-tag').tagsinput('removeAll');
  $("#dow-tag").tagsinput("refresh");
  for(i = 0 ; i < listOfDow.length ; i++){
    $("#dow-tag").tagsinput('add', listOfDow[i]);
  }
}

function updateValueDowText(){
  
  $("#dow-tag").tagsinput("refresh");
  var tagsValue = $("#dow-tag").val();
  var tagsList = tagsValue.split(",");
  console.log(tagsList);
  for( i=1 ; i <= 36 ; i++){
        $("#dow" + i + "").prop("checked", false);
  }
  for( i=1 ; i <= 36 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#dow" + i + "").val() === tagsList[j]){
        $("#dow" + i + "").prop("checked", true);
      }
    }
  }
}


$('#screening-tag').tagsinput({
  typeahead: {
    source: ['Have you taken any Volunteer tests and done well on them that you think are relevant to this job?',
    'Why did you apply to this particular job?',
    'Which part of the project do you think will take the most time?',
    'Do you have any questions about the job description?',
    'Do you have any suggestions to make this project run successfully?',
    'Why do you think you are a good fit for this particular project?',
    'What challenging part of this job are you most experienced in?',
    'Which of the required job skills do you feel you you are strongest at?',
    'What questions do you have about the project?',
    'What past project or job have you had that is most like this one and why?'
    ],
    sorter: function (items) {
        return items.sort();
    }
  }
});

function updateValueScreeningCheck(){
  var listOfScreening = [];
  for( i=1 ; i <= 10 ; i++){
    if($("#screening" + i +"").is(":checked")){
     listOfScreening.push($("#screening" + i +"").val());
    }
  }
  console.log(listOfScreening);
  $('#screening-tag').tagsinput('removeAll');
  $("#screening-tag").tagsinput("refresh");
  for(i = 0 ; i < listOfScreening.length ; i++){
    $("#screening-tag").tagsinput('add', listOfScreening[i]);
  }
}

function updateValueScreeningText(){
  
  $("#screening-tag").tagsinput("refresh");
  var tagsValue = $("#screening-tag").val();
  var tagsList = tagsValue.split(",");
  for( i=1 ; i <= 10 ; i++){
        $("#screening" + i + "").prop("checked", false);
  }
  console.log(tagsList);
  for( i=1 ; i < 10 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#screening" + i + "").val() === tagsList[j]){
        $("#screening" + i + "").attr("checked", "checked")
      }
    }
  }
}
