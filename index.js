var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;		
var RADIS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	if (context) {
		canvas.width = WINDOW_WIDTH;
		canvas.height = WINDOW_HEIGHT;

		render(context);
	} else {
			alert("当前浏览器不支持canvas, 请更换浏览器再试")
	}

	function render(cxt) {
		var hours = 16;
		var minutes = 13;
		var seconds = 14;
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
		
