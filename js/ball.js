function Ball(r, color) {
	if(r === undefined) {r = 20}
	if(color === undefined) {color = '#00ff00'}
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.radius = r;
	this.color = utils.parseColor(color);
	this.lineWidth = 1;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rotation = 0;
}

Ball.prototype.draw = function(ctx) {
	ctx.save();
	ctx.translate(this.x,this.y);
	ctx.rotate(this.rotation);
	ctx.fillStyle = this.color;
	ctx.lineWidth = this.lineWidth;
	ctx.strokeStyle = this.color;
	ctx.beginPath();
	ctx.arc(0,0,this.radius,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

//得到小球左上角的坐标
Ball.prototype.getBounds = function() {
	return {
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius*2,
		height: this.radius*2
	}
}