var changePasswordController = angular.module('changePasswordController', [])

.controller('changePasswordCntrl', ['$scope', function ($scope) {

}]);

    
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
