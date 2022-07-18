
let scoreA = 0
let scoreB = 0

function upScoreA() {
    scoreA += 1
    console.log(scoreA);
    let displayScoreA = document.getElementById("currentScoreA")
    displayScoreA.innerText = scoreA
    console.log(displayScoreA);
}

function upScoreA3() {
    scoreA += 3
    console.log(scoreA);
    let displayScoreA = document.getElementById("currentScoreA")
    displayScoreA.innerText = scoreA
    console.log(displayScoreA);
}

function upScoreB() {
    scoreB += 1
    console.log(scoreA);
    let displayScoreB = document.getElementById("currentScoreB")
    displayScoreB.innerText = scoreB
    console.log(displayScoreB);
}

function upScoreB3() {
    scoreB += 3
    console.log(scoreA);
    let displayScoreB = document.getElementById("currentScoreB")
    displayScoreB.innerText = scoreB
    console.log(displayScoreB);
}

function clearScoreA() {
    scoreA = 0
    let displayScoreA = document.getElementById("currentScoreA")
    displayScoreA.innerText = scoreA
}

function clearScoreB() {
    scoreB = 0
    let displayScoreB = document.getElementById("currentScoreB")
    displayScoreB.innerText = scoreB
}