let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let AMorPM = hours >= 12 ? 'PM' : 'AM';


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("AMorPM").innerHTML = AMorPM

    setTimeout(digitalClock, 500); 

}

digitalClock(); 
