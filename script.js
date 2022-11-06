let clock = () => {
    let date = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)); //set time in Tokyo
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    //the clock style 24hours → 12hours
    let period = "AM";
    if(hrs == 0){
        hrs = 12;
    }
    if(hrs > 12){
        hrs = hrs - 12;
        period = "PM";
    }

    //showing "0" if it's single digit 
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
    let time = `${hrs} : ${mins} : ${secs} ${period}`;

    //showing to the browser
    document.getElementById("clock").innerText = time;

    //working clock per second 
    setTimeout(clock, 1000);
    //console.log(time);
}
clock();