var playing = [];
for(xi=0; xi!=500; xi++){
	playing[xi] = false;
}

function newSound(soundName, fileLoc, extension){
		window[soundName+ "s"] = [];
		window[soundName+"sIndex"] = 0;
		for(xi=0; xi!=30; xi++){
			window[soundName+"s"][xi] = new buzz.sound(fileLoc, {formats:[extension]});;
		}
		
}

newSound("cracklingC5", "./Sounds/Fx/crackling(C5)", "wav");
newSound("notificationA4", "./Sounds/Fx/notification(A4)", "wav");
newSound("reverb1", "./Sounds/Fx/reverb1", "wav");
newSound("whitenoise1", "./Sounds/Fx/whitenoise1", "wav");
newSound("loop1", "./Sounds/Loops/loop1", "wav");
newSound("hat", "./Sounds/Percussion/hat", "wav");
newSound("kick", "./Sounds/Percussion/kick", "wav");
newSound("snare", "./Sounds/Percussion/snare", "wav");
newSound("chord1", "./Sounds/Synths/Drop1/Chords/chord1(D4A4Cn5)", "wav");
newSound("chord2", "./Sounds/Synths/Drop1/Chords/chord2(A4Cn5E5)", "wav");
newSound("chord3", "./Sounds/Synths/Drop1/Chords/chord3(D4Fn4B4)", "wav");
newSound("ichord1", "./Sounds/Synths/Intro/Chords/chord(DACn)", "wav");
newSound("ichord2", "./Sounds/Synths/Intro/Chords/chord2(DFnB)", "wav");
newSound("ichord3", "./Sounds/Synths/Intro/Chords/chord3(EACn)", "wav");
newSound("ichord4", "./Sounds/Synths/Intro/Chords/chord4(B4Fn4)16th", "wav");
newSound("ichord5", "./Sounds/Synths/Intro/Chords/chord5(Cn5Gn4)16th", "wav");
newSound("ichord6", "./Sounds/Synths/Intro/Chords/chord6(Gn4E4)16th", "wav");
newSound("ichord7", "./Sounds/Synths/Intro/Chords/chord7(A4Fn4)16th", "wav");
newSound("ichord8", "./Sounds/Synths/Intro/Chords/chord8(A4E5)", "wav");
newSound("ichord9", "./Sounds/Synths/Intro/Chords/chord9(Fn4A4D5)", "wav");
newSound("ichord10", "./Sounds/Synths/Intro/Chords/chord10(Cn4Fn4A4)", "wav");
newSound("ichord11", "./Sounds/Synths/Intro/Chords/chord11(D4Fn4B4whole)", "wav");
newSound("ichord12", "./Sounds/Synths/Intro/Chords/chord12(D4A4Cn5)half", "wav");
newSound("ichord13", "./Sounds/Synths/Intro/Chords/chord13(A4Cn5E5)4th", "wav");
newSound("ichord14", "./Sounds/Synths/Intro/Chords/chord14(Fn4B4D5)4th", "wav");
newSound("A4", "./Sounds/Synths/Intro/Notes/A4", "wav");
newSound("A416th", "./Sounds/Synths/Intro/Notes/A416th", "wav");
newSound("A5", "./Sounds/Synths/Intro/Notes/A5", "wav");
newSound("B4", "./Sounds/Synths/Intro/Notes/B4", "wav");
newSound("Cn5", "./Sounds/Synths/Intro/Notes/Cn5", "wav");
newSound("D4", "./Sounds/Synths/Intro/Notes/D4", "wav");
newSound("D5", "./Sounds/Synths/Intro/Notes/D5", "wav");
newSound("E4", "./Sounds/Synths/Intro/Notes/E4", "wav");
newSound("E4dFn4", "./Sounds/Synths/Intro/Notes/E4-Fn4", "wav");
newSound("E5", "./Sounds/Synths/Intro/Notes/E5", "wav");
newSound("Fn4", "./Sounds/Synths/Intro/Notes/Fn4", "wav");



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
        case 81:
            playSound("D4", 81);
            break;
        case 87:
            playSound("E4", 87);
            break;
        case 69:
            playSound("E4-Fn4")
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
		if(window[x+"Index"]>28){
			window[x+"Index"]=0;
		}
		playing[y]=true;
	}
}