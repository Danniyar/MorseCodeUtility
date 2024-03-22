const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

const letters = document.getElementsByClassName('letter');
var ltrsWrapper = document.getElementById('letterswrapper');
var curLtr;

const startElm = document.getElementById('start');
const levelElm = document.getElementById('level');
const morseindicator = document.getElementById('morseindicator');

var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
oscillator.connect(gainNode);
oscillator.start();

const dotDuration = settingsStorage['dotLength'];

function beepstart() {
    morseindicator.style.backgroundColor = 'white';
    morseindicator.style.borderColor = 'black';
    audioCtx.resume();
    gainNode.connect(audioCtx.destination);
};

function beepstop() {
    morseindicator.style.backgroundColor = '';
    morseindicator.style.borderColor = '';
    gainNode.disconnect(audioCtx.destination);
};

for(var i = 0; i < letters.length; i++)
    letters[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[letters[i].id] + "</div>") + letters[i].id;

async function onPlay() {
    let text = letterlibrary[curLtr.id];
    let playingLtr = curLtr.id;
    for(var i = 0; i < text.length; i++)
    {
        if(curLtr.id != playingLtr)
            return;
        if(text[i] == '.')
        {
            beepstart();
            await new Promise(r => setTimeout(r, dotDuration));
            beepstop();
            await new Promise(r => setTimeout(r, dotDuration));
        }
        else if(text[i] == '-')
        {
            beepstart();
            await new Promise(r => setTimeout(r, dotDuration*3));
            beepstop();
            await new Promise(r => setTimeout(r, dotDuration));
        }
        else
            await new Promise(r => setTimeout(r, dotDuration*3));
    }
    ltrsWrapper.style.opacity = '1';
};

function back(){
    window.location.href = '/';
}

function letterclicked(ltr)
{
    curLtr = document.getElementById(ltr);
    onPlay();
}

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}