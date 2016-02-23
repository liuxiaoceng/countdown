var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;		
var RADIS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

// 设置截止时间
const endTime = new Date(2016, 2-1, 26, 13, 36, 42); 
var curShowTimeSeconds = 0; // 当前时间拒截止时间的 seconds

window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	if (context) {
		canvas.width = WINDOW_WIDTH;
		canvas.height = WINDOW_HEIGHT;

		curShowTimeSeconds = getCurrentShowtimeSeconds();
		render(context);
	} else {
			alert("当前浏览器不支持canvas, 请更换浏览器再试")
	}

	function getCurrentShowtimeSeconds() {
		var curTime = new Date();
		var ret = endTime.getTime() - curTime.getTime();
		ret = Math.round(ret/1000);

		return ret >=0? ret: 0;
	}

	function render(cxt) {
		var hours = parseInt(curShowTimeSeconds/3600);
		var minutes = parseInt(curShowTimeSeconds%3600/60);
		var seconds = parseInt(curShowTimeSeconds%60);
		var itemSize = RADIS+1;

		var num = 0;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(hours/10), cxt);
		num += 7*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(hours%10), cxt);
		num += 7*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, 10, cxt);
	
		num += 4*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(minutes/10), cxt);
		num += 7*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(minutes%10), cxt);
		
		num += 7*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, 10, cxt);
		num += 4*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(seconds/10), cxt);
		num += 7*2+1;
		renderDigit( MARGIN_LEFT + num*itemSize, MARGIN_TOP, parseInt(seconds%10), cxt);
	}

	function renderDigit(x, y, num, cxt) {
		cxt.fillStyle = "rgb(0,102,153)";

		for (var i = 0; i < digit[num].length; i++) {
			for (var j = 0; j < digit[num][i].length; j++) {
				if (digit[num][i][j] == 1) {
					cxt.beginPath();
					cxt.arc( x+j*2*(RADIS+1)+(RADIS+1), y+i*2*(RADIS+1)+(RADIS+1), RADIS, 0, 2*Math.PI );
					cxt.closePath();

					cxt.fill();
				}
			}
		}
	}
}
		
