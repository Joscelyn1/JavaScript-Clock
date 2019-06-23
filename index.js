
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hourTenDigit = document.querySelector('hour-ten-digit');
const hourOneDigit = document.querySelector('hour-one-digit');
const minuteTenDigit = document.querySelector('minute-ten-digit');
const minuteOneDigit = document.querySelector('minute-one-digit');
const secondTenDigit = document.querySelector('second-ten-digit');
const secondOneDigit = document.querySelector('second-one-digit');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
    //secondOneDigit.innerText(seconds[1]);
    //secondTenDigit.innerText(seconds[0]);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)
