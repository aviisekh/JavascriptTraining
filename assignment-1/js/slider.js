

function Slider()
{
	var self = this;

	this.LEFT  = "left";
	this.RIGHT = "right";
	this.SLOW  = 5;
	this.FAST  = 1;

	this.slider;
	this.btnLeft;
	this.btnRight;
	this.imageCount;
	this.interval;
	this.margin;
	this.marginInterval;
	this.delay;
	this.imageWidth;
	this.counter;
	this.slideWidth;
	this.parentNode;

	this.init = function(id) {
		self.parentNode 	= document.getElementById(id);
		self.slider 		= self.parentNode.getElementsByClassName("images")[0];
		self.btnLeft        = self.parentNode.getElementsByClassName("left")[0];
		self.btnRight       = self.parentNode.getElementsByClassName("right")[0];
		self.imageCount     = self.parentNode.getElementsByTagName("li").length;
		self.margin         = 0;
		self.marginInterval = 10;
		self.delay          = self.SLOW;
		self.imageWidth     = 830;
		self.counter        = 0;
		self.slideWidth     = self.imageWidth;

		self.btnLeft.addEventListener("click", function() {
			self.delay = self.SLOW;
			if (self.margin == - ((self.imageCount - 1) * self.imageWidth)) {
				self.rewind();
				self.setSlider(self.RIGHT);
			} else {
				self.slideWidth = self.imageWidth;
				self.setSlider(self.LEFT);
			}
		});

		self.btnRight.addEventListener("click", function() {
			self.delay = self.SLOW;
			if (self.margin == 0) {
				self.rewind();
				self.setSlider(self.LEFT);
			} else {
				self.slideWidth = self.imageWidth;
				self.setSlider(self.RIGHT);
			}
		});
	}

	this.setSliderMargin = function(margin) {
		self.slider.style["margin-left"] =  margin + "px";
	}

	this.slide = function(direction) {
		self.setSliderMargin(self.margin);

		if (direction == self.LEFT) {
			self.margin -= self.marginInterval;
		} else if(direction == self.RIGHT) {
			self.margin += self.marginInterval;
		}

		self.counter++;
		if (self.counter * self.marginInterval >= self.slideWidth) {
			self.counter = 0;
			self.stopSlider();
		}
	}

	this.setSlider = function(direction) {
		self.stopSlider();
		self.interval = setInterval(function() {
			self.slide(direction)
		}, self.delay);
	}

	this.stopSlider = function() {
		clearInterval(self.interval);
	}

	this.rewind = function () {
		self.delay = self.FAST;
		self.slideWidth =  ((self.imageCount - 1) * self.imageWidth);
	}


}
