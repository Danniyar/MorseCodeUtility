if(localStorage.hasOwnProperty("morseCodeSettings"))
{
    var settingsStorage = JSON.parse(localStorage.morseCodeSettings);
}
else
    var settingsStorage = {'lives': 3, 'dotLength': 100, 'reviewTime': 1500, 'timePressure': 3, 'showProgress': true};