
function currentTime() {
  // creating a date constant to reference
  const date = new Date();
  // hours, minutes, seconds initialized to get the current time
  let hours = date.getHours()
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let percentSeconds = seconds/60;
  hours = (hours > 12) ? hours - 12: hours; //converting return of 13-24 hrs to standard 12hr time
  hours = (hours == 0) ? 12 : hours; //converting midnight to 12 midnight
  hours = (hours < 10 ? "0": "") + hours; //appending a 0 in front of hours less than 10
  minutes = (minutes < 10 ? "0": "") + minutes; //appending a 0 in front of minutes less than 10
  seconds = (seconds < 10 ? "0": "") + seconds; //appending a 0 in front of seconds less than 10
  time = hours + ":" + minutes + ":" + seconds; //organizing time for display
  document.querySelector("div.clock").innerHTML = time; //targeting the clock element to
  // console.log(time);

  console.log(percentSeconds)

  // random hexidecimal generator

}
currentTime();
setInterval(currentTime, 1000);
