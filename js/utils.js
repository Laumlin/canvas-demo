window.utils = {};

window.utils.captureMouse = function(element) {
	var mouse = {x:0, y:0};

	element.addEventListener('mousemove', function(event){
		var x,y;

		if(event.pageX || event.pageY){
			x = event.pageX;
			y = event.pageY;
		}else{
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;
	}, false);
	return mouse;
}

window.utils.captureTouch = function (element) {
      var touch = {
                    x: null,
                    y: null,
                    isPressed: false,
                    event: null
                    };
      var body_scrollLeft = document.body.scrollLeft,
          element_scrollLeft = document.documentElement.scrollLeft,
          body_scrollTop = document.body.scrollTop,
          element_scrollTop = document.documentElement.scrollTop,
          offsetLeft = element.offsetLeft,
          offsetTop = element.offsetTop;
          
     // 绑定touchstart事件
      element.addEventListener('touchstart', function (event) {
        touch.isPressed = true;
        touch.event = event;
      }, false);
      
     // 绑定touchend事件
      element.addEventListener('touchend', function (event) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
      }, false);
      
     //绑定touchmove事件
      element.addEventListener('touchmove', function (event) {
        var x, y,
            touch_event = event.touches[0]; //第一次touch

        if (touch_event.pageX || touch_event.pageY) {
          x = touch_event.pageX;
          y = touch_event.pageY;
        } else {
          x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
          y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        //剪去偏移量
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
      }, false);
      //返回touch对象
      return touch;
    };

window.utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};

window.utils.containPoint = function(rect, x, y){
    return !(rect.x>x||rect.y>y||rect.x+rect.width<x||rect.y+rect.height<y);
}

window.utils.intersects = function(rectA, rectB) {
  return !(rectA.x+rectA.width<rectB.x ||
           rectB.x+rectB.width<rectA.x ||
           rectA.y+rectA.height<rectB.y ||
           rectB.y+rectB.height<rectA.y)
}
