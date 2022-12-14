const cards = document.querySelectorAll(".card");
const turnedCards = document.querySelectorAll(".card-opposite");
const possibilities = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];
let counter = 0;
let found = 0;
let missed = 0;


window.onload = function(){
    //randomizeColors();
}


function play(){
    let allCards = getAllCards();
    showCards(allCards);
    setTimeout(function(){ turnCards(allCards)}, 1500);
}


function turnCard(card){
    card.className = "card-opposite";
    counter++
    if(counter == 2){
        if (checkContent()){
            const turned = document.querySelectorAll(".card-opposite");
            setTimeout(function(){ removeCards(turned)}, 1500);
        }

        else{
            const turned = document.querySelectorAll(".card-opposite");
            setTimeout(function(){ turnCards(turned)}, 1500);
        }
        counter = 0;
    }
    updateFoundMissed();
}

function checkContent(){
    let turned = document.querySelectorAll(".card-opposite");
    if (turned[0].firstChild.data == turned[1].firstChild.data){
        found++
        return true;
    }
    missed++
}

function turnCards(cards){
    cards.forEach(card => {
        card.className = "card";
    })
}

function showCards(cards){
    cards.forEach(card => {
        card.className = "card-opposite";
    })
}

function removeCards(cards){
    cards.forEach(card => {
        card.className = "card-opposite-right";
    })
    checkAlertWin();
}

function checkAlertWin(){
    const rightCards = document.querySelectorAll(".card-opposite-right");
    if (rightCards.length == 12){
        alert("You win!");
    }
}

function updateFoundMissed(){
    document.querySelector(".found").textContent = "Found: " + found;
    document.querySelector(".missed").textContent = "Missed: " + missed;  
}

function getAllCards(){
    let allCards = document.querySelectorAll(".card, .card-opposite, .card-opposite-right");
    return allCards;
}

function randomizeContent(cards){
    let poss = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];
    cards.forEach(card => {
        const data = poss[Math.floor(Math.random() * poss.length)];
        card.firstChild.data = data;
        poss.splice(poss.indexOf(data), 1);
    })
}

function randomizeColors(){
    let numbers = [Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), Math.floor(Math.random() * 12)];
    numbers.forEach(child => {
        document.querySelector(".card:nth-child("+ child +")").style.backgroundColor = "rgb(148, 69, 221)";
    })

    numbers = [Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), Math.floor(Math.random() * 12)];
    numbers.forEach(child => {
        document.querySelector(".card:nth-child("+ child +")").style.backgroundColor = "rgb(66, 66, 66)";
    })
}

function reset(){
    const allCards = getAllCards();
    turnCards(allCards);

    found = 0; missed = 0;
    updateFoundMissed();

    randomizeContent(cards);
    //randomizeColors();

    showCards(allCards);
    setTimeout(function(){ turnCards(allCards)}, 1500);
}