/*
tab changing
*/
// $(document).ready(function() {
// 		$('#second-tab a:first').tab('show');
// 		var current = "#second-content-tab";
		
// 		$('#first-content-tab a').click(function (e) {
// 		  e.preventDefault()
// 		  $(this).tab('show');
// 		});
// 		$('#second-content-tab a').click(function (e) {
// 			e.preventDefault();
// 			$(this).tab('show');
// 			console.log(2);
// 		});
// 		$('#third-content-tab a').click(function (e) {
// 			e.preventDefault();
// 			$(this).tab('show');
// 			console.log(3);
// 		});
// 		$('#fourth-content-tab a').click(function (e) {
// 			e.preventDefault();
// 			$(this).tab('show');
// 			console.log(4);
// 		});
// 	});


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
    var element_job = "<span>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie cons.</span>";
    $("#job-type").popover({
          title: "Title",
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
    var element_title = "<p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>" + 
                        "<ul style='text-align:left; width:250px;'>" + 
                        "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                        "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                        "<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>" + 
                      "</ul>";
    $("#form-control-weight").popover({
          title: "Title",
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
          $( this ).text("Hide Miscellaneous")
        }else{
          $(this).removeClass('btn-danger').addClass('btn-primary');
          $( this ).text("Add Miscellaneous")
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


/*
rich text editor
*/

 $(document).ready(function() {
    $(function(){
		function initToolbarBootstrapBindings() {
  		var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 
        	'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
        	'Times New Roman', 'Verdana'],
        fontTarget = $('[title=Font]').siblings('.dropdown-menu');
  		$.each(fonts, function (idx, fontName) {
      		fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
  		});
		$('a[title]').tooltip({container:'body'});
		$('.dropdown-menu input').click(function() {return false;})
		    .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
		.keydown('esc', function () {this.value='';$(this).change();});

		  $('[data-role=magic-overlay]').each(function () { 
		    var overlay = $(this), target = $(overlay.data('target')); 
		    overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
		  });
		  if ("onwebkitspeechchange"  in document.createElement("input")) {
		    var editorOffset = $('#editor').offset();
		    $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
		  } else {
		    $('#voiceBtn').hide();
		  }
		};
		function showErrorAlert (reason, detail) {
			var msg='';
			if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
			else {
				console.log("error uploading file", reason, detail);
			}
			$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
			 '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
		};
		initToolbarBootstrapBindings();  
		$('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
		window.prettyPrint && prettyPrint();
	});
});

$(".dropdown-menu li a").click(function(){
      var selText = $(this).text();
      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <b class="caret blue"></b>');
    });