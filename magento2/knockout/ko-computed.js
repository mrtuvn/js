define(['jquery', 'ko'], function ($, ko) {
    'use strict';

    // config pass from template phtml
    return function (config) {
        let currencyInfo = ko.observable();
        $.getJSON(config.base_url + 'rest/V1/directory/currency', currencyInfo);

        const viewModel = {
            label: ko.observable('Currency Info')
        }

        viewModel.output = ko.computed(function () {
            if (!currencyInfo()) return '...Loading';
            return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 2);
        }.bind(viewModel));

        return viewModel;
    }
});
