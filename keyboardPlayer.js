var playing = [];
for(xi=0; xi!=1000; xi++){
	playing[xi] = false;
}

function newSound(soundName, fileLoc, extension){
		window[soundName+ "s"] = [];
		window[soundName+"sIndex"] = 0;
		for(xi=0; xi!=150; xi++){
			window[soundName+"s"][xi] = new buzz.sound(fileLoc, {formats:[extension]});;
		}
		
}

newSound("hat", "./Sounds/Percussion/hat", "wav");



function getKey(e){
	e=window.event;
	console.log(e.keyCode + " 1");
	switch (e.keyCode){
		case 88:
			playSound("hats", 88);
			break;
		case 101:
			playSound("airhorns", 101);
			break;
	}
	
}

function clearKey(e){
	e=window.event;
	playing[e.keyCode] = false;
}

function playSound(x, y){
	if(!playing[y]){
		window[x][window[x+"Index"]].play();
		window[x+"Index"]++;
		if(window[x+"Index"]>100){
			window[x+"Index"]=0;
		}
		playing[y]=true;
	}
}