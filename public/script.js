function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function updateClock() {
  const now = new Date();
  document.getElementById('time').textContent = "Time: " + now.toLocaleTimeString();
  const sec = now.getSeconds();

  if (sec === 35) {
    // Generate preview number
    window.currentNumber = getRandomInt();
    document.getElementById('preview').textContent = "Preview: " + window.currentNumber;
  }

  if (sec === 0) {
    if (window.currentNumber === undefined) {
      window.currentNumber = getRandomInt();
    }
    document.getElementById('final').textContent = "Final: " + window.currentNumber;

    // Update history
    if (!window.historyArr) window.historyArr = [];
    window.historyArr.unshift(window.currentNumber);
    if (window.historyArr.length > 10) window.historyArr.pop();
    document.getElementById('history').textContent = "History: " + window.historyArr.join(", ");

    // Clear preview for next round
    document.getElementById('preview').textContent = "";
    window.currentNumber = undefined;
  }
}

setInterval(updateClock, 1000);
updateClock();
