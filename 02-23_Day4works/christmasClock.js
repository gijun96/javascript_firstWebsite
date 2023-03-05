// Christmas D-day 구하기
const time = document.querySelector("#ChristmasClock h2");

function Clock(){
    const christmas = new Date("2023-12-25");
    const today = new Date();
    const diff = christmas - today;

    const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2,0);
    const diffHour = String(Math.floor(diff / (1000 * 60 * 60)%24)).padStart(2,0); 
    const diffMinutes = String(Math.floor(diff/ (1000 * 60) % 60)).padStart(2,0);
    const diffSeconds = String(Math.floor(diff / 1000 % 60)).padStart(2,0);

    const TimeUntilChristmasEve =`${diffDay}d${diffHour}h${diffMinutes}m${diffSeconds}s`;
    time.innerText = TimeUntilChristmasEve;

    
    // console.log(diff);
}

Clock();
setInterval(Clock, 100);