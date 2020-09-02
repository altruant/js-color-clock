let isHover = false
const $clock = document.querySelector(".clock");
const $display = document.querySelector(".clock-display")
const $bar = document.querySelector(".clock-progress-bar")

$display.addEventListener("mouseenter", function() {
  isHover = true;
});

$clock.addEventListener("mouseleave", function() {
  isHover = false;
});

function currentTime() {
  const date = new Date();
  console.log(date);
  let hours = date.getHours()
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hexHours = ("0" + hours.toString(16)).slice(-2);
  let hexMinutes = ("0" + minutes.toString(16)).slice(-2);
  let hexSeconds =  ("0" + seconds.toString(16)).slice(-2);

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  console.log(`#${hexHours}:${hexMinutes}:${hexSeconds}`)

  if(isHover) {
    $display.textContent = `#${hexHours}:${hexMinutes}:${hexSeconds}`;
  } else {
    $display.textContent = `${hours}:${minutes}:${seconds}`;
  }


  // progress bar width
  const percentSeconds = date.getSeconds() / 60;
  console.log(percentSeconds)
  let bar = document.querySelector("div.clock-progress-bar");
  bar.style.width = (percentSeconds * 14) + "rem";
  $clock.style.background = `#${hexHours}${hexMinutes}${hexSeconds}`;
} setInterval(currentTime, 1000);
