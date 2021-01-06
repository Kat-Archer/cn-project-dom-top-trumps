//tasks: add selection for 1p or 2p, when press start appears, hide categories and select category
//poss expansion: import/export, keep player spaces same size at all times, player selects color for play field, number of games won/lost/played

const acotar /*arr  - working */ = [
    {name: "Jurian",
    image: "./images/Jurian.jpg",
    wins: 0,
    power: 5,
    good: 50,
    evil: 30,
    "inner strength": 50,
    "outer strength": 40
    },
    {name: "Demetra",
    image: "./images/Demetra.jpg",
    wins: 0,
    power: 5,
    good: 55,
    evil: 30,
    "inner strength": 40,
    "outer strength": 10
    },
    {name: "Attor",
    image: "./images/Attor.jpg",
    wins: 0,
    power: 20,
    good: 0,
    evil: 80,
    "inner strength": 0,
    "outer strength": 70
    },
    {name: "Elain",
    image: "./images/Elain.jpg",
    wins: 0,
    power: 30,
    good: 90,
    evil: 0,
    "inner strength": 70,
    "outer strength": 10
    },
    {name: "Ianthe",
    image: "./images/Ianthe.jpg",
    wins: 0,
    power: 30,
    good: 10,
    evil: 60,
    "inner strength": 10,
    "outer strength": 30
    },
    {name: "Keir",
    image: "./images/Keir.png",
    wins: 0,
    power: 30,
    good: 0,
    evil: 70,
    "inner strength": 10,
    "outer strength": 55
    },
    {name: "Tarquin",
    image: "./images/Tarquin.jpg",
    wins: 0,
    power: 75,
    good: 70,
    evil: 30,
    "inner strength": 80,
    "outer strength": 65
    },
    {name: "Alis",
    image: "./images/Alis.jpg",
    wins: 0,
    power: 30,
    good: 85,
    evil: 0,
    "inner strength": 75,
    "outer strength": 45
    },
    {name: "Suriel",
    image: "./images/Suriel.jpg",
    wins: 0,
    power: 40,
    good: 45,
    evil: 55,
    "inner strength": 30,
    "outer strength": 60
    },
    {name: "Amarantha",
    image: "./images/Amarantha.jpg",
    wins: 0,
    power: 50,
    good: 5,
    evil: 95,
    "inner strength": 20,
    "outer strength": 50
    },
    {name: "Morrigan",
    image: "./images/Mor.jpg",
    wins: 0,
    power: 60,
    good: 75,
    evil: 5,
    "inner strength": 95,
    "outer strength": 85
    },
    {name: "Azriel",
    image: "./images/Az.jpg",
    wins: 0,
    power: 65,
    good: 75,
    evil: 25,
    "inner strength": 100,
    "outer strength": 85
    },
    {name: "Beron",
    image: "./images/Beron.jpg",
    wins: 0,
    power: 65,
    good: 40,
    evil: 60,
    "inner strength": 15,
    "outer strength": 60
    },
    {name: "Cassian",
    image: "./images/Cassian.jpg",
    wins: 0,
    power: 65,
    good: 75,
    evil: 5,
    "inner strength": 60,
    "outer strength": 95
    },
    {name: "Eris",
    image: "./images/Eris.jpg",
    wins: 0,
    power: 65,
    good: 45,
    evil: 55,
    "inner strength": 45,
    "outer strength": 65
    },
    {name: "Bone Carver",
    image: "./images/Bone-Carver.jpg",
    wins: 0,
    power: 75,
    good: 40,
    evil: 60,
    "inner strength": 10,
    "outer strength": 90
    },
    {name: "Helion",
    image: "./images/Helion.jpg",
    wins: 0,
    power: 75,
    good: 70,
    evil: 15,
    "inner strength": 70,
    "outer strength": 65
    },
    {name: "Kallias",
    image: "./images/Kallias.jpg",
    wins: 0,
    power: 75,
    good: 70,
    evil: 15,
    "inner strength": 80,
    "outer strength": 65
    },
    {name: "Nester",
    image: "./images/Nester.jpg",
    wins: 0,
    power: 80,
    good: 70,
    evil: 50,
    "inner strength": 70,
    "outer strength": 45
    },
    {name: "Tamlin",
    image: "./images/Tamlin.jpg",
    wins: 0,
    power: 75,
    good: 70,
    evil: 30,
    "inner strength": 10,
    "outer strength": 75
    },
    {name: "Thesan",
    image: "./images/Thesan.jpg",
    wins: 0,
    power: 75,
    good: 70,
    evil: 15,
    "inner strength": 70,
    "outer strength": 65
    },
    {name: "Varian",
    image: "./images/Varian.jpg",
    wins: 0,
    power: 30,
    good: 70,
    evil: 30,
    "inner strength": 70,
    "outer strength": 70
    },
    {name: "Lucien",
    image: "./images/Lucien.png",
    wins: 0,
    power: 80,
    good: 70,
    evil: 15,
    "inner strength": 60,
    "outer strength": 55
    },
    {name: "Feyre",
    image: "./images/Feyre.jpg",
    wins: 0,
    power: 85,
    good: 80,
    evil: 15,
    "inner strength": 95,
    "outer strength": 60
    },
    {name: "Rhysand",
    image: "./images/Rhys.jpg",
    wins: 0,
    power: 85,
    good: 80,
    evil: 50,
    "inner strength": 75,
    "outer strength": 90
    },
    {name: "Bryaxis",
    image: "./images/Bryaxis.jpg",
    wins: 0,
    power: 90,
    good: 40,
    evil: 70,
    "inner strength": 0,
    "outer strength": 100
    },
    {name: "King of Hybern",
    image: "./images/King-of-hybern.jpg",
    wins: 0,
    power: 90,
    good: 0,
    evil: 95,
    "inner strength": 5,
    "outer strength": 50
    },
    {name: "Weaver",
    image: "./images/Weaver.jpg",
    wins: 0,
    power: 90,
    good: 0,
    evil: 100,
    "inner strength": 0,
    "outer strength": 100
    },
    {name: "Amren",
    image: "./images/Amren.jpg",
    wins: 0,
    power: 95,
    good: 50,
    evil: 50,
    "inner strength": 85,
    "outer strength": 100
    },
    {name: "The Cauldron",
    image: "./images/the-cauldron.png",
    wins: 0,
    power: 100,
    good: 50,
    evil: 50,
    "inner strength": 0,
    "outer strength": 0
    }
]


// Button creation for no CSS/HTML
// let start = document.createElement("button");
// start.textContent = "Start";
// document.body.appendChild(start);

// let power = document.createElement("button");
// power.textContent = "Power";
// document.body.appendChild(power);

// let good = document.createElement("button");
// good.textContent = "Good";
// document.body.appendChild(good);

// let evil = document.createElement("button");
// evil.textContent = "Evil";
// document.body.appendChild(evil);

// let innerStrength = document.createElement("button");
// innerStrength.textContent = "Inner Strength";
// document.body.appendChild(innerStrength);

// let outerStrength = document.createElement("button");
// outerStrength.textContent = "Outer Strength";
// document.body.appendChild(outerStrength);

//buttons
let start = document.getElementById("start");
let power = document.getElementById("power");
let good = document.getElementById("good");
let evil = document.getElementById("evil");
let innerStrength = document.getElementById("innerStrength");
let outerStrength = document.getElementById("outerStrength");

//middle
let hold = document.getElementById("hold");
let round = document.getElementById("round");
let turn = document.getElementById("turn");
let message = document.getElementById("message");
let winner = document.getElementById("winner");

//p1
let p1crem = document.getElementById("p1crem");
let p1cardimg = document.getElementById("p1cardimg");
let name1 = document.getElementById("name1");
let power1 = document.getElementById("power1");
let good1 = document.getElementById("good1");
let evil1 = document.getElementById("evil1");
let innerStrength1 = document.getElementById("innerStrength1");
let outerStrength1 = document.getElementById("outerStrength1");

//p2
let p2crem = document.getElementById("p2crem");
let p2cardimg = document.getElementById("p2cardimg");
let name2 = document.getElementById("name2");
let power2 = document.getElementById("power2");
let good2 = document.getElementById("good2");
let evil2 = document.getElementById("evil2");
let innerStrength2 = document.getElementById("innerStrength2");
let outerStrength2 = document.getElementById("outerStrength2");


let limbo = [];
// let stat = "";




const play = (deck) => {


    const shuffledArray = (deck) => { //fisher-yates algorithm for shuffling the deck - working
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    }

    shuffledArray(deck); //function call

//dealing - working
    let hand1 = [];
    let hand2 = [];
    const deal = (deck) => { //dealing the index nums
        for (let i = 0; i < 30; i++) {
            if (i % 2 === 0) {
                hand2.push(deck[i]);
            } else {
                hand1.push(deck[i]);
            }
        }
    }

    deal(deck); //function call - working
    console.log(hand1);
    console.log(hand2);

//player info - working
    console.log("The hands are dealt");
    message.textContent = "The hands are dealt";
    turn.textContent = "Press Start";
    console.log("Player 1 cards are:");
    console.log(hand1);
    console.log("Player 2 cards are:");
    console.log(hand2);

    //hand info function - working
    let update = () => {
        console.log("Player 1 card is:"); //tells player which cards are playing
        console.log(hand1[0].name);
        console.log("Player 1 Power is:");
        console.log(hand1[0].power);
        console.log("Player 1 Good is:");
        console.log(hand1[0].good);
        console.log("Player 1 Evil is:");
        console.log(hand1[0].evil);
        console.log("Player 1 Inner Strength is:");
        console.log(hand1[0]["inner strength"]);
        console.log("Player 1 Outer Strength is:");
        console.log(hand1[0]["outer strength"]);

        console.log("Player 2 card is:"); //tells player which cards are playing
        console.log(hand2[0].name);
        console.log("Player 2 Power is:");
        console.log(hand2[0].power);
        console.log("Player 2 Good is:");
        console.log(hand2[0].good);
        console.log("Player 2 Evil is:");
        console.log(hand2[0].evil);
        console.log("Player 2 Inner Strength is:");
        console.log(hand2[0]["inner strength"]);
        console.log("Player 2 Outer Strength is:");
        console.log(hand2[0]["outer strength"]);
        
        p1cardimg.src = hand1[0].image;
        name1.innerHTML = hand1[0].name;
        power1.innerHTML = `<b>Power:</b> ${hand1[0].power}`;
        good1.innerHTML =  `<b>Good:</b> ${hand1[0].good}`;
        evil1.innerHTML =  `<b>Evil:</b> ${hand1[0].evil}`;
        innerStrength1.innerHTML =  `<b>Inner Strength:</b> ${hand1[0]["inner strength"]}`;
        outerStrength1.innerHTML =  `<b>Outer Strength:</b> ${hand1[0]["outer strength"]}`;

        p2cardimg.src = hand2[0].image;
        name2.innerHTML = hand2[0].name;
        power2.innerHTML = `<b>Power:</b> ${hand2[0].power}`;
        good2.innerHTML =  `<b>Good:</b> ${hand2[0].good}`;
        evil2.innerHTML =  `<b>Evil:</b> ${hand2[0].evil}`;
        innerStrength2.innerHTML =  `<b>Inner Strength:</b> ${hand2[0]["inner strength"]}`;
        outerStrength2.innerHTML =  `<b>Outer Strength:</b> ${hand2[0]["outer strength"]}`;        

        round.textContent++ ;
        if (turn.textContent == "Press Start" || winner.textContent == "P1 Wins That Round!") {
            turn.textContent = "P1 Your Turn";
            power2.innerHTML = "Power";
            good2.innerHTML =  "Good";
            evil2.innerHTML =  "Evil";
            innerStrength2.innerHTML =  "Inner Strength";
            outerStrength2.innerHTML =  "Outer Strength";
        } else if (winner.textContent == "It's a Draw!" && turn.textContent == "P2 Your Turn") {
            turn.textContent = "P1 Your Turn";
            power2.innerHTML = "Power";
            good2.innerHTML =  "Good";
            evil2.innerHTML =  "Evil";
            innerStrength2.innerHTML =  "Inner Strength";
            outerStrength2.innerHTML =  "Outer Strength";
        } else {
            turn.textContent = "P2 Your Turn";
            power1.innerHTML = "Power";
            good1.innerHTML =  "Good";
            evil1.innerHTML =  "Evil";
            innerStrength1.innerHTML =  "Inner Strength";
            outerStrength1.innerHTML =  "Outer Strength";
        };
        message.textContent = "Select A Category Below";
    }

    //playing
    const test = (stat) => {
        console.log(hand1[0][stat]);
        console.log(hand2[0][stat]);
                
        if (hand1[0][stat] > hand2[0][stat]) { //checks for wins
            console.log("P1 wins that round!"); //gives winner message, moves card to end, adds p2 card to end, adds any limbo cards to end, resets limbo
            winner.textContent = "P1 Wins That Round!";
            hand1[0].wins++;
            console.log(hand1[0].name + " has won " + hand1[0].wins + " times!");
            message.textContent = `${hand1[0].name} has won ${hand1[0].wins} times!`
            hand1.push(hand1.shift());
            hand1.push(hand2.shift());
            hand1.push(...limbo);
            limbo = [];
            p1crem.textContent = `${hand1.length} Cards Left`;
            p2crem.textContent = `${hand2.length} Cards Left`;
            hold.textContent = `${limbo.length} Cards`;
            check();
        } else if (hand2[0][stat] > hand1[0][stat]){
            console.log("P2 wins that round!");
            winner.textContent = "P2 Wins That Round!";
            hand2[0].wins++;
            console.log(hand2[0].name + " has won " + hand2[0].wins + " times!");
            message.textContent = `${hand1[0].name} has won ${hand1[0].wins} times!`
            hand2.push(hand2.shift());
            hand2.push(hand1.shift());
            hand2.push(...limbo);
            limbo = [];
            p1crem.textContent = `${hand1.length} Cards Left`;
            p2crem.textContent = `${hand2.length} Cards Left`;
            hold.textContent = `${limbo.length} Cards`;
            check();
        } else {
            console.log("It's a draw!");
            winner.textContent = "It's a Draw!";
            limbo.push(hand1.shift());
            limbo.push(hand2.shift());
            hold.textContent = `${limbo.length} Cards`;
            p1crem.textContent = `${hand1.length} Cards Left`;
            p2crem.textContent = `${hand2.length} Cards Left`;
            check();
        }
    }

    const check = () => {
        console.log (`hand1 check ${hand1.length}`);
        console.log (`hand2 check ${hand2.length}`);
        if (hand2.length === 0 && hand1.length > 0) {
            console.log("P1 wins!");
            winner.textContent = "P1 Wins The Game!";
            start.style.visibility = "visible";
            turn.textContent = "Press Start";
            message.textContent = "Select A Category Below";
            round.textContent = 0;
        } else if (hand1.length === 0 && hand2.length > 0) {
            console.log("P2 wins!");
            winner.textContent = "P2 Wins The Game!";
            start.style.visibility = "visible"
            turn.textContent = "Press Start";
            message.textContent = "Select A Category Below";
            round.textContent = 0;
        } else if (hand1.length === 0 && hand2.length === 0) {
            console.log("It's a draw!");
            winner.textContent = "No-one Wins the Game";
            start.style.visibility = "visible"
            turn.textContent = "Press Start";
            message.textContent = "Select A Category Below";
            round.textContent = 0;
        } else {
            // these were moved from the event listeners
            update();
            console.log (`hand1 is ${hand1.length}`);
            console.log (`hand2 is ${hand2.length}`);
        };
    };


     // start the game
    start.addEventListener("click", () => {
        console.log("start");
        start.style.visibility = "hidden";
        update();


        power.addEventListener("click", () => {
            // stat = "power";
            console.log("power");
            test("power");
        });

        good.addEventListener("click", () => {
            // stat = "good";
            console.log("good");
            test("good"); 
        }); 

        evil.addEventListener("click", () => {
            // stat = "evil";
            console.log("evil");
            test("evil");
        }); 

        innerStrength.addEventListener("click", () => {
            // stat = "innerStrength";
            console.log("innerStrength");
            test("inner strength");
        });   

        outerStrength.addEventListener("click", () => {
            // stat = "outerStrength";
            console.log("outerStrength");
            test("outer strength");
        });   
    });
};

play(acotar); //working