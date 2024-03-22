const morselibrary = { ".-": 'A', "-...": 'B', "-.-.": 'C', "-..": 'D', ".": 'E', "..-.": 'F', "--.": 'G', "....": 'H', "..": 'I', ".---": 'J', "-.-": 'K', ".-..": 'L', "--": 'M', "-.": 'N', "---": 'O', ".--.": 'P', "--.-": 'Q', ".-.": 'R', "...": 'S', "-": 'T', "..-": 'U', "...-": 'V', ".--": 'W', "-..-": 'X', "-.--": 'Y', "--..": 'Z', ".----": '1', "..---": '2', "...--": '3', "....-": '4', ".....": '5', "-....": '6', "--...": '7', "---..": '8', "----.": '9', "-----": '0', "..--..": '?', "-.-.--": '!', ".-.-.-": '.', "--..--": ',', "-.-.-.": ';', "---...": ':', ".-.-.": '+', "-....-": '-', "-..-.": '/', "-...-": '=' };
const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));
const letterlibrary = f(morselibrary);

var ltrElm = document.getElementsByClassName('letter');
var ltrsWrapper = document.getElementById('letterswrapper');
var words = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'ask', 'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'eat', 'economic', 'economy', 'edge', 
'education', 'effect', 'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'herself', 'high', 'him', 'himself', 'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how', 'however', 'huge', 'human', 'hundred', 'husband', 'idea', 'identify', 'image', 'imagine', 'impact', 'important', 'improve', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment', 'involve', 'issue', 'item', 'its', 'itself', 'job', 'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love', 'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 'matter', 'may', 
'maybe', 'mean', 'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie', 'Mrs', 'much', 'music', 'must', 'myself', 'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night', 'none', 'nor', 'north', 'not', 'note', 'nothing', 'notice', 'now', 'number', 'occur', 'off', 'offer', 'office', 'officer', 'official', 'often', 'oil', 'old', 'once', 'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'order', 'organization', 'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant', 'play', 'player', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 
'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television', 'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their', 'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw', 'thus', 'time', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'try', 'turn', 'two', 'type', 'under', 'understand', 'unit', 'until', 'upon', 'use', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your' ];
var curWord;
var curIndex = 0;
var correct = 0;
var replays = 0;

const startElm = document.getElementById('start');
const levelElm = document.getElementById('level');
const morseindicator = document.getElementById('morseindicator');
const wordElm = document.getElementById('word');
const heartsElm = document.getElementById('hearts');
const stats = document.getElementById('stats');

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
    for(var i = 0; i < curWord.length; i++)
        text += letterlibrary[curWord[i]] + " ";
    for(var i = 0; i < text.length; i++)
    {
        if(startElm.value == 'play' || curWord == undefined)
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
            wordElm.textContent = curWord;
            wordElm.style.color = 'red';
            curWord = undefined;
            return;
        }
    }
    if(curWord == undefined)
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
        curWord = words[getRandomInt(words.length)];
        curWord = curWord.toUpperCase();
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
    if(ltr == curWord[curIndex])
    {
        if(wordElm.innerHTML == '&nbsp;')
            wordElm.innerHTML = '';
        wordElm.textContent += ltr;
        curIndex += 1;
        elm.style.animation = 'none';
        elm.offsetHeight;
        elm.style.animation = null;
        elm.style.animation = 'vertical-shaking 0.7s';
        if(curWord.length == curIndex)
        {
            startElm.innerHTML = 'Next';
            startElm.style.color = '';
            for(var i = 0; i < ltrElm.length; i++)
            {
                ltrElm[i].style.pointerEvents = 'none';
                ltrElm[i].style.touchAction = 'none';
                ltrElm[i].style.opacity = 0.25;
            }
            correct += 1;
            stats.innerHTML = tickSvg + ' ' + correct + '<br>' + replaySvg + ' ' + replays;
            curWord = undefined;
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