/**
 * Created by Administrator on 2015/4/5.
 */
define(['jquery','routerConfig'],function($,routerConfig){
    var key = window.location.hash.substring(1),
        path = routerConfig[key];
    var module = require([path],function(module){

    });
    $(window).on('hashchange',function(){
//        if(window.location.hash == '#page1' || window.location.hash == '#'){
//            var module = require(['../modules/module1/module1'],function(module1){
//
//            });
//        }else if(window.location.hash == '#page2'){
//            var module = require(['../modules/module2/module2'],function(module2){
//
//            });
//        }
        for(var hash in routerConfig){
            var path = routerConfig[hash];
            if(window.location.hash == '#'+hash){
                require([path],function(module){

                });
            }
        }
    });

});