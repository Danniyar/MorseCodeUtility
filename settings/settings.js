const dotLengthElm = document.getElementById('dotLength');
const livesElm = document.getElementById('lives');
const reviewTimeElm = document.getElementById('reviewTime');
const timePressureElm = document.getElementById('timePressure');
const showProgressElm = document.getElementById('showProgress');

dotLengthElm.value = settingsStorage['dotLength'];
dotlength();
livesElm.value = settingsStorage['lives'];
lives();
reviewTimeElm.value = settingsStorage['reviewTime'];
reviewtime();
timePressureElm.value = settingsStorage['timePressure'];
timepressure();
showProgressElm.checked = settingsStorage['showProgress'];
showprogress();

function dotlength(){
    dotLengthElm.parentElement.parentElement.childNodes[0].nodeValue = 'Dot Length(ms): ' + dotLengthElm.value;
    settingsStorage['dotLength'] = parseInt(dotLengthElm.value);
    localStorage.morseCodeSettings = JSON.stringify(settingsStorage);
}

function lives(){
    livesElm.parentElement.parentElement.childNodes[0].nodeValue = 'Lives: ' + livesElm.value;
    settingsStorage['lives'] = parseInt(livesElm.value);
    localStorage.morseCodeSettings = JSON.stringify(settingsStorage);
}

function reviewtime(){
    reviewTimeElm.parentElement.parentElement.childNodes[0].nodeValue = 'Review Time In Sending Levels(ms): ' + reviewTimeElm.value;
    settingsStorage['reviewTime'] = parseInt(reviewTimeElm.value);
    localStorage.morseCodeSettings = JSON.stringify(settingsStorage);
}

function timepressure(){
    timePressureElm.parentElement.parentElement.childNodes[0].nodeValue = 'Time Pressure: ' + timePressureElm.value;
    settingsStorage['timePressure'] = parseInt(timePressureElm.value);
    localStorage.morseCodeSettings = JSON.stringify(settingsStorage);
}

function showprogress(){
    settingsStorage['showProgress'] = showProgressElm.checked;
    localStorage.morseCodeSettings = JSON.stringify(settingsStorage);
}

function reset(){
    dotLengthElm.value = '100';
    dotlength();
    livesElm.value = '3';
    lives();
    reviewTimeElm.value = '1500';
    reviewtime();
    timePressureElm.value = '3';
    timepressure();
    showProgressElm.checked = true;
    showprogress();
}

function back(){
    window.location.href = '../';
}