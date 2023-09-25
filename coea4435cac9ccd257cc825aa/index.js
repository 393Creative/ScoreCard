let guestPoints = 0
let homePoints = 0


let guestScore = document.getElementById("g-score")

let homeScore = document.getElementById("h-score")

function oneHome() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function add2h() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function add3h() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function reset1(){
    homePoints = 0
    homeScore.textContent = homePoints
    guestPoints = 0
    guestScore.textContent = guestPoints
}

function add1g() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function add2g() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function add3g() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function reset2() {
    guestPoints = 0
    guestScore.textContent = guestPoints
}