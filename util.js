(function(document){
var tools;
var obj = {
    test:function(){alert("Test")},                   //00001
    addHandler: function (element, type, handler) {   // 00002
             if(element.addEventListener) { 
                element.addEventListener(type, handler, false); 
               }else if (element.attachEvent) {
                 element.attachEvent("on" + type, handler); 
             }else{element["on" + type] = handler;}
			 },
	 toFixed:function(num, s) {                        //00003
          var tempnum = num.toFixed(s+4);
	 	  return Number(Math.round(tempnum+'e'+s)+'e-'+s);
          },
    stopPropagation:function(event){                //00004
		var e = event || window.event;
		if (e && e.stopPropagation) e.stopPropagation(); 
		else e.cancelBubble = true; 
	},
	preventDefault:function(event){                 //00005
		var e = event || window.event;
		if (e && e.preventDefault) e.preventDefault(); 
		else returnValue = false;
	}  	 
}

window.tools = obj;
})(document);