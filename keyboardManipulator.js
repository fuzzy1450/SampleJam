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