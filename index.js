
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hourDigits = document.querySelector('.hour-digits')
const minuteDigits = document.querySelector('.minute-digits');
const secondDigits = document.querySelector('.second-digits');
const ampm = document.querySelector('.ampm');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //secondOneDigit.innerText(seconds[1]);
    //secondTenDigit.innerText(seconds[0]);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    secondDigits.innerHTML = (seconds < 10 ? '0' : '' ) + seconds;

    const minutes = now.getMinutes();4
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    minuteDigits.innerHTML = (minutes < 10 ? '0' : '' ) + minutes;
   
    let hours = now.getHours();
    if (hours > 13) {
        hours = hours - 12;
        ampm.innerHTML = 'pm';
    } else {
        ampm.innerHTML = 'am';
    }
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    hourDigits.innerHTML = (hours < 10 ? '0' : '' ) + hours;
}

setInterval(setDate, 1000)
