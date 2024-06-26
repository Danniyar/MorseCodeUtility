const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const inputarea = document.getElementById('fromtext');
const textarea = document.getElementById('totext');
const textinput = document.getElementById('textinput');
const dotlength = document.getElementById('dotlength');
const morseSwitch = document.getElementById('switch');
const morseInput = document.getElementById('morseInput');
const morsePlay = document.getElementById('morsePlay');
const copyFrom = document.getElementById('copyfrom');
const copyTo = document.getElementById('copyto');
const clear = document.getElementById('clear');

var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
oscillator.connect(gainNode);
oscillator.start();

var morsemode = true;
var beepStartTime = 0;
var beepEndTime = 0;
var dotDuration = 100;

inputarea.addEventListener('input', restrict);
if(window.mobileCheck())
{
    textinput.addEventListener('touchstart', morseinputdown);
    textinput.addEventListener('touchend', morseinputup);
}
else 
{
    textinput.addEventListener('mouseup', morseinputup);
    textinput.addEventListener('mousedown', morseinputdown);
}
morseSwitch.addEventListener('click', onSwitch);
morsePlay.addEventListener('click', onPlay);
dotlength.addEventListener('input', dotinput);
copyFrom.addEventListener('click', onCopyFrom);
copyTo.addEventListener('click', onCopyTo);
clear.addEventListener('click', onClear);

function restrict()
{
    let text = inputarea.value;
    let newarea = "";
    if(morsemode)
    {
        for(var i = 0; i < text.length; i++)
        {
            if(text[i] == '.' || text[i] == '-' || text[i] == ' ')
                newarea += text[i];
        }
        inputarea.value = newarea;
        text = "";
        character = "";
        newarea += ' ';
        for(var i = 0; i < newarea.length; i++)
        {
            if(newarea[i] == ' ' || newarea[i] == '\n')
            {
                if(character.length > 0)
                {
                    if(character in morselibrary)
                        text += morselibrary[character];
                    else
                        text += '~';
                }
                if( (i > 0 && newarea[i] == ' ' && newarea[i-1] == ' ') || newarea[i] == '\n')
                    text += newarea[i];
                character = '';
            }
            else 
                character += newarea[i];
        }
        textarea.textContent = text;
    }
    else 
    {
        text = text.toUpperCase();
        for(var i = 0; i < text.length; i++)
        {
            if(text[i] in letterlibrary || text[i] == ' ' || text[i] == '\n')
                newarea += text[i];
        }
        inputarea.value = newarea;
        text = "";
        newarea += ' ';
        for(var i = 0; i < newarea.length; i++)
        {
            if(newarea[i] == ' ' || newarea[i] == '\n')
            {
                text += newarea[i];
                continue;
            }
            text += letterlibrary[newarea[i]] + ' ';
        }
        textarea.textContent = text;
    }
    textarea.scrollTop = textarea.scrollHeight;
    textarea.scrollLeft = textarea.scrollWidth;
    inputarea.scrollTop = inputarea.scrollHeight;
    inputarea.scrollLeft = inputarea.scrollWidth;
}

function morseinputdown()
{
    beepstart();
    dotlength.style.pointerEvents = 'none';
    dotlength.style.touchAction = 'none';
    beepStartTime = new Date();
    let stopDuration = beepStartTime-beepEndTime;
    let text = inputarea.value;
    if(text.length == 0)
        return;
    if(stopDuration >= dotDuration*7)
        text += '  ';
    else if (stopDuration >= dotDuration*3)
        text += ' ';
    inputarea.value = text;
}

function morseinputup()
{
    beepstop();
    dotlength.style.pointerEvents = 'all';
    dotlength.style.touchAction = 'manipulation';
    beepEndTime = new Date();
    let duration = beepEndTime-beepStartTime;
    let text = inputarea.value;
    if(duration >= dotDuration*3)
        text += '-';
    else
        text += '.';
    inputarea.value = text;
    restrict();
}

function dotinput()
{
    dotDuration = dotlength.value;
}

function beepstart() {
    textinput.style.backgroundColor = 'white';
    textinput.style.borderColor = 'black';
    audioCtx.resume();
    gainNode.connect(audioCtx.destination);
};

function beepstop() {
    textinput.style.backgroundColor = '';
    textinput.style.borderColor = '';
    gainNode.disconnect(audioCtx.destination);
};

function onSwitch() {
    if(morsemode)
    {
        morsemode = false;
        morseSwitch.textContent = 'Text → Morse';
        morseInput.style.pointerEvents = 'none';
        morseInput.style.touchAction = 'none';
    }
    else 
    {
        morsemode = true;
        morseSwitch.textContent = 'Morse → Text';
        morseInput.style.pointerEvents = 'all';
        morseInput.style.touchAction = 'manipulation';
    }
    let text = textarea.textContent;
    textarea.textContent = inputarea.value;
    inputarea.value = text;
};

async function onPlay() {
    if(morsePlay.value == 'stop')
    {
        morseSwitch.style.pointerEvents = 'all';
        morseSwitch.style.touchAction = 'manipulation';
        morseSwitch.style.opacity = '';
        clear.style.pointerEvents = 'all';
        clear.style.touchAction = 'manipulation';
        clear.style.opacity = '';
        dotlength.style.pointerEvents = 'all';
        dotlength.style.touchAction = 'manipulation';
        dotlength.style.opacity = '';
        inputarea.style.pointerEvents = 'all';
        inputarea.style.touchAction = 'manipulation';
        textarea.style.pointerEvents = 'all';
        textarea.style.touchAction = 'manipulation';
        morseInput.style.pointerEvents = 'all';
        morseInput.style.touchAction = 'manipulation';
        morsePlay.value = 'play';
        morsePlay.style.color = '';
        return;
    }
    morseSwitch.style.pointerEvents = 'none';
    morseSwitch.style.touchAction = 'none';
    morseSwitch.style.opacity = '0.5';
    clear.style.pointerEvents = 'none';
    clear.style.touchAction = 'none';
    clear.style.opacity = '0.5';
    dotlength.style.pointerEvents = 'none';
    dotlength.style.touchAction = 'none';
    dotlength.style.opacity = '0.5';
    inputarea.style.pointerEvents = 'none';
    inputarea.style.touchAction = 'none';
    textarea.style.pointerEvents = 'none';
    textarea.style.touchAction = 'none';
    morseInput.style.pointerEvents = 'none';
    morseInput.style.touchAction = 'none';
    morsePlay.value = 'stop';
    morsePlay.style.color = 'cyan';
    let text = '';
    if(morsemode)
        text = inputarea.value;
    else 
        text = textarea.textContent;
    for(var i = 0; i < text.length; i++)
    {
        if(morsePlay.value == 'play')
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
    morseSwitch.style.pointerEvents = 'all';
    morseSwitch.style.touchAction = 'manipulation';
    morseSwitch.style.opacity = '';
    clear.style.pointerEvents = 'all';
    clear.style.touchAction = 'manipulation';
    clear.style.opacity = '';
    dotlength.style.pointerEvents = 'all';
    dotlength.style.touchAction = 'manipulation';
    dotlength.style.opacity = '';
    inputarea.style.pointerEvents = 'all';
    inputarea.style.touchAction = 'manipulation';
    textarea.style.pointerEvents = 'all';
    textarea.style.touchAction = 'manipulation';
    morseInput.style.pointerEvents = 'all';
    morseInput.style.touchAction = 'manipulation';
    morsePlay.value = 'play';
    morsePlay.style.color = '';
};

function onCopyFrom(){
    navigator.clipboard.writeText(inputarea.value);
}

function onCopyTo(){
    navigator.clipboard.writeText(textarea.textContent);
}

function onClear(){
    inputarea.value = '';
    restrict();
}

function back(){
    window.location.href = '../';
}

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}