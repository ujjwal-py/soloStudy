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
    localStorage.setItem("dat098", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("dat098");
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

const todo = document.querySelector('.todolist');
const pomo = document.querySelector('.pomodoro');
const musicDiv = document.querySelector('.bgmusic');
const setting = document.querySelector('.settings');
const  h2Elements = document.querySelectorAll('h2');
const h3Elements = document.querySelectorAll('h3');
const tasksLists  = document.getElementById('list-container');
let timerColor = document.getElementById('timer');


const gradient1 = `linear-gradient(to top, hsla(219, 34%, 56%, 0.8) 0%, hsla(218, 38%, 80%, 0.8) 100%)`
const gradient2 = `linear-gradient(to right, hsla(217, 19%, 27%, 0.8), hsla(221, 39%, 11%, 0.8), hsl(0, 0%, 0%, 0.8))`
const gradient3 = `linear-gradient(180deg,hsla(64, 83%, 62%, 0.8), hsla(183, 59%, 23%, 0.8))`


function changeTheme1() {
    document.body.style.backgroundImage = `url("images/default-bg.jpg")`
    
    h2Elements.forEach(e => {
        e.style.color = 'black';
    });
    h3Elements.forEach(e => {
        e.style.color = 'black';
    });
    timerColor.style.color = 'black';
    todo.style.backgroundImage = gradient1
    pomo.style.backgroundImage = gradient1
    musicDiv.style.backgroundImage = gradient1
    setting.style.backgroundImage = gradient1

    tasksLists.style.color = "black";
}
function changeTheme2() {
    document.body.style.backgroundImage = `url("images/dark-bg.jpg")`
    h2Elements.forEach(e => {
        e.style.color = 'white';
    });
    h3Elements.forEach(e => {
        e.style.color = 'white';
    });
    tasksLists.style.color = "white";

    
    timerColor.style.color = 'white';
    todo.style.backgroundImage = gradient2;
    pomo.style.backgroundImage = gradient2;
    musicDiv.style.backgroundImage = gradient2;
    setting.style.backgroundImage = gradient2;
}

function changeTheme3() {
    document.body.style.backgroundImage = `url("images/ghibli.png")`
    todo.style.backgroundImage = gradient3;
    pomo.style.backgroundImage = gradient3;
    musicDiv.style.backgroundImage = gradient3;
    setting.style.backgroundImage = gradient3;
    h2Elements.forEach(e => {
        e.style.color = 'black';
    });
    h3Elements.forEach(e => {
        e.style.color = 'black';
    });
    timerColor.style.color = 'black';
    tasksLists.style.color = "black";
}
function changeMusic1() {
    let music = document.getElementById('player');
    music.innerHTML = '<iframe id = "musicframe" width="max-content" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=zAM1dqNBLOGRk26v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

function changeMusic2() {
    let music = document.getElementById('player');
    music.innerHTML = '<iframe id = "musicframe" width="max-content" height="315" src="https://www.youtube.com/embed/CfPxlb8-ZQ0?si=VSu6KPLqmqRHzhJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
function changeMusic3() {
    let music = document.getElementById('player');
    music.innerHTML = '<iframe id = "musicframe" width="max-content" height="315" src="https://www.youtube.com/embed/DfSkKYQiwoU?si=ICMt7pqWneEfFoc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}