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
		var ctx = canvases[xe].getContext("2d");

		originalPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		currentPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		changeColor(currentPixels, originalPixels);
	}
}

function hexToRGB(hex)
{
    var long = parseInt(hex.replace(/^#/, ""), 16);
    return {
        R: (long >>> 16) & 0xff,
        G: (long >>> 8) & 0xff,
        B: long & 0xff
    };
}

 function changeColor(currentPixels, originalPixels)
    {
        if(!originalPixels) return; // Check if image has loaded
        var newColor = hexToRGB(document.getElementById("color").value);

        for(var I = 0, L = originalPixels.data.length; I < L; I += 4)
        {
            if(currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
            {
                currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
                currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
                currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
            }
        }

        ctx.putImageData(currentPixels, 0, 0);
        mug.src = canvas.toDataURL("image/png");
    }