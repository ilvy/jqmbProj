/**
 * Created by man on 15-4-3.
 */

requirejs.config({
    baseUrl:'./',
    paths:{
        text:'require/text',
        jquery:'jquery',
        router:'js/router',
        routerConfig:'js/routerConfig'
    },
    shim:{
        jquery:{
            export:'jquery'
        }
    }
});

define(['text','jquery','router'],function(text,$,router){

});