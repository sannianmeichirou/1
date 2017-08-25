function move(obj,myJson,callback,time){
	function getStyle(obj ,attr ){
		return obj.currenStyle?obj.currenStyle[attr]:getComputedStyle(obj)[attr];
		};
		var startVal = {};
		var endVal = {};
		var startTime = new Date();
		for (key in myJson )
		{
			startVal[key] = parseInt( getStyle(obj ,key));
			endVal[key] = parseInt( myJson[key]);
		}
		var timer = setInterval(function(){
			var t = new Date() - startTime;
			var d = time;
			if (t >= d)
			{
				t=d;
				clearInterval(timer);
			};
			for (key in myJson )
			{
				var b = startVal[key];
				var c = endVal[key] - b;
				var s = c*t/d + b;
				obj.style[key] = s + "px";
			};
		if ( t == d )
		{
			callback && callback.call(obj);
		}
		},13);
};