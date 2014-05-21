/*
tab changing
*/
$(document).ready(function() {
		$('#second-tab a:first').tab('show');
		var current = "#second-content-tab";
		
		$('#first-tab a').click(function (e) {
			  e.preventDefault();
			  $('#first-content-tab').tab('show');
			  $('#first-content-tab').addClass('active');
			  $(current).removeClass('active');
			  current = "#first-content-tab";
			  console.log(current);
		});
		$('#second-tab a').click(function (e) {
			e.preventDefault();
			$('#second-content-tab').tab('show');
			$(current).removeClass('active');
			$('#second-content-tab').addClass('active');
			current = "#second-content-tab";
			console.log(current);
		});
		$('#third-tab a').click(function (e) {
			e.preventDefault();
			$('#third-content-tab').tab('show');
			$(current).removeClass('active');
			$('#third-content-tab').addClass('active');
			current = "#third-content-tab";
			console.log(current);
		});
		$('#fourth-tab a').click(function (e) {
			e.preventDefault();
			$('#fourth-content-tab').tab('show');
			$(current).removeClass('active');
			$('#fourth-content-tab').addClass('active');
			current = "#fourth-content-tab";
			console.log(current);
		});
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
