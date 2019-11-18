// Le Modal

var modal = document.getElementById("Modal");

var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("closeModal")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

// Mes variables

    // Tableau qui va stocker la couleur qu'on a générée aléatoirement
    let randomColorStock = []

    // Tableau qui va stocker les couleurs sur lesquelles l'utilisateur a cliqué
    let clickColorStock = []

// Lancement du jeu

function start(){
    console.log('Jeu commencé')
}

// Reset de la partie

function reset(){
    randomColorStock = []
    clickColorStock = []
    
    console.log(randomColorStock, clickColorStock)
    
}

// Si c'est au joueur ou à l'IA de jouer


// Variable générant un nombre aléatoire entre 0 et 3 pour l'utiliser plus tard

let randomNumber =  Math.floor(Math.random() * 4); 


console.log(randomNumber)

// On va associer le nombre random que l'on vient de créer à un bouton

switch (randomNumber) {
    case 0:
        document.getElementById(0)
        randomColorStock.push(this.id)
        console.log('Vert')
    break
    case 1:
        document.getElementById(1)
        randomColorStock.push(this.id)
        console.log('Rouge')
    break
    case 2:
        document.getElementById(2)
        randomColorStock.push(this.id)
        console.log('Bleu')
    break
    case 3:
        document.getElementById(3)
        randomColorStock.push(this.id)
        console.log('Jaune')
    break
}

console.log(randomColorStock)

// Quand on clique sur un bouton, on va push son ID dans l'array colorClick

function clickOnColor(id){
    clickColorStock.push(id)
    console.log(clickColorStock)
}

// On check que l'array randomColor qui génère aléatoirement la suite soit bien raccord avec colorClick, où l'on a reproduit cette suite 

if (randomColorStock == clickColorStock) {
    console.log('Bonne réponse')
}