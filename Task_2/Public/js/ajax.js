
$(document).ready(function () {


    const request_one = {
        "url": "https://api.exchangerate-api.com/v4/latest/USD",
        "method": "GET"
    };

    $.ajax(request_one).done(function (response) {

        for (var i in response.rates) {
            var opt = new Option(i, response.rates[i]);
            $(opt).html(i, response.rates[i]);
            $("#currency").append(opt);

            var o = new Option(i, response.rates[i]);
            $(o).html(i, response.rates[i]);
            $("#currency_2").append(o);
        }

    });

    $("#button").click( function() {
            var curr_1 = $('#currency')[0].value;
            var curr_2 = $('#currency_2')[0].value;
            var amount = $('#text').val();

            console.log('Result is: ' + amount * curr_2 / curr_1);
        }
    );

});