// Logic for Todo List

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



// Logic for Pomodoro Timer

let timerDisplay = document.getElementById("timer");
let startButton = document.querySelector(".pomoButtons button:nth-child(1)");
let stopButton = document.querySelector(".pomoButtons button:nth-child(2)");
// let resetButton = document.querySelector(".pomoButtons button:nth-child(3)");

const workTime = 25 * 60;
const breakTime = 5 * 60;
const longbreakTime = 15 * 60;


let countdown;
let timeLeft = workTime; // default 25 minutes
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

function pause() {
    isRunning = false;
    clearInterval(countdown);
}

function setWork() {
    timeLeft = workTime;
    isRunning = false;
    // timerHeding.textContent = "WORK";
    updateDisplay();
}
function setBreak() {
    timeLeft = breakTime;
    isRunning = false;
    updateDisplay();

}
function setLongbreak() {
    timeLeft = longbreakTime;
    updateDisplay();
}

updateDisplay();

// Logic for Theme and Music Change
function changeTheme1() {
    document.body.className = 'default-theme';
    let todo = document.querySelector('.todolist');
    let pomo = document.querySelector('.pomodoro');
    let headingElements = document.querySelectorAll('h2');
    headingElements.forEach(e => {
        e.style.color = 'black';
    });
    let timerColor = document.getElementById('timer');
    timerColor.style.color = 'black';
    todo.style.backgroundImage = 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)';
    pomo.style.backgroundImage = 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)';

    let tasksLists  = document.getElementById('list-container');
    tasksLists.style.color = "black";
}
function changeTheme2() {
    document.body.className = 'dark-theme';
    let todo = document.querySelector('.todolist');
    let pomo = document.querySelector('.pomodoro');
    let headingElements = document.querySelectorAll('h2');
    headingElements.forEach(e => {
        e.style.color = 'white';
    });
    let timerColor = document.getElementById('timer');
    let tasksLists  = document.getElementById('list-container');
    tasksLists.style.color = "white";

    
    timerColor.style.color = 'white';
    todo.style.backgroundImage = 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))';
    pomo.style.backgroundImage = 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))';
}

function changeTheme3() {
    document.body.className = 'ghibli-theme';
    let todo = document.querySelector('.todolist');
    let pomo = document.querySelector('.pomodoro');
    todo.style.backgroundImage = 'linear-gradient(159deg, rgba(0,128,128,1) 0%, rgba(0,153,144,1) 100%)';
    pomo.style.backgroundImage = 'linear-gradient(159deg, rgba(0,128,128,1) 0%, rgba(0,153,144,1) 100%)';
    let headingElements = document.querySelectorAll('h2');
    headingElements.forEach(e => {
        e.style.color = 'black';
    });
    let timerColor = document.getElementById('timer');
    timerColor.style.color = 'black';
    let tasksLists  = document.getElementById('list-container');
    tasksLists.style.color = "black";
}
function changeMusic1() {
    let music = document.getElementById('music');
    music.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=zAM1dqNBLOGRk26v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

function changeMusic2() {
    let music = document.getElementById('music');
    music.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/sAcj8me7wGI?si=1cpSyNgEHkByTkoL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
function changeMusic3() {
    let music = document.getElementById('music');
    music.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/DfSkKYQiwoU?si=ICMt7pqWneEfFoc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}