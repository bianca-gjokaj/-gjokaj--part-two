let yourName = prompt("Welcome to GC mini golf! What is your name?");

let holesToday = prompt("Hi, " + yourName + "! Would you like to play 3 or 6 holes today?");
let totalPuts = 0;
let totalPar = 0;
let holeNum = 1;
for (let i = 0; i < holesToday; i++) {
    let numOfPuts = Number(prompt("How many putts for hole " + holeNum++ + "?(par: 3)"));
    totalPuts += numOfPuts;
}

if (holesToday == 3, totalPuts > 9) {
    totalPar = totalPuts - 9;
    console.log("Nice try, " + yourName + "... Your total par was: +" + totalPar);
} else if (holesToday == 3, totalPuts < 9) {
    totalPar = 9 - totalPuts;
    console.log("Great job, " + yourName + "! Your total par was: -" + totalPar);
} else if (holesToday == 3, totalPuts === 9) {
    console.log("Good game, " + yourName + ". Your total par was: " + totalPar);
}

if (holesToday == 6, totalPuts > 18) {
    totalPar = totalPuts - 18;
    console.log("Nice try, " + yourName + "... Your total par was: +" + totalPar);
} else if (holesToday == 6, totalPuts < 18) {
    totalPar = 18 - totalPuts;
    console.log("Great job, " + yourName + "! Your total par was: -" + totalPar);
} else if (holesToday == 6, totalPuts === 18) {
    console.log("Good game, " + yourName + ". Your total par was: " + totalPar);
}