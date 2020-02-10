// create cards
// distribute the cards
// play 
//check win 
let player1Wins = document.getElementById('1wins')
let player2Wins = document.getElementById('2wins')
let tryAgain = document.getElementById('tryAgain')
let button1 = document.getElementById('CompareBHP');
let button2 = document.getElementById('CompareTopSpeed');
let button3 = document.getElementById('p1CompareTopSpeed');
let button4 = document.getElementById('p2CompareTopSpeed');
let user1Cards = [];
let user2Cards = [];

player1Wins.style.display = "none"
player2Wins.style.display = "none"
tryAgain.style.display = "none"
startUpImg.style.visibility = "visible"



const player1Card = document.getElementById("player1Card");
const player2Card = document.getElementById("player2Card");
player1Card.style.display = "none"
player2Card.style.display = "none"

class Card{
    constructor(name, BHP, topSpeed, image){
        this.name = name;
        this.BHP = BHP;
        this.topSpeed = topSpeed;
        this.image = image;
    }
    
    name() {
        return this.name
    }
    
    BHP () {
        return this.BHP
    }
    
    topSpeed () {
        return this.topSpeed
    }
    image () {
        return this.image
    }
}


let fullDeck = [
    NSX = new Card ("NSX", 573, 191, "img/nsx.JPG"), 
    R8 = new Card ("R8", 532, 200, "img/r8.JPG"),
    I8 = new Card ("I8", 357, 155, "img/i8.JPG"),
    huracan = new Card ("Huracan", 572, 199, "img/lambo.JPG"),
    amgGt = new Card ("AMG GT", 577, 198, "img/amggt.JPG"),
    db11 = new Card ("DB11", 503, 187, "img/db11.JPG"),
    m2 = new Card ("M2", 365, 155, "img/m2.JPG"),
    urus = new Card ("URUS", 641, 190, "img/urus.JPG"),
    gt2rs = new Card ("GT2 RS", 493, 193, "img/gt2rs.JPG"),
    gtr = new Card ("GTR", 592, 196, "img/gtr.JPG"),
    gt3rs = new Card ("GT3 RS", 444, 187, "img/gt3rs.JPG"),
    m4 = new Card ("M4", 454, 174, "img/m4.JPG"),
    m3 = new Card ("M3", 425, 155, "img/m3.JPG"),
    bmw1m = new Card ("BMW M1", 335, 155, "img/1m.JPG"),
    c63s = new Card ("C63s", 503, 174, "img/c63s.JPG"),
    typeR = new Card ("TypeR", 710, 212, "img/typer.JPG"),
    quadrifoglio = new Card ("Quadrifoglio", 900, 300, "img/alfa.JPG"),
    i30N = new Card ("i30N", 275, 155, "img/i30n.JPG"),
    focusRS = new Card ("Focus RS", 345, 167, "img/focusrs.JPG"),
    RS6 = new Card ("RS6", 552, 174, "img/rs6.JPG"),
]


function distributeCards(fullDeck) { //using a recursion function (function will run until it reaches a return that doesnt return a call to itself)
    let randomNumber = Math.floor(Math.random() * fullDeck.length)
    // console.log(randomNumber);
    
    if (fullDeck.length == 0) {
        return
        
    } else if (fullDeck.length % 2 == 0) {
        user1Cards.push(fullDeck[randomNumber])
    } else {
        user2Cards.push(fullDeck[randomNumber])
    }
    fullDeck.splice(randomNumber, 1)
    // console.log(cards.length)
    return distributeCards(fullDeck)
}

// player1Card.src =
// player2Card.src = 

const cardCheck = () => {
    if(user1Cards[0].BHP > user2Cards[0].BHP){
        holdingPile = user2Cards.shift();
        tempDeck = user1Cards.shift();
        user1Cards.push(holdingPile);
        user1Cards.push(tempDeck);
        console.log(`User 1 has: ${user1Cards.length}`);
        console.log(`User 2 has: ${user2Cards.length}`);
    }
    else if (user1Cards[0].BHP < user2Cards[0].BHP){
        holdingPile = user1Cards.shift();
        tempDeck = user2Cards.shift();
        user2Cards.push(holdingPile);
        user2Cards.push(tempDeck);
        console.log(`User 1 has: ${user1Cards.length}`);
        console.log(`User 2 has: ${user2Cards.length}`);
    }
    // ===
}
    const speedCheck = () => {
    if(user1Cards[0].topSpeed < user2Cards[0].topSpeed){
        holdingPile = user1Cards.shift();
        tempDeck = user2Cards.shift();
        user1Cards.push(holdingPile);
        user1Cards.push(tempDeck);
        console.log(`User 1 has: ${user1Cards.length}`);
        console.log(`User 2 has: ${user2Cards.length}`);
    }
    else if (user1Cards[0].topSpeed > user2Cards[0].topSpeed){
        holdingPile = user2Cards.shift();
        tempDeck = user1Cards.shift();
        user2Cards.push(holdingPile);
        user2Cards.push(tempDeck);
        console.log(`User 1 has: ${user1Cards.length}`);
        console.log(`User 2 has: ${user2Cards.length}`);
    }
}
    
    

const Result = () => {
    if(user1Cards.length == 20){
        player1Wins.style.display = "block"
        player1Wins.textContent = "Player 1 Wins"
    }
    else if (user2Cards.length == 20){
        player2Wins.style.display = "block"
        player2Wins.textContent = "Player 2 Wins"
    }
}

button1.addEventListener("click", () => {
    distributeCards(fullDeck);
    player1Card.src = user1Cards[0].image
    player2Card.src = user2Cards[0].image
    cardCheck();
    console.log(`the user has chosen BHP`)
    Result();
    startUpImg.style.display = "none"
    player1Card.style.display = "block"
    player2Card.style.display = "block"

})
button2.addEventListener("click", () => {
    distributeCards(fullDeck);
    player1Card.src = user1Cards[0].image
    player2Card.src = user2Cards[0].image
    speedCheck();
    console.log(`the user has chosen top speed`)
    Result();
    startUpImg.style.display = "none"
    player1Card.style.display = "block"
    player2Card.style.display = "block"
})
