const cards = document.querySelectorAll(".card");
const turnedCards = document.querySelectorAll(".card-opposite");
let possibilities;
let counter = 0;
let found = 0;
let lost = 0;


window.onload = function(){
    setTimeout(function(){ turnCards(turnedCards)}, 2000)
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
}

function checkContent(){
    let turned = document.querySelectorAll(".card-opposite");
    if (turned[0].firstChild.data == turned[1].firstChild.data){
        found++
        return true;
    }
    lost++
}

function removeCards(cards){
    cards.forEach(card => {
        card.className = "card-opposite-right";
    })
    if (checkWin()){
        alert("You won!");
    }
}

function showCards(cards){
    cards.forEach(card => {
        card.className = "card-opposite";
    })
}

function turnCards(cards){
    cards.forEach(card => {
        card.className = "card";
    })
}

function checkWin(){
    const rightCards = document.querySelectorAll(".card-opposite-right");
    return rightCards.length == 12
}

function reset(){
    possibilities = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];
    const rightCards = document.querySelectorAll(".card-opposite-right");
    rightCards.forEach(card => {
        card.className = "card";
    })
    // werkt nog niet helemaal GOTTA FIGURE THIS OUT
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const data = possibilities[Math.floor(Math.random() * possibilities.length)];
        card.firstChild.data = possibilities[Math.floor(Math.random() * possibilities.length)];
        possibilities.splice(possibilities.indexOf(data), 1);
        console.log(possibilities);
    })
}