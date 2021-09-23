






let sts;

function getData(){
fetch('https://api.thingspeak.com/channels/1391597/feeds.json?results=2').then((data)=>{
console.log(data);
return data.json();
}).then((completedata)=>{
console.log(completedata.feeds[1].field1);
console.log(completedata.feeds[1].entry_id);
document.getElementById('temp').innerHTML=completedata.feeds[1].field1;
document.getElementById('count').innerHTML=completedata.feeds[1].entry_id;
sts = completedata.feeds[1].field1;

})
setTimeout(()=>getData(),1000);
}
getData();







if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(cb) {
        var i = 0, s = this.length;
        for (; i < s; i++) {
            cb && cb(this[i], i, this);
        }
    }
}

document.fonts && document.fonts.forEach(function(font) {
    font.loaded.then(function() {
        if (font.family.match(/Led/)) {
            document.gauges.forEach(function(gauge) {
                gauge.update();
                gauge.options.renderTo.style.visibility = 'visible';
            });
        }
    });
});

var timers = [];

function animateGauges() {
    document.gauges.forEach(function(gauge) {
        timers.push(setInterval(function() {
            gauge.value = document.getElementById('temp').innerHTML; 
        }, gauge.animation.duration + 50));
    });
}

function resize() {
    var size = parseFloat(document.getElementById('gauge-size').value) || 400;

    document.gauges.forEach(function (gauge) {
        gauge.update({ width: size, height: size });
    });
}

