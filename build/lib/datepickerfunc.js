$( function()
{   
    $(".datepicker").datepicker({
        dateFormat: 'yy',
        changeMonth: false,
        changeYear: true,
        yearRange: "-30:+0",
        

        onClose: function(dateText, inst) {
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('yy', new Date(year, 1)));
            console.log(year);
        }
    });

    $(".datepicker").focus(function () {
        $(".ui-datepicker-calendar").hide();
        $("#ui-datepicker-div").position({
            my: "center top",
            at: "center bottom",
            of: $(this)
        });
    });
});