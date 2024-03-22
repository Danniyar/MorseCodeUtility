const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

var ltrElm = document.getElementsByClassName('letter');
var ltrsWrapper = document.getElementById('letterswrapper');
var sentences = [ 'be careful', 'be careful driving', 'can you translate this for me?', 'chicago is very different from boston', 'do not worry', 'everyone knows it', 'everything is ready', 'from time to time', 'good idea', 'he likes it very much', 'help!', 'he is coming soon', 'he is right', 'he is very annoying', 'he is very famous', 'how are you?', 'how is work going?', 'hurry!', 'i ate already', 'i cannot hear you', 'i would like to go for a walk', 'i do not know how to use it', 'i do not like him', 'i do not like it', 'i do not speak very well', 'i do not understand', 'i do not want it', 'i do not want that', 'i do not want to bother you', 'i feel good', 'if you need my help, please let me know', 'i get off of work at 6', 'i have a headache', 'i hope you and your wife have a nice trip', 'i know', 'i like her', 'i will call you when i leave', 'i will come back later', 'i will pay', 'i will take it', 'i will take you to the bus stop', 'i lost my watch', 'i love you', 'i am an american', 'i am cleaning my room', 'i am cold', 'i am coming to pick you up', 'i am going to leave', 'i am good, and you?', 'i am happy', 
'i am hungry', 'i am married', 'i am not busy', 'i am not married', 'i am not ready yet', 'i am not sure', 'i am sorry, we are sold out', 'i am thirsty', 'i am very busy i do not have time now', 'i need to change clothes', 'i need to go home', 'i only want a snack', 'is mr smith an american?', 'is that enough?', 'i think it is very good', 'i think it tastes good', 'i thought the clothes were cheaper', 'it is longer than 2 miles', 'i have been here for two days', 'i have heard texas is a beautiful place', 'i have never seen that before', 'i was about to leave the restaurant when my friends arrived', 'just a little', 'just a moment', 'let me check', 'let me think about it', 'let us go have a look', 'let us practice english', 'may i speak to mrs smith please?', 'more than that', 'never mind', 'next time', 'no, thank you', 'nothing else', 'not recently', 'not yet', 'of course', 'please fill out this form', 'please take me to this address', 'please write it down', 'really?', 'right here', 'right there', 'see you later', 'see you tomorrow', 'see you tonight', 'she is pretty', 'sorry to bother you', 'take a chance', 'take it outside', 
'tell me', 'thanks for everything', 'thanks for your help', 'thank you', 'thank you miss', 'thank you sir', 'thank you very much', 'that looks great', 'that is alright', 'that is enough', 'that is fine', 'that is it', 'that smells bad', 'that is not fair', 'that is not right', 'that is right', 'that is too bad', 'that is too many', 'that is too much', 'the book is under the table', 'they will be right back', 'they are the same', 'they are very busy', 'this does not work', 'this is very difficult', 'this is very important', 'try it', 'very good, thanks', 'we like it very much', 'would you take a message please?', 'yes, really', 'you are beautiful', 'you are very nice', 'you are very smart', 'your things are all here', 'about 300 kilometers', 'a one way ticket', 'are you going to help her?', 'a round trip ticket', 'at what time?', 'can i make an appointment for next wednesday?', 'can you repeat that please?', 'does this road go to new york?', 'do you have enough money?', 'do you know how to cook?', 'do you know what this says?', 'do you want me to come and pick you up?', 'follow me', 'from here to there', 'go straight ahead', 
'have you arrived?', 'have you been to boston?', 'how do i get there?', 'how do i get to daniel street?', 'how do i get to the american embassy?', 'how long does it take by car?', 'how long does it take to get to georgia?', 'how long is the flight?', 'how was the movie?', 'i would like to make a phone call', 'i would like to make a reservation', 'i have a question i want to ask you', 'i will take that one also', 'i am coming right now', 'i am going home in four days', 'i am leaving tomorrow', 'i am looking for the post office', 'is this pen yours?', 'i wish i had one', 'one ticket to new york please', 'one way or round trip?', 'please speak slower', 'please take me to the airport', 'that way', 'the plane departs at 5:30 pm', 'they arrived yesterday', 'turn around', 'turn left', 'turn right', 'what time are you going to the bus station?', 'when did this happen?', 'when did you arrive in boston?', 'when does he arrive?', 'when does it arrive?', 'when does the bank open?', 'when does the bus leave?', 'when do we arrive?', 'when do we leave?', 'where can i mail this?', 'where is she from?', 'where is the bathroom?', 'why not?', 'will you remind me?', 'are you busy?', 'can we have some more bread please?', 'do you have any money?', 'for how many nights?', 'how long will you be staying?', 'i would like a map of the city', 'i would like a non-smoking room', 
'i would like a room', 'i would like a room with two beds please', 'i need a doctor', 'is there a nightclub in town?', 'is there a restaurant in the hotel?', 'is there a store near here?', 'sorry, we do not have any vacancies', 'take me to the marriott hotel', 'what is the charge per night?', 'what time is check out?', 'where is the airport?', 'where is the mail box?', 'are there any concerts?', 'do you want to go to the movies?', 'have you seen this movie?', 'he said you like to watch movies', 'how tall are you?', 'is the bank far?', 'is there a movie theater nearby?', 'what do people usually do in the summer in los angeles?', 'what kind of music do you like?', 'what is your favorite food?', 'what time does the movie start?', 'who was your teacher?', 'would you like to have dinner with me?', 'would you like to rent a movie?', 'am i pronouncing it correctly?', 'can you do me a favor?', 'can you help me?', 'can you please say that again?', 'can you show me?', 'can you throw that away for me?', 'does anyone here speak english?', 'do not do that', 'do you believe that?', 'do you have a pencil?', 'do you smoke?', 'do you speak english?', 'excuse me, what did you say?', 'forget it', 'how do you pronounce that?', 'how do you say it in english?', 'how do you spell it?', 'how do you spell the word seattle?', 'i can swim', 'i cannot hear you clearly', 'i do not mind', 'i do not speak english very well', 'i do not think so', 'i do not understand what you are saying', 
'is there air conditioning in the room?', 'i think you have too many clothes', 'i trust you', 'i understand now', 'let us meet in front of the hotel', 'please sit down', 'please speak english', 'please speak more slowly', 'sorry, i did not hear clearly', 'that means friend', 'that is wrong', 'try to say it', 'what does this mean?', 'what does this say?', 'what does this word mean?', 'what is the exchange rate?', 'whose book is that?', 'why are not you going?', 'why are you laughing?', 'why did you do that?', 'are you allergic to anything?', 'are you ready?', 'call me', 'did you send me flowers?', 'do you sell batteries?', 'i do not care', 'i give up', 'i got in an accident', 'i have a cold', 'i have one in my car', 'i made this cake', 'i am a teacher', 'i am self-employed', 'i still have a lot to do', 'i still have not decided', 'it depends on the weather', 'it is very cold today', 'my luggage is missing', 'my stomach hurts', 'my throat is sore', 'my watch has been stolen', 'take this medicine', 'the accident happened at the intersection', 'there has been a car accident', 'where can i exchange us dollars?', 'where do you work?', 'where is the nearest hospital?', 'where is the post office?', 'come here', 'does it often snow in the winter in massachusetts?', 
'do you think it will rain today?', 'do you think it is going to rain tomorrow?', 'how is business?', 'is it close?', 'is it possible?', 'is it ready?', 'it costs 20 dollars per hour', 'it hurts here', 'it is far from here', 'it is going to be hot today', 'it is north of here', 'it is over there', 'it is raining', 'it is too late', 'it is very important', 'it will arrive shortly', 'the roads are slippery', 'what is the room rate?', 'what will the weather be like tomorrow?', 'he always does that for me', 'he broke the window', 'he does not look like a nurse', 'he has a nice car', 'he never gives me anything', 'he said this is a nice place', 'he is an american', 'he is a very good student', 'he is faster than me', 'he thinks we do not want to go', 'his room is very small', 'his son', 'how are your parents?', 'how do i use this?', 'i came with my family', 'i would like to exchange this for dollars', 'i would like to use the internet', 'i do not have time right now', 'i do not know', 'i have money', 'i have not had lunch yet', 'i have to go to the post office', 'i like italian food', 'i live in california', 'i will talk to you soon', 'i made a mistake', 'i am bored', 'i am going to america next year', 'i am going to go have dinner', 'i am tired', 'i am very well, thank you', 
'i need another key', 'i need this to get there by tomorrow', 'i need to go now', 'is it supposed to rain tomorrow?', 'is john there please?', 'is this a safe area?', 'is this mr smith?', 'is this the bus to new york?', 'is this your book?', 'i still have to brush my teeth and take a shower', 'is your father home?', 'i think so', 'i think those shoes are very good looking', 'it is very windy', 'it takes 2 hours by car', 'i have never done that', 'i have worked there for five years', 'i want to buy something', 'i want to contact our embassy', 'i want to send this package to the united states', 'i want to show you something', 'i went to the supermarket, and then to the computer store', 'my car is not working', 'nobody is helping us', 'nobody is there right now', 'one like that', 'open the door', 'open the window', 'pick up your clothes', 'please', 'please count this for me', 'please tell her john called', 'please tell me', 'please wait for me', 'she is going with me tomorrow', 'some books', 'someone does that for me', 'someone is coming', 'sorry, i do not have a pencil', 'start the car', 'take me downtown', 'tell him that i need to talk to him', 'that car over there is mine', 'that looks old', 'that is a good school', 'that is her book', 'that is not enough', 'the car is fixed', 'these books are ours', 'the tv is broken', 
'they have not met her yet', 'they are planning to come next year', 'they are waiting for us', 'this room is a mess', 'those men are speaking english', 'what color is that car?', 'what do you think of these shoes?', 'when would you like to meet?', 'where does your wife work?', 'where is main street?', 'where is my shirt?', 'where is the bus station?', 'which road should i take?', 'you are right', 'your house is very nice' ];
var curSentence;
var curIndex = 0;
var correct = 0;
var replays = 0;

const startElm = document.getElementById('start');
const levelElm = document.getElementById('level');
const morseindicator = document.getElementById('morseindicator');
const wordElm = document.getElementById('word');
const heartsElm = document.getElementById('hearts');
const stats = document.getElementById('stats');

wordElm.innerHTML = '&nbsp;';

const maxLives = settingsStorage['lives'];
var lives = maxLives;
const heartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const emptyHeartSvg = '<svg class="heart" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
for(var i = 0; i < lives; i++)
    heartsElm.innerHTML += heartSvg;

const tickSvg = '<svg fill="currentColor" width="20px" height="20px" style="border-radius: 0;" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM7.584 16q0-0.832 0.608-1.408t1.408-0.576 1.408 0.576l2.848 2.816 7.072-7.040q0.576-0.608 1.408-0.608t1.408 0.608 0.608 1.408-0.608 1.408l-8.48 8.48q-0.576 0.608-1.408 0.608t-1.408-0.608l-4.256-4.256q-0.608-0.576-0.608-1.408z"></path></svg>';
const replaySvg = '<svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.00001 4C3.34315 4 2.00001 5.34314 2.00001 7L2 17C2 18.6569 3.34315 20 5 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H5C4.44771 18 4 17.5523 4 17V7C4 6.44772 4.44771 6 5 6L19 6C19.5523 6 20 6.44772 20 7L20 17C20 17.5523 19.5523 18 19 18H14.0027L15.2821 16.7161C15.6734 16.3235 15.6734 15.687 15.2821 15.2944C14.8909 14.9019 14.2566 14.9019 13.8654 15.2944L11.5937 17.574L11.5805 17.5873C10.804 18.3724 10.8057 19.6406 11.5859 20.4234L13.8604 22.7058C14.2513 23.0981 14.8852 23.0981 15.2762 22.7058C15.6672 22.3134 15.6672 21.6773 15.2762 21.285L13.9956 20H19C20.6569 20 22 18.6569 22 17L22 7C22 5.34315 20.6569 4 19 4L5.00001 4Z" fill="currentColor"/></svg>';

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
        startElm.style.color = '';
        startElm.value = 'play';
        return;
    }
    startElm.value = 'stop';
    startElm.style.color = 'cyan';
    let text = '';
    for(var i = 0; i < curSentence.length; i++)
        text += letterlibrary[curSentence[i]] + " ";
    for(var i = 0; i < text.length; i++)
    {
        if(startElm.value == 'play' || curSentence == undefined)
            break;
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
    startElm.style.color = '';
    startElm.value = 'play';
};

function back(){
    window.location.href = '/receiving/';
}

function start(){
    if(lives == 0)
    {
        if(startElm.innerHTML != "Try Again")
        {
            for(var i = 0; i < ltrElm.length; i++)
            {
                ltrElm[i].style.pointerEvents = 'none';
                ltrElm[i].style.touchAction = 'none';
                ltrElm[i].style.opacity = '0.25';
            }
            startElm.innerHTML = 'Try Again';
            startElm.style.color = '';
            wordElm.textContent = curSentence;
            wordElm.style.color = 'red';
            curSentence = undefined;
            return;
        }
    }
    if(curSentence == undefined)
    {
        for(var i = 0; i < ltrElm.length; i++)
        {
            ltrElm[i].style.pointerEvents = 'all';
            ltrElm[i].style.touchAction = 'manipulation';
            ltrElm[i].style.opacity = 1;
        }
        if(lives == 0)
        {
            lives = maxLives;
            correct = 0;
            replays = 0;
            heartsElm.innerHTML = '';
            for(var i = 0; i < lives; i++)
                heartsElm.innerHTML += heartSvg;
            stats.innerHTML = tickSvg + ' ' + correct + '<br>' + replaySvg + ' ' + replays;
        }
        curSentence = sentences[getRandomInt(sentences.length)];
        curSentence = curSentence.toUpperCase();
        curIndex = 0;
        wordElm.style.color = 'cyan';
        wordElm.innerHTML = '&nbsp;';
        startElm.innerHTML = '<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00001 4C3.34315 4 2.00001 5.34314 2.00001 7L2 17C2 18.6569 3.34315 20 5 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H5C4.44771 18 4 17.5523 4 17V7C4 6.44772 4.44771 6 5 6L19 6C19.5523 6 20 6.44772 20 7L20 17C20 17.5523 19.5523 18 19 18H14.0027L15.2821 16.7161C15.6734 16.3235 15.6734 15.687 15.2821 15.2944C14.8909 14.9019 14.2566 14.9019 13.8654 15.2944L11.5937 17.574L11.5805 17.5873C10.804 18.3724 10.8057 19.6406 11.5859 20.4234L13.8604 22.7058C14.2513 23.0981 14.8852 23.0981 15.2762 22.7058C15.6672 22.3134 15.6672 21.6773 15.2762 21.285L13.9956 20H19C20.6569 20 22 18.6569 22 17L22 7C22 5.34315 20.6569 4 19 4L5.00001 4Z" fill="currentColor"/></svg>';
        onPlay();
        return;
    }
    if(startElm.value == 'play')
        replays += 1;
    stats.innerHTML = tickSvg + ' ' + correct + '<br>' + replaySvg + ' ' + replays;
    onPlay();
}

function letterclicked(ltr)
{
    let elm = document.getElementById(ltr);
    if(ltr == curSentence[curIndex])
    {
        if(wordElm.innerHTML == '&nbsp;')
            wordElm.innerHTML = '';
        wordElm.textContent += ltr;
        curIndex += 1;
        if(curSentence[curIndex] == ' ')
        {
            wordElm.textContent += ' ';
            curIndex += 1;
        }
        elm.style.animation = 'none';
        elm.offsetHeight;
        elm.style.animation = null;
        elm.style.animation = 'vertical-shaking 0.7s';
        if(curSentence.length == curIndex)
        {
            startElm.innerHTML = 'Next';
            for(var i = 0; i < ltrElm.length; i++)
            {
                ltrElm[i].style.pointerEvents = 'none';
                ltrElm[i].style.touchAction = 'none';
                ltrElm[i].style.opacity = 0.25;
            }
            correct += 1;
            stats.innerHTML = tickSvg + ' ' + correct + '<br>' + replaySvg + ' ' + replays;
            curSentence = undefined;
        }
    }
    else
    {
        elm.style.animation = 'none';
        elm.offsetHeight;
        elm.style.animation = null;
        elm.style.animation = 'horizontal-shaking 0.7s';
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
}

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}