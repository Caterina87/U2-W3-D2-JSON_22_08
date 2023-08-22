let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

window.onload = () => {};

setInterval(myTimer, 1000);

function myTimer() {
  counterValue += 1;
  console.log(counterValue);

  sessionStorage.setItem("myTimer", counterValue);
}
