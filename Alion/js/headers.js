(function () {
    'use strict';
    var menuHeader = new Vivus('MenuHeader', {
            type: 'sync',
            duration: 80
        }, function () {
            menuHeader.destroy();
        }),

        districtHeader = new Vivus('DistrictHeader', {
            type: 'sync',
            duration: 80
        }, function () {
            districtHeader.destroy();
        }),
        workProgressHeader = new Vivus('WorkProgressHeader', {
            type: 'sync',
            duration: 80
        }, function () {
            workProgressHeader.destroy();
        }),
        qualityHeader = new Vivus('QualityHeader', {
            type: 'sync',
            duration: 80
        }, function () {
            qualityHeader.destroy();
        }),
        contactsHeader = new Vivus('ContactsHeader', {
            type: 'sync',
            duration: 80
        }, function () {
            contactsHeader.destroy();
        }),
        menuItem_4 = new Vivus('Menu4', {
            type: 'sync',
            duration: 50,
            start: 'manual',
            file: 'source/icons/menu/basic_share.svg'
        }, function () {
            $('.menu__span').eq(3).addClass('menu__span-visible');
            menuItem_4.destroy();
        }),
        menuItem_3 = new Vivus('Menu3', {
            type: 'sync',
            duration: 50,
            start: 'manual',
            file: 'source/icons/menu/basic_mail_multiple.svg'
        }, function () {
            menuItem_4.play();
            $('.menu__span').eq(2).addClass('menu__span-visible');
            menuItem_3.destroy();
        }),
        menuItem_2 = new Vivus('Menu2', {
            type: 'sync',
            duration: 50,
            start: 'manual',
            file: 'source/icons/menu/ecommerce_diamond.svg'
        }, function () {
            menuItem_3.play();
            $('.menu__span').eq(1).addClass('menu__span-visible');
            menuItem_2.destroy();
        }),
        menuItem_1 = new Vivus('Menu1', {
            type: 'sync',
            duration: 50,
            file: 'source/icons/menu/basic_map.svg'
        }, function () {
            menuItem_2.play();
            $('.menu__span').eq(0).addClass('menu__span-visible');
            menuItem_1.destroy();
        });

}());
