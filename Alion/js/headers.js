(function () {
    'use strict';
    var menuHeader = new Vivus('MenuHeader', {
            type: 'delayed',
            duration: 150
        }, function (obj) {
            obj.el.classList.add('finished');
        }),
        districtsHeader = new Vivus('DistrictsHeader', {
            type: 'delayed',
            duration: 150
        }),
        workProgressHeader = new Vivus('WorkHeader', {
            type: 'delayed',
            duration: 150
        }),
        qualityHeader = new Vivus('QualityHeader', {
            type: 'delayed',
            duration: 150
        }),
        contactsHeader = new Vivus('ContactsHeader', {
            type: 'delayed',
            duration: 150
        });
}());
