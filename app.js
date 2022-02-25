const daysOfWeekMap = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THUR',
    5: 'FRI',
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166 },
    sunny: { width: 208, height: 213 },
    stormy: { width: 246, height: 187 },
    snowy: { width: 230, height: 196 },
    'partly-cloudy': { width: 230, height: 209 },
    rainy: { width: 160, height: 222 },
}

const today = new Date();
const day = today.getDay();
const date = today.getDate();
const year = today.getFullYear();
const month = today.getMonth();
let weekDay = daysOfWeekMap[day];

let days = document.querySelectorAll('.day-of-week')[0];
let weather = document.getElementsByClassName('.weather');
let temperature = document.getElementsByClassName('.temperature');
for (let key in daysOfWeekMap) {
    // console.log(daysOfWeekMap[key]);
    // days.innerHTML = value;

}
let a = Array.from(document.querySelectorAll('.day-of-week'));
for (let index = 0; index < a.length; index++) {
    console.log(a[index].innerHTML=daysOfWeekMap[day]);  
}

