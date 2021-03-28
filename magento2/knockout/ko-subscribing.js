define(['jquery', 'ko'], function ($, ko) {
    'use strict';


    return function () {
        const title = ko.observable('This is observable text'); // Init text

        // First argument of subscribe func pass is callback
        title.subscribe(function (anewValue) {
            console.log('Changed to ', anewValue);
        });

        // We also can pass second and third argument
        title.subscribe(function (oldValue) {
            console.log('Changed to ', oldValue);
        }, this, 'beforeChange');

        return {
            title: title
        }
    }
});
