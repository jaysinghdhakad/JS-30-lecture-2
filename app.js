const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  if (seconds === 0) {
    secondHand.style.transition = `0s`;
  }
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  if (min === 0) {
    minsHand.style.transition = `0s`;
  }
  minsHand.style.transform = `rotate(${minDeg}deg)`;
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  if (hour === 0) {
    hourHand.style.transition = `0s`;
  }
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
