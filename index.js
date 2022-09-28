let homeScoreBoard = 0
let guestScoreBoard = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function add1Home(){

        homeScoreBoard++
        homeScore.textContent = homeScoreBoard
}

function add2Home(){
    homeScoreBoard += 2
    homeScore.textContent = homeScoreBoard
}

function add3Home(){
    homeScoreBoard +=3
    homeScore.textContent = homeScoreBoard
}
function add1Guest(){
    guestScoreBoard++
    guestScore.textContent = guestScoreBoard
}

function add2Guest(){
    guestScoreBoard += 2
    guestScore.textContent = guestScoreBoard
}

function add3Guest(){
    guestScoreBoard +=3
    guestScore.textContent = guestScoreBoard
}

function reset(){
    homeScoreBoard = 0
    homeScore.textContent = homeScoreBoard
    guestScoreBoard = 0
    guestScore.textContent = homeScoreBoard
}