let one = document.querySelector(".card-opposite:nth-child(3)");
let two = document.querySelector(".card-opposite:nth-child(11)");

console.log(one == two);



const cards = document.querySelectorAll(".card");
let counter = 0;

cards.forEach(card => {
    card.onclick = turnCard(card);
})

function turnCard(card){
    card.className = "card-opposite";
    counter++
    if(counter == 2){
        if (checkContent()){
            let turned = document.querySelectorAll(".card-opposite");
            turned.forEach(card => {
                card.className = "card-opposite-right";
            })
        }
        else{
            let turned = document.querySelectorAll(".card-opposite");
            turned.forEach(card => {
                card.className = "card";
            })
        }
        counter = 0;
    }
}

function checkContent(){
    let turned = document.querySelectorAll(".card-opposite");
    if (turned[0].firstChild.data == turned[1].firstChild.data){
        return true;
    }
}