// Mes variables

// Tableau qui va stocker la couleur qu'on a générée aléatoirement
let randomColorButtonStock = []

// Tableau qui va stocker les couleurs sur lesquelles l'utilisateur a cliqué
let colorButtonStock = []

// Pour le moment, l'utilisateur ne peut pas cliquer sur les boutons Colorés. on définie une variable pour lever cette interdiction plus tard.
let antiClick = document.getElementById('bloque');

// Je crée cette variable afin de 
let antiClickStart = document.getElementById("start");

// on crée une variable vitesse
let speed = 1400

// Pour éviter les bugs

let GameOn = false

// Pour éviter que le joueur joue si il n'a pas à jouer (pendant que l'IA joue par exemple)

let playerTurn = false
console.log(playerTurn)


// Si c'est au joueur ou à l'IA de jouer
switch (playerTurn) {
    case 1:
        antiClick.classList.remove("blocus")
        document.getElementById('monTour').style.background = "rgb(0, 201, 7)"
        document.getElementById('IATour').style.background ="grey";
    break;

    case 0:
        antiClick.classList.add("blocus")
        document.getElementById('IATour').style.background = "rgb(0, 201, 7)"
        document.getElementById('monTour').style.background="grey";
    break;
}


// fonction wait. ne pas oublier les async quand on l'utilise !

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// On va empêcher le joueur de cliquer pendant que l'IA fait la combinaison de touches
//let playerTurn = false

// Lancement du jeu

async function start(){
    antiClickStart.classList.add("blocus"); // J'empêche l'utilisateur de recliquer sur Jouer quand il a commencé sa partie
    await sleep(800)
    randomColorButtonStock= []
    antiClick.classList.remove("blocus");
    GameOn = true
    console.log('Jeu commencé ' + GameOn) // je vérifie que la fonction est bien lancée
    newTurn() // On lance le jeu
}

// Reset de la partie quand le joueur clique

async function reset(){
    GameOn = false
    randomColorButtonStock = [] // On remet à Zéro le tableau qui stockait la suite générée aléatoirement
    colorButtonStock = [] // idem pour le tableau qui stockait la suite que le joueur a entrée
    speed = 1700
    document.getElementById('ScoreByTurn').innerHTML= 0
    document.getElementById('ScoreByClick').innerHTML= 0; // On reset le score par click
    antiClickStart.classList.remove("blocus"); // J'enlève la class qui empêche le joueur de cliquer sur Start
    console.log(randomColorButtonStock, colorButtonStock) // je vérifie que les tableaux soient bien vide
    await sleep(400)
    playerTurn = false
    console.log(playerTurn)
}

/* Je veux ne lancer la fonction QUE quand Start est lancé, et donc générer un nombre qui sera push dans l'array*/
function generateRandomNumber(){
    // Fonction générant un nombre aléatoire entre 0 et 3 pour l'utiliser plus tard
    let randomNumber = 0
    randomNumber = Math.floor(Math.random() * 4);
    
    console.log(randomNumber) // je vérifie que la fonction est bien lancée

    // On va associer le nombre aléatoire que l'on vient de créer à l'ID d'un bouton spécifique, et le push dans un tableau qui va stocker ce que l'IA a généré aléatoirement.
    switch (randomNumber ) {
        case 0:
            randomColorButtonStock.push('0')
            console.log('Vert')
        break
        case 1:
            randomColorButtonStock.push('1')
            console.log('Rouge')
        break
        case 2:
            randomColorButtonStock.push('2')
            console.log('Bleu')
        break
        case 3:
            randomColorButtonStock.push('3')
            console.log('Jaune')
        break
    }
    console.log('Le Nombre généré aléatoirement est ',randomColorButtonStock)
}

// Quand on clique sur un bouton, on va push son ID dans l'array colorClick

async function clickOnColorButton(id){
    document.getElementById('ScoreByClick').innerHTML= colorButtonStock.length+1 ;
    colorButtonStock.push(id)
    console.log('Le joueur a cliqué sur le bouton correspondant à ', colorButtonStock)
    let audio = new Audio('https://meiglord.github.io/Super-Simon-JS/sounds/' + id +".wav" )
        audio.play()
    await sleep(speed)
    compare()
    
}

// compare les deux array

async function compare(){
    let i = 0;
    colorButtonStock.forEach(element => {
        if (element !== randomColorButtonStock[i]){
            lose();
        }
        i++;
    });
    if (randomColorButtonStock.length == colorButtonStock.length && GameOn == true ){
        console.log('Bien joué')
        await sleep(100)
        newTurn()
    }
    playerTurn = false
}


async function clignotement(randomColorButtonStock){
    switch (randomColorButtonStock.id) {
        case "0":
            document.getElementById(0).classList.remove("vert-bg")
            document.getElementById(0).classList.add("vert-IA")
            await sleep(speed*0.35)
            document.getElementById(0).classList.remove("vert-IA")
            document.getElementById(0).classList.add("vert-bg")
        break;
        case "1":
            document.getElementById(1).classList.remove("rouge-bg")
            document.getElementById(1).classList.add("rouge-IA")
            await sleep(speed*0.35)
                document.getElementById(1).classList.remove("rouge-IA")
                document.getElementById(1).classList.add("rouge-bg")
        break;
        case "2":
            document.getElementById(2).classList.remove("bleu-bg")
            document.getElementById(2).classList.add("bleu-IA")
            await sleep(speed*0.35)
                document.getElementById(2).classList.remove("bleu-IA")
                document.getElementById(2).classList.add("bleu-bg")
        break;
        case "3":
            document.getElementById(3).classList.remove("jaune-bg")
            document.getElementById(3).classList.add("jaune-IA")
            await sleep(speed*0.35)
                document.getElementById(3).classList.remove("jaune-IA")
                document.getElementById(3).classList.add("jaune-bg")
            
        break;
    }
}

// On va continuer le jeu si les deux listes correspondent

async function newTurn(){
            //La vitesse augmente de 50ms à chaque tour jusqu'au 8eme tour
    if (randomColorButtonStock.length < 9) {
        speed = speed - 100
    }
    console.log(speed)
    colorButtonStock= []
    document.getElementById('ScoreByTurn').innerHTML= randomColorButtonStock.length ;
    generateRandomNumber()
    await sleep(100)
    for (let i = 0; i < randomColorButtonStock.length; i++){
        let audio = new Audio('https://meiglord.github.io/Super-Simon-JS/sounds/' + randomColorButtonStock[i] +".wav" )
        audio.play()
        clignotement(document.getElementById(randomColorButtonStock[i]))
        await sleep(speed)
    }
    playerTurn = true
    
}

// Fonction qui s'active quand le joueur perd
function lose(){
    modalLose.style.display = "block";
    GameOn = false
    reset()
    
}