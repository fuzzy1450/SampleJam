canvases=document.getElementsByClassName("canvas");
imageNames = ["1","2","3","4","5","6","7","8","9","0","Q2","W2","E2","R2","T2","Y2","U2","I2","O2","P2","A2","S2","D2","F2","G2","H2","J2","K2","L2","Z2","X2","C2","V2","B2","N2","M2"]

function startKeyboard(){
	for(xe=0; xe!=canvases.length; xe++){
		var canvas = canvases[xe];
		ctx = canvas.getContext("2d");
	
	
		img = new Image(600, 600);
		img.src = ('./assets/keyboard/'+imageNames[xe]+".png");
		img.width=64;
		img.height=64;
	
		ctx.drawImage(img,0,0,175,135);
	
	}
}

function recolorKeyboard(color) {
	for(xe=0; xe!=canvases.length; xe++){
		var canvas = canvases[xe];
		tintImage(canvas, color);
	}
}

function tintImage(imgElement,tintColor) {
    // create hidden canvas (using image dimensions)
    var canvas = document.createElement("canvas");
    canvas.width = imgElement.offsetWidth;
    canvas.height = imgElement.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElement,0,0);

    var map = ctx.getImageData(0,0,320,240);
    var imdata = map.data;

    // convert image to grayscale
    var r,g,b,avg;
    for(var p = 0, len = imdata.length; p < len; p+=4) {
        r = imdata[p]
        g = imdata[p+1];
        b = imdata[p+2];
        // alpha channel (p+3) is ignored           

        avg = Math.floor((r+g+b)/3);

        imdata[p] = imdata[p+1] = imdata[p+2] = avg;
    }

    ctx.putImageData(map,0,0);

    // overlay filled rectangle using lighter composition
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.5;
    ctx.fillStyle=tintColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // replace image source with canvas data
    imgElement.src = canvas.toDataURL();
}