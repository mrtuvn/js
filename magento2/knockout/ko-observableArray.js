/*
<table data-bind="foreach: exchange_rates">

</table>


<ul data-bind="foreach: arrayNumber"></ul>

*/

define(['jquery', 'ko'], function ($, ko) {
    'use strict';


    return function () {
        const viewModel = {
            /* change will able re-render. It's have more function (replace, push, pop) and benefits than normal array  */
            exchange_rates: ko.observableArray([
                {
                    currency_to: 'USD',
                    rate: '1.0'
                }
            ]),

            arrayNumber: ko.observableArray([
                1,
                2,
                5,
                8
            ])
        }

        viewModel.exchange_rates.push({currency_to: 'VND', rate: '1.25'});
        viewModel.exchange_rates.pop();

        // Set value rate for specific
        viewModel.exchange_rates()[1].rate = '3.5';

        // Replace specific element
        viewModel.exchange_rates.splice(1, 1, {currency_to: 'EUR', rate: '1.2'});

        return viewModel;
    }
});
