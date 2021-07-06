var container = [];
$(document).ready(function () {


    const request_one = {
        "url": "https://api.exchangerate-api.com/v4/latest/USD",
        "method": "GET"
    };

    $.ajax(request_one).done(function (response) {
        container.push(response.rates);
        console.log(container[0]);

        /* it would go like */
        /* get values for selecting two currencies */
        /* then typing value */
        /* and lastly multiplying numbers */
        /* I usually write code really slow, sorry for that */

        /*for (var i in response.rates) {
            /!*var o = new Option(response.rates[i]);
            $(o).html(response.rates[i]);
            $("#currency").append(o);*!/
            console.log(response.rates.getOwnPropertyNames(rates[i]))
            console.log(response.rates[i]);
            categories.push(response.rates);
        }*/
        /*console.log(response.rates);*/

    }); // I'm so sorry i'm a slow writer couldn't fit in time... SORRY

});