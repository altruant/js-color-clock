function currentTime() {
  // creating a date constant to reference
  const date = new Date();
  // hours, minutes, seconds initialized to a function of date
  let h = date.getHours()
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = (h == 0) ? h = 12 : h - 12;
  h = (h < 0) ? "0" + h: h;
  m = (m < 0) ? "0" + m: m;
  s = (s < 0) ? "0" + s: s;

  const time = h + ":" + m + ":" + s

  document.getElementByClassName("clock").innerText = time;

  setInterval(currentTime, 1000);
}
currentTime();
