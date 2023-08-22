let counterValue = parseInt(sessionStorage.getItem("myTimer")) || 0;

window.onload = () => {};

setInterval(myTimer, 1000);

function myTimer() {
  counterValue += 1;
  console.log(counterValue);

  sessionStorage.setItem("myTimer", counterValue);
  const p = document.getElementById("timer");
  p.innerText = `${counterValue}`;
}
