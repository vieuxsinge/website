
CountDownTimer('05/15/2018 10:1 AM', 'countdown');

function httpGetAsync(url, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function CountDownTimer(date, id)
{
    var end = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining(liters) {
        // Update the progressbar.
        var progressElement = document.getElementById('progress');
        var volumeElement = document.getElementById('current-volume');
        var percentageElement = document.getElementById('current-percentage');

        percentage = (liters / 2000) * 100;
        var percentageText = percentage + '%';
        progressElement.style.width = percentageText;
        percentageElement.innerHTML = percentageText;
        volumeElement.innerHTML = liters + ' litres';

        // Handle the date update.
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            countdown.innerHTML = '0';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        countdown.innerHTML = days /*+ ' days'*/;
        //document.getElementById(id).innerHTML += hours + 'hrs ';
        //document.getElementById(id).innerHTML += minutes + 'mins ';
        //document.getElementById(id).innerHTML += seconds + 'secs';
    }

    var timer;
    var countdown = document.getElementById(id);
    if (countdown) {
      httpGetAsync('https://kinto.notmyidea.org/v1/buckets/vieuxsinge/collections/preventes/records/7818e391-47bc-4e53-bb92-6cf57da612b9', function(data) {
        showRemaining(JSON.parse(data)['data']['liters']);
      });
    }
}
