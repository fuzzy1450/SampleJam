var playing = [];
for(xi=0; xi!=500; xi++){
	playing[xi] = false;
}

function newSound(soundName, fileLoc, extension){
		window[soundName+ "s"] = [];
		window[soundName+"sIndex"] = 0;
		for(xi=0; xi!=75; xi++){
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
newSound("chord1", "./Sounds/Drop1/Chords/chord1(D4A4C#5)", "wav");
newSound("chord2", "./Sounds/Drop1/Chords/chord2(A4C#5E5)", "wav");
newSound("chord3", "./Sounds/Drop1/Chords/chord3(D4F#4B4)", "wav");
newSound("ichord1", "./Sounds/Intro/Chords/chord1(DAC#)", "wav");
newSound("ichord2", "./Sounds/Intro/Chords/chord2(DF#B)", "wav");
newSound("ichord3", "./Sounds/Intro/Chords/chord3(EAC#)", "wav");
newSound("ichord4", "./Sounds/Intro/Chords/chord4(B4F#4) 16th", "wav");
newSound("ichord5", "./Sounds/Intro/Chords/chord5(C#5F#4) 16th", "wav");
newSound("ichord6", "./Sounds/Intro/Chords/chord6(G#4E4) 16th", "wav");
newSound("ichord7", "./Sounds/Intro/Chords/chord7(A4F#4) 16th", "wav");
newSound("ichord8", "./Sounds/Intro/Chords/chord8(A4E5)", "wav");
newSound("ichord9", "./Sounds/Intro/Chords/chord9(F#4A4D5)", "wav");
newSound("ichord10", "./Sounds/Intro/Chords/chord10(C#4F#4A4)", "wav");
newSound("ichord11", "./Sounds/Intro/Chords/chord11(D4F#4B4whole)", "wav");
newSound("ichord12", "./Sounds/Intro/Chords/chord12 (D4A4C#5) half", "wav");
newSound("ichord13", "./Sounds/Intro/Chords/chord13 (A4C#5E5) 4th", "wav");
newSound("ichord14", "./Sounds/Intro/Chords/chord14 (F#4B4D5) 4th", "wav");
newSound("A4", "./Sounds/Intro/Notes/A4", "wav");
newSound("A4 16th", "./Sounds/Intro/Notes/A416th", "wav");
newSound("A5", "./Sounds/Intro/Notes/A5", "wav");
newSound("B4", "./Sounds/Intro/Notes/B4", "wav");
newSound("C#5", "./Sounds/Intro/Notes/C#5", "wav");
newSound("D4", "./Sounds/Intro/Notes/D4", "wav");
newSound("D5", "./Sounds/Intro/Notes/D5", "wav");
newSound("E4", "./Sounds/Intro/Notes/E4", "wav");
newSound("E4-F#4", "./Sounds/Intro/Notes/E4-F#4", "wav");
newSound("E5", "./Sounds/Intro/Notes/E5", "wav");
newSound("F#4", "./Sounds/Intro/Notes/F#4", "wav");



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
            playSound("E4-F#4")
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
		if(window[x+"Index"]>70){
			window[x+"Index"]=0;
		}
		playing[y]=true;
	}
}