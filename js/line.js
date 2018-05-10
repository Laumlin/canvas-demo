function Line(x1, y1, x2, y2){
	this.x = 0;
	this.y = 0;
	this.x1 = (x1 === undefined) ? 0 : x1;
	this.y1 = (y1 === undefined) ? 0 : y1;
	this.x2 = (x2 === undefined) ? 0 : x2;
	this.y2 = (y2 === undefined) ? 0 : y2;
	this.rotation = 0;
	this.lineWidth = 1;
}

Line.prototype.draw = function(ctx){
	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.rotate(this.rotation);
	ctx.lineWidth = this.lineWidth;
	ctx.beginPath();
	ctx.moveTo(this.x1, this.y1);
	ctx.lineTo(this.x2, this.y2);
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}

Line.prototype.getBounds = function(){
	if(this.rotation === 0) {
		var minX = Math.min(this.x1, this.x2),
	 		minY = Math.min(this.y1, this.y2),
			maxX = Math.max(this.x1, this.x2),
			maxY = Math.max(this.y1, this.y2);
		return {
			x: this.x + minX,
			y: this.y + minY,
			width: maxX - minX,
			height: maxY - minY
		}
	}else {
		var sin = Math.sin(this.rotation),
			cos = Math.cos(this.rotation),
			x1r = this.x1*cos - this.y1*sin,
			x2r = this.x2*cos - this.y2*sin,
			y1r = this.y1*cos + this.x1*sin,
			y2r = this.y2*cos + this.y2*sin;
		return {
			x: this.x + Math.min(x1r, x2r),
			y: this.y + Math.max(y1r, y2r),
			width: Math.max(x1r, x2r) - Math.min(x1r, x2r),
			height: Math.max(y1r, y2r) - Math.min(y1r, y2r),
		}
	}
}