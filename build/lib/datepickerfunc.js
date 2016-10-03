$( function()
{   
    $(".datepicker").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "-30:+0",
        

        onClose: function(dateText, inst) {
            var date = $(this).datepicker({ dateFormat: 'dd,MM,yyyy' }).val(); 
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            
            $(this).val(date);
            
        }
    });

    $(".datepicker").focus(function () {
        
        $("#ui-datepicker-div").position({
            my: "center top",
            at: "center bottom",
            of: $(this)
        });
    });
});