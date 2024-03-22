const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

const letters = document.getElementsByClassName('letter');
var ltrElm = [];
var learnedElm = [];
var ltrsWrapper = document.getElementById('letterswrapper');
var curLtr;

var wasincorrect = false;
const maxLives = settingsStorage['lives'];
var lives = maxLives;
var answerStartTime = 0;
const showProgress = settingsStorage['showProgress'];
const timePressure = settingsStorage['timePressure'];

const heartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const emptyHeartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const startElm = document.getElementById('start');
const levelElm = document.getElementById('level');
const heartsElm = document.getElementById('hearts');
const morseindicator = document.getElementById('morseindicator');

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
oscillator.connect(gainNode);
oscillator.start();

const dotDuration = settingsStorage['dotLength'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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

async function onPlay() {
    if(startElm.value == 'stop')
    {
        for(var i = 0; i < ltrElm.length; i++)
        {
            ltrElm[i].style.pointerEvents = 'all';
            ltrElm[i].style.touchAction = 'manipulation';
        }
        for(var i = 0; i < learnedElm.length; i++)
        {
            learnedElm[i].style.pointerEvents = 'all';
            learnedElm[i].style.touchAction = 'manipulation';
        }
        ltrsWrapper.style.opacity = '1';
        startElm.style.color = '';
        startElm.value = 'play';
        return;
    }
    startElm.value = 'stop';
    startElm.style.color = 'cyan';
    for(var i = 0; i < ltrElm.length; i++)
    {
        ltrElm[i].style.pointerEvents = 'none';
        ltrElm[i].style.touchAction = 'none';
    }
    for(var i = 0; i < learnedElm.length; i++)
    {
        learnedElm[i].style.pointerEvents = 'none';
        learnedElm[i].style.touchAction = 'none';
    }
    ltrsWrapper.style.opacity = '0.5';
    let text = letterlibrary[curLtr.id];
    for(var i = 0; i < text.length; i++)
    {
        if(startElm.value == 'play')
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
    for(var i = 0; i < ltrElm.length; i++)
    {
        ltrElm[i].style.pointerEvents = 'all';
        ltrElm[i].style.touchAction = 'manipulation';
    }
    for(var i = 0; i < learnedElm.length; i++)
    {
        learnedElm[i].style.pointerEvents = 'all';
        learnedElm[i].style.touchAction = 'manipulation';
    }
    ltrsWrapper.style.opacity = '1';
    startElm.style.color = '';
    startElm.value = 'play';
};

heartsElm.innerHTML = '';
for(var i = 0; i < lives; i++)
    heartsElm.innerHTML += heartSvg;

for(var i = 0; i < level; i++)
{
    if(levels[i] == 'check')
    {
        if(i == level-1)
        {
            for(var k = 0; k < ltrElm.length; k++)
                ltrElm[k].setAttribute('score', '0');
        }
        continue;
    }
    ltrElm.push(document.getElementById(levels[i][0]));
    ltrElm.push(document.getElementById(levels[i][1]));
    if(i < level-1)
    {
        ltrElm[ltrElm.length-1].setAttribute('score', '70');
        ltrElm[ltrElm.length-2].setAttribute('score', '70');
    }
    else
    {
        ltrElm[ltrElm.length-1].setAttribute('score', '0');
        ltrElm[ltrElm.length-2].setAttribute('score', '0');
    }
}
for(var i = 0; i < ltrElm.length; i++)
{
    ltrElm[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[ltrElm[i].id] + "</div>") + ltrElm[i].id;
    ltrElm[i].style.opacity = '1';
}

function back(){
    window.location.href = '/receiving/';
}

function start(){
    if(curLtr == undefined && learnedElm.length == 0)
    {
        if(ltrElm.length < 2)
            return;
        levelElm.innerHTML = 'Custom Level';
        for(var i = 0; i < letters.length; i++)
        {
            letters[i].style.pointerEvents = 'none';
            letters[i].style.touchAction = 'none';
        }
        for(var i = 0; i < ltrElm.length; i++)
        {
            ltrElm[i].innerHTML = ("<div class='lettertext'>" + '<div class="progress-bar" role="progressbar"></div>' + "</div>") + ltrElm[i].id;
            if(showProgress == false)
                ltrElm[i].childNodes[0].style.display = 'none';
            ltrElm[i].style.pointerEvents = 'all';
            ltrElm[i].style.touchAction = 'manipulation';
        }
        heartsElm.innerHTML = '';
        for(var i = 0; i < lives; i++)
            heartsElm.innerHTML += heartSvg;
        curLtr = ltrElm[getRandomInt(ltrElm.length)];
        startElm.innerHTML = '<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00001 4C3.34315 4 2.00001 5.34314 2.00001 7L2 17C2 18.6569 3.34315 20 5 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H5C4.44771 18 4 17.5523 4 17V7C4 6.44772 4.44771 6 5 6L19 6C19.5523 6 20 6.44772 20 7L20 17C20 17.5523 19.5523 18 19 18H14.0027L15.2821 16.7161C15.6734 16.3235 15.6734 15.687 15.2821 15.2944C14.8909 14.9019 14.2566 14.9019 13.8654 15.2944L11.5937 17.574L11.5805 17.5873C10.804 18.3724 10.8057 19.6406 11.5859 20.4234L13.8604 22.7058C14.2513 23.0981 14.8852 23.0981 15.2762 22.7058C15.6672 22.3134 15.6672 21.6773 15.2762 21.285L13.9956 20H19C20.6569 20 22 18.6569 22 17L22 7C22 5.34315 20.6569 4 19 4L5.00001 4Z" fill="currentColor"/></svg>';
        answerStartTime = new Date();
    }
    for(var i = 0; i < ltrElm.length; i++)
    {
        ltrElm[i].children[0].children[0].style.width = ltrElm[i].getAttribute('score') + '%';
    }
    for(var i = 0; i < learnedElm.length; i++)
    {
        learnedElm[i].children[0].children[0].style.width = learnedElm[i].getAttribute('score') + '%';
    }
    if(ltrElm.length == 0)
    {
        if(startElm.innerHTML != 'Start')
        {
            for(var i = 0; i < ltrElm.length; i++)
            {
                ltrElm[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[ltrElm[i].id] + "</div>") + ltrElm[i].id;
            }
            for(var i = 0; i < learnedElm.length; i++)
            {
                learnedElm[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[learnedElm[i].id] + "</div>") + learnedElm[i].id;
                ltrElm.push(learnedElm[i]);
            }
            for(var i = 0; i < letters.length; i++)
            {
                letters[i].style.pointerEvents = 'all';
                letters[i].style.touchAction = 'manipulation';
            }
            levelElm.innerHTML = 'Select The Symbols You Want To Practice';
            for(var k = 0; k < ltrElm.length; k++)
                ltrElm[k].setAttribute('score', '0');
            learnedElm = [];
            startElm.innerHTML = 'Start';
            lives = maxLives;
            curLtr = undefined;
            return;
        }
        return;
    }
    if(lives == 0)
    {
        if(startElm.innerHTML != "Try Again")
        {
            for(var i = 0; i < ltrElm.length; i++)
            {
                ltrElm[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[ltrElm[i].id] + "</div>") + ltrElm[i].id;
            }
            for(var i = 0; i < learnedElm.length; i++)
            {
                learnedElm[i].innerHTML = ("<div class='lettertext'>" + letterlibrary[learnedElm[i].id] + "</div>") + learnedElm[i].id;
                ltrElm.push(learnedElm[i]);
            }
            for(var i = 0; i < letters.length; i++)
            {
                letters[i].style.pointerEvents = 'all';
                letters[i].style.touchAction = 'manipulation';
            }
            levelElm.innerHTML = 'Select The Symbols You Want To Practice';
            learnedElm = [];
            for(var k = 0; k < ltrElm.length; k++)
                ltrElm[k].setAttribute('score', '0');
            startElm.innerHTML = 'Try Again';
            lives = maxLives;
            curLtr = undefined;
            return;
        }
    }
    onPlay();
}

function letterclicked(ltr)
{
    if(curLtr == undefined)
    {
        let elm = document.getElementById(ltr);
        if(ltrElm.includes(elm))
        {
            elm.innerHTML = elm.id;
            elm.style.opacity = '';
            ltrElm.splice(ltrElm.indexOf(elm), 1);
        }
        else
        {
            elm.setAttribute('score', '0');
            elm.innerHTML = ("<div class='lettertext'>" + letterlibrary[elm.id] + "</div>") + elm.id;
            elm.style.opacity = '1';
            ltrElm.push(elm);
        }
        return;
    }
    let answerEndTime = new Date();
    if(ltr == curLtr.id)
    {
        let score = parseInt(curLtr.getAttribute('score'));
        let change = 15000-(answerEndTime-answerStartTime)*timePressure/3;
        if(change < 0)
            change = 0;
        if(wasincorrect)
            change -= 2000;
        if(heartsElm.innerHTML != '')
            change /= 200;
        else
            change /= 500;
        score += parseInt(change);
        curLtr.setAttribute('score', score);
        curLtr.style.animation = 'none';
        curLtr.offsetHeight;
        curLtr.style.animation = null;
        curLtr.style.animation = 'vertical-shaking 0.7s';
        if(score >= 100)
        {
            score = 100;
            curLtr.setAttribute('score', score);
            if(ltrElm.includes(curLtr))
            {
                learnedElm.push(curLtr);
                ltrElm.splice(ltrElm.indexOf(curLtr), 1);
            }
        }
        let pastLtr = curLtr;
        while(pastLtr == curLtr)
            curLtr = ltrElm[getRandomInt(ltrElm.length)];
        if(learnedElm.length > 0 && getRandomInt(10) <= 1)
        {
            while(pastLtr == curLtr)
                curLtr = learnedElm[getRandomInt(learnedElm.length)];
        }
        wasincorrect = false;
        answerStartTime = new Date();
        start();
    }
    else
    {
        if(heartsElm.innerHTML != '')
        {
            lives -= 1;
            heartsElm.innerHTML = '';
            for(var i = 0; i < lives; i++)
                heartsElm.innerHTML += heartSvg;
            for(var i = 0; i < (maxLives-lives); i++)
                heartsElm.innerHTML += emptyHeartSvg;
            if(lives == 0)
            {
                start();
            }
        }
        wasincorrect = true;
        let elm = document.getElementById(ltr);
        let score = parseInt(elm.getAttribute('score'));
        score -= 20;
        if(learnedElm.includes(elm))
        {
            learnedElm.splice(learnedElm.indexOf(elm), 1);
            ltrElm.push(elm);
        }
        if(score < 0)
            score = 0;
        elm.setAttribute('score', score);
        elm.style.animation = 'none';
        elm.offsetHeight;
        elm.style.animation = null;
        elm.style.animation = 'horizontal-shaking 0.7s';
        
        elm.children[0].children[0].style.width = score + '%';
    }
}

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}