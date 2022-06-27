let a;
let date;
let time;
setInterval(() => {
a = new Date();
// date = a.toLocaleDateString();
// document.getElementById('date').innerHTML = date
// time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
// document.getElementById('time').innerHTML = time;
var utcTime = a.getTime() + (a.getTimezoneOffset() * 60000);
var timeOffset = 5.5;
var IndianTime = new Date(utcTime + (3600000 * timeOffset));
document.getElementById('time').innerHTML = IndianTime;
}, 1000);