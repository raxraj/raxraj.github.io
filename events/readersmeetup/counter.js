
$(".countdown")
    .countdown("2019/06/22", function(event) {
        $(this).html(
            event.strftime('<div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
        );
    });