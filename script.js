const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let taskCounter = listContainer.getElementsByTagName("li").length;

function addTask() {
    if (inputBox.value === ''){
        alert("You should add a Task first");
    }
    else if (taskCounter >= 5) {
        alert("You can only add 5 tasks at once");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskCounter = listContainer.getElementsByTagName("li").length;
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        taskCounter = listContainer.getElementsByTagName("li").length;
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();


// <!-- Add this in your existing <script src="script.js"></script> file or at the bottom of your HTML file before </body> -->

let timerDisplay = document.getElementById("timer");
let startButton = document.querySelector(".pomoButtons button:nth-child(1)");
let stopButton = document.querySelector(".pomoButtons button:nth-child(2)");
let resetButton = document.querySelector(".pomoButtons button:nth-child(3)");

let countdown;
let timeLeft = 25 * 60; // default 25 minutes
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function start() {
    if (isRunning) return;
    isRunning = true;
    countdown = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(countdown);
        alert("Time's up! Take a break.");
      }
    }, 1000);
}

function stop() {
    isRunning = false;
    clearInterval(countdown);
}

function reset() {
    stop();
    timeLeft = 25 * 60;
    updateDisplay();
}
updateDisplay();
