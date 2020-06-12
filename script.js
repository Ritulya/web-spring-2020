var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),
    opts = {
      radius: 10,
      color: "hsl(hue,100%,80%)"
    },
    counter = 0,
    currentHue = 0,
    painting = false;
	isStroke = true;

canvasBody.addEventListener("mousedown", function(e){
  painting = true;
});

canvasBody.addEventListener("mouseup", function(){
  painting = false;
});

document.getElementById("abs").addEventListener("click", function() {
	if (isStroke) {
		document.getElementById("abs").style.color = "#FF0066"
	}
	else {
		document.getElementById("abs").style.color = "#FFFFFF"
	}
	isStroke = ! isStroke;
	console.log(isStroke);
});

canvasBody.addEventListener("mousemove", function(e){
  if(painting){
    var posX = e.pageX - e.target.offsetLeft,
        posY = e.pageY - 50;

    ++counter;
    if(!(counter%10)){
      if((currentHue !== 356)){
        currentHue++
      } 
	  else {
        currentHue = 0;
      }
    }

    currentColor = opts.color.replace("hue", currentHue);
    canvas.fillStyle = currentColor;
    canvas.arc(posX, posY, opts.radius, 0, Math.PI * 2);
    canvas.fill();
	if (! isStroke) {
		canvas.stroke()
	}
	canvas.beginPath();
  };
});