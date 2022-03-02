var hh = document.getElementById('#hh');
var mm = document.getElementById('#mm');
var ss = document.getElementById('#ss');

var hh = 00;
var mm = 00;
var ss = 00;


var tempo = 1000;
var cron;
var estado = 0
function velocity(){
    var ms = document.querySelector('#btn-ms');
    if(ms.innerHTML == 'MS'){
        ms.innerHTML = 'SG';
        tempo = 17,8;
        return;
    }else if(ms.innerHTML == 'SG'){
        ms.innerHTML = 'MS';
        tempo = 1000;
    }
}

function start() {
    
    if(estado == 1){
        return;
    }
    cron = setInterval(() => { timer(); }, tempo);
    estado++

    var pause = document.querySelector('#pause');
    pause.classList.add('pauseStart');
    pause.classList.remove('pauseStop');

    var stop = document.querySelector('#stop');
    stop.classList.add('stopStart');
    stop.classList.remove('stopStop');
}

function pause() {
    clearInterval(cron);
    estado = 0
    return;
}

function stop() {
    clearInterval(cron);
    hh = 00;
    mm = 00;
    ss = 00;
    document.getElementById('contador').innerHTML = ('00:00:00');
    estado = 0

    var pause = document.querySelector('#pause');
    pause.classList.add('pauseStop');
    pause.classList.remove('pauseStart');

    var stop = document.querySelector('#stop');
    stop.classList.add('stopStop');
    stop.classList.remove('stopStart');
    return;
}

function timer(){
        ss++;
        if(ss == 60){
            ss = 0;
            mm++;
            if(mm == 60){
                mm = 0;
                hh++;
            }
        }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('contador').innerText = format;
}