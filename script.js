const time = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const session = document.getElementById("session");

  if (hour <= 12) {
    session.innerHTML = "AM";
  } else {
    session.innerHTML = "PM";
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
};
setInterval(time, 10);
