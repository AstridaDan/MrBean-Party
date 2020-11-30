var audio = document.getElementById('audio');
var audio2 = document.getElementById('audio2');
var audio3= document.getElementById('audio3');
var audio4= document.getElementById('audio4');

var PlayStopBTN = document.getElementById('PlayStopBTN');
var PlayStopBTN2 = document.getElementById('PlayStopBTN2');
var PlayStopBTN3 = document.getElementById('PlayStopBTN3');
var PlayStopBTN4 = document.getElementById('PlayStopBTN4');

var myVideo = document.getElementById("video1"); 
var myVideo2 = document.getElementById("video2"); 
var myVideo3 = document.getElementById("video3");
var myVideo4 = document.getElementById("video4");

var count = 0;

function PlayStop() {
	if(count == 0){
		count = 1;
		audio.play();
		myVideo.play(); 
		audio2.volume = 1;
		PlayStopBTN.innerHTML = "Stop &#9611";
	}else{
		count = 0;
		audio.pause();
		audio.currentTime = 0;
		myVideo.pause();
		myVideo.currentTime = 0;
		PlayStopBTN.innerHTML = "Play &#9658";
	}
}

//---------OTRAIS----------- 
function PlayStop2() {
	if(count == 0){
		count = 1;
		audio2.play();
		myVideo2.play();
		audio2.volume = 0.6;
		PlayStopBTN2.innerHTML = "Stop &#9611";
	}else{
		count = 0;
		audio2.pause();
		audio2.currentTime = 0;
		myVideo2.pause();
		myVideo2.currentTime = 0;
		PlayStopBTN2.innerHTML = "Play &#9658";
	}		
}

//---------TREŠAIS----------- 
function PlayStop3() {
	if(count == 0){
		count = 1;
		audio3.play();
		myVideo3.play();
		audio3.volume = 0.2;
		PlayStopBTN3.innerHTML = "Stop &#9611";
	}else{
		count = 0;
		audio3.pause();
		audio3.currentTime = 0;
		myVideo3.pause();
		myVideo3.currentTime = 0;
		PlayStopBTN3.innerHTML = "Play &#9658";
	}
}

//---------CETURTAIS----------- 
function PlayStop4() {
	if(count == 0){
		count = 1;
		audio4.play();
		myVideo4.play();
		audio4.volume = 0.9;
		PlayStopBTN4.innerHTML = "Stop &#9611";
	}else{
		count = 0;
		audio4.pause();
		audio4.currentTime = 0;
		myVideo4.pause();
		myVideo4.currentTime = 0;
		PlayStopBTN4.innerHTML = "Play &#9658";
	}
}