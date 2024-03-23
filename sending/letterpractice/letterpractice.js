const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

const levels = [['E','T'],['A','N'],'check',['I','M'],['S','O'],'check',['D','U'],['R','K'],'check',['C','P'],['B','G'],'check',['W','L'],['Q','H'],'check',['F','Y'],['Z','V'],['X','J'],'check',['1','2'],['3','4'],['5','6'],['7','8'],['9','0'],'check',['?','!'],['.',','],[';',':'],['+','-'],['/','='],'check'];
var curLtr;
var ltrs = [];
var correct = 0;
var correctTreshold = 0;

const maxLives = settingsStorage['lives'];
var lives = maxLives;
const reviewTime = settingsStorage['reviewTime'];

const heartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const emptyHeartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const startElm = document.getElementById('start');
const levelElm = document.getElementById('level');
const heartsElm = document.getElementById('hearts');
const textinput = document.getElementById('textinput');
const morseInput = document.getElementById('morseInput');
const ltrElm = document.getElementById('ltr');
const inputarea = document.getElementById('input');
const progressbar = document.getElementById('progress-bar');
var checkID;

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
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

var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
oscillator.connect(gainNode);
oscillator.start();

const dotDuration = settingsStorage['dotLength'];
var beepStartTime = 0;
var beepEndTime = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function morseinputdown()
{
    beepstart();
    if(checkID != undefined)
        clearTimeout(checkID);
    beepStartTime = new Date();
    let stopDuration = beepStartTime-beepEndTime;
    let text = inputarea.innerHTML;
    if(text == '&nbsp;')
    {
        text = '';
        return;
    }
    if(stopDuration >= dotDuration*7)
        text += '  ';
    else if (stopDuration >= dotDuration*3)
        text += ' ';
    inputarea.innerHTML = text;
}

function morseinputup()
{
    beepstop();
    checkID = setTimeout(check, dotDuration*3);
    beepEndTime = new Date();
    let duration = beepEndTime-beepStartTime;
    let text = inputarea.innerHTML;
    if(text == '&nbsp;')
        text = '';
    if(duration >= dotDuration*3)
        text += '-';
    else
        text += '.';
    inputarea.innerHTML = text;
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

var level = parseInt(window.location.hash.substring(1));
if(level == undefined)
    level = 1;
if(levels[level-1] == 'check')
{
    levelElm.innerHTML = 'Level ' + level + ' (Challenge)';
    for(var i = 0; i < lives; i++)
        heartsElm.innerHTML += heartSvg;
}
else
    levelElm.innerHTML = 'Level ' + level + ' (' + levels[level-1][0] + ' & ' + levels[level-1][1] + ')';
for(var i = 0; i < level; i++)
{
    if(levels[i] == 'check')
        continue;
    ltrs.push(levels[i][0]);
    ltrs.push(levels[i][1]);
}
if(level < 7)
{
    if(levels[level-1] == 'check')
        correctTreshold = 15;
    else
        correctTreshold = 10;
}
else if(level < 13)
{
    if(levels[level-1] == 'check')
        correctTreshold = 25;
    else
        correctTreshold = 20;
}
else if(level < 20)
{
    if(levels[level-1] == 'check')
        correctTreshold = 30;
    else
        correctTreshold = 26;
}
else if(level < 26)
{
    if(levels[level-1] == 'check')
        correctTreshold = 40;
    else
        correctTreshold = 36;
}
else
{
    if(levels[level-1] == 'check')
        correctTreshold = 50;
    else
        correctTreshold = 46;
}

function back(){
    if(level < 20)
        window.location.href = '../letters/';
    else if(level < 26)
        window.location.href = '../numbers/';
    else 
        window.location.href = '../punctuation/';
}

function start(){
    if(curLtr == undefined)
    {
        morseInput.style.pointerEvents = 'all';
        morseInput.style.touchAction = 'manipulation';
        curLtr = ltrs[getRandomInt(ltrs.length)];
        startElm.style.display = 'none';
        startElm.innerHTML = 'Start';
        ltrElm.textContent = curLtr;
        inputarea.innerHTML = '&nbsp;';
        inputarea.style.color = 'white';
        ltrElm.style.color = 'white';
        progressbar.style.width = '0%';
        if(levels[level-1] == 'check')
        {
            heartsElm.innerHTML = '';
            for(var i = 0; i < lives; i++)
                heartsElm.innerHTML += heartSvg;
        }
    }
    if(correct == correctTreshold)
    {
        if(startElm.innerHTML != 'Next Level')
        {
            morseInput.style.pointerEvents = 'none';
            morseInput.style.touchAction = 'none';
            ltrElm.textContent = '';
            startElm.style.display = '';
            startElm.innerHTML = 'Next Level';
            return;
        }
        level = parseInt(level) + 1;
        if(level < 32)
        {
            window.location.href = '../letterpractice/#' + level;
            location.reload();
        }
        else
            window.location.href = '../wordpractice/';
        return;
    }
    if(lives == 0)
    {
        if(startElm.innerHTML != "Try Again")
        {
            morseInput.style.pointerEvents = 'none';
            morseInput.style.touchAction = 'none';
            ltrElm.textContent = '';
            startElm.style.display = '';
            startElm.innerHTML = 'Try Again';
            lives = maxLives;
            correct = 0;
            curLtr = undefined;
            return;
        }
    }
}

function check(){
    morseInput.style.pointerEvents = 'none';
    morseInput.style.touchAction = 'none';
    if(inputarea.textContent == letterlibrary[curLtr])
    {
        correct += 1;
        ltrElm.textContent = 'Correct';
        inputarea.style.color = 'cyan';
        ltrElm.style.color = 'cyan';
        progressbar.style.width = (correct/correctTreshold)*100 + '%';
        ltrElm.style.animation = 'none';
        ltrElm.offsetHeight;
        ltrElm.style.animation = null;
        ltrElm.style.animation = 'vertical-shaking 0.7s';
        setTimeout(unfreeze, 1000);
    }
    else
    {
        ltrElm.innerHTML = 'Wrong';
        inputarea.textContent = letterlibrary[curLtr];
        inputarea.style.color = 'red';
        ltrElm.style.color = 'red';
        if(levels[level-1] == 'check')
        {
            lives -= 1;
            heartsElm.innerHTML = '';
            for(var i = 0; i < lives; i++)
                heartsElm.innerHTML += heartSvg;
            for(var i = 0; i < (maxLives-lives); i++)
                heartsElm.innerHTML += emptyHeartSvg;
        }
        ltrElm.style.animation = 'none';
        ltrElm.offsetHeight;
        ltrElm.style.animation = null;
        ltrElm.style.animation = 'horizontal-shaking 0.7s';
        setTimeout(unfreeze, reviewTime);
    }
}

function unfreeze(){
    inputarea.innerHTML = '&nbsp;';
    inputarea.style.color = 'white';
    ltrElm.style.color = 'white';
    if(correct == correctTreshold || lives == 0)
    {
        start();
        return;
    }
    morseInput.style.pointerEvents = 'all';
    morseInput.style.touchAction = 'manipulation';
    let pastLtr = curLtr;
    while(curLtr == pastLtr)
        curLtr = ltrs[getRandomInt(ltrs.length)];
    ltrElm.textContent = curLtr;
}

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}