
function Box(width, height, color) {
	if(width === undefined) { width = 50 }
	if(height === undefined) { height = 50 }
	if(color === undefined) { color = '#ff00ff'}
	this.width = width;
	this.height = height;
	this.color = utils.parseColor(color);
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.rotation = 0;
	this.scaleX = 0;
	this.scaleY = 0;
	this.lineWidth = 1;
}

Box.prototype.draw = function(ctx) {
	ctx.save();
	ctx.rotate(this.rotation);
	ctx.translate(this.x, this.y);
	ctx.fillStyle = this.color;
	ctx.scale = (this.scaleX, this.scaleY);
	ctx.lineWidth = this.width;

	ctx.beginPath();
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.closePath();
	ctx.restore();

}