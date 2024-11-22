function updateTime() {
    const timeElement = document.getElementById('time');
    timeElement.textContent = new Date().toLocaleTimeString();
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  