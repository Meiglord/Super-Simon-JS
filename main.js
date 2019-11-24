// Mes variables

// Tableau qui va stocker les cases qu'on a générées aléatoirement
let randomColorButtonStock = []

// Tableau qui va stocker les cases sur lesquelles l'utilisateur a cliqué
let colorButtonStock = []

// Comme on va reset le color button stock à chaque tour, on a besoin d'une autre variable pour afficher le score par click
let colorButtonStockScore = 1

// Pour le moment, l'utilisateur ne peut pas cliquer sur les boutons Colorés. on définie une variable pour lever cette interdiction plus tard.
let antiClick = document.getElementById('bloque');

// Je crée cette variable afin de 
let antiClickStart = document.getElementById("start");

// on crée une variable vitesse
let speed = 1400

// Pour éviter les bugs
let GameOn = false

// Pour éviter que le joueur ne clique pendant que l'IA montre la suite. On utilisera cette variable dans la fonction turn

let playerTurn = false

// Si c'est au joueur de jouer : on lui permet de cliquer et on le lui dit, sinon, il ne peut pas cliquer et on le lui dit aussi.
function turn(){ 
    switch (playerTurn) {
        case false:
            antiClick.classList.add("blocus")
            document.getElementById('IATurn').style.backgroundColor  = "rgb(0, 201, 7)";
            document.getElementById('myTurn').style.backgroundColor  ="grey";
            console.log('Le joueur ne peut pas jouer ')
        break;

        case true:
            antiClick.classList.remove("blocus")
            document.getElementById('myTurn').style.backgroundColor = "rgb(0, 201, 7)";
            document.getElementById('IATurn').style.backgroundColor ="grey";
            console.log('Le joueur peut jouer ')
        break;
    }
}

// fonction wait. ne pas oublier les async quand on l'utilise ! Elle permet d'attendre un laps de temps (défini en ms) avant d'éxécuter la suite de la fonction
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Lancement du jeu
async function start(){
    antiClickStart.classList.add("blocus"); // J'empêche l'utilisateur de recliquer sur Jouer quand il a commencé sa partie
    await sleep(600) // avant de lancer le jeu on laisse un petit délai
    randomColorButtonStock= []
    GameOn = true
    console.log('Jeu commencé ' + GameOn) // je vérifie que la fonction est bien lancée
    newTurn() // On lance le jeu
}

// Reset de la partie quand le joueur clique
async function reset(){
    GameOn = false
    randomColorButtonStock = [] // On remet à Zéro le tableau qui stockait la suite générée aléatoirement
    colorButtonStock = [] // idem pour le tableau qui stockait la suite que le joueur a entrée
    colorButtonStockScore = 1 // idem pour le tableau qui affichait le score
    speed = 1700 // on réinitialise la vitesse
    document.getElementById('ScoreByTurn').innerHTML= 0 // On reset le score par tour
    document.getElementById('ScoreByClick').innerHTML= 0; // On reset le score par click
    antiClickStart.classList.remove("blocus"); // J'enlève la class qui empêche le joueur de cliquer sur Start
    console.log(randomColorButtonStock, colorButtonStock) // je vérifie que les tableaux sont bien vide
    await sleep(400)
    playerTurn = false
    turn() // le joueur ne peut à nouveau plus cliquer sur les boutons.
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

// Fonction qui va être utilisée en for par l'IA, qui fera clignoter les touches et qui va aller de plus en plus vite
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

// Quand le joueur clique sur un bouton, on va push son ID dans l'array colorButtonStock
async function clickOnColorButton(id){
    document.getElementById('ScoreByClick').innerHTML= colorButtonStockScore++ ;
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
    if (randomColorButtonStock.length == colorButtonStock.length && GameOn == true ){// on vérifie que la longueur des tableaux est la même ET que le jeu est lancé. Le AND permet d'éviter que le jeu fasse une comparaison après reset et lance la suite
        console.log('Bien joué')
        await sleep(100)
        newTurn() // Si la suite du joueur correspond à celle de l'ia, on lance un nouveau tour
        playerTurn = false
        turn() // On va empêcher le joueur de cliquer pendant que l'IA fait la combinaison de touches
    }
    
}

// Fonction qui s'active quand la suite réalisée par le joueur correspond à celle de l'IA
async function newTurn(){
    //La vitesse augmente de 50ms à chaque tour jusqu'au 8eme tour
    if (randomColorButtonStock.length < 9) {
        speed = speed - 100
    }
    console.log(speed)
    colorButtonStock= []
    document.getElementById('ScoreByTurn').innerHTML= randomColorButtonStock.length ; // On affiche le nombre de tours validés 
    generateRandomNumber()
    await sleep(100)
    for (let i = 0; i < randomColorButtonStock.length; i++){ // On va continuer le jeu si les deux listes correspondent
        let audio = new Audio('https://meiglord.github.io/Super-Simon-JS/sounds/' + randomColorButtonStock[i] +".wav" )
        audio.play()
        clignotement(document.getElementById(randomColorButtonStock[i]))
        await sleep(speed)
    }
    playerTurn = true
    turn() // L'IA a fini de jouer, le joueur peut désormais cliquer.
    console.log(playerTurn)
    
}

// Fonction qui s'active quand le joueur perd
function lose(){
    randomColorButtonStock.length = randomColorButtonStock.length-1
    colorButtonStockScore = colorButtonStockScore-2
    modalLose.style.display = "block";
    document.getElementById('loseModal').innerHTML = "<br><br> GAME OVER <br><br><br> " + "Score : <br><br> " + colorButtonStockScore + " couleurs validées <br>" + randomColorButtonStock.length + " tours terminés."
    GameOn = false
    reset()
    
}