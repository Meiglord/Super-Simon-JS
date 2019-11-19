// Le Modal

let modal = document.getElementById("Modal");

let btn = document.getElementById("openModal");

let span = document.getElementsByClassName("closeModal")[0];

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

    // L'utilisateur ne pourra pas cliquer sur les boutons tant que le jeu n'est pas démarré ( on le définiera dans les fonctions Start et Reset) ET il ne pourra pas non plus cliquer pendant le tour de l'IA
    let antiClick = document.getElementById('bloque');

// Lancement du jeu

function start(){
    console.log('Jeu commencé')
    antiClick.classList.remove("blocus");
}

// Reset de la partie

function reset(){
    randomColorStock = []
    clickColorStock = []
    antiClick.classList.add("blocus")
    console.log(randomColorStock, clickColorStock)
}

// Si c'est au joueur ou à l'IA de jouer


// Variable générant un nombre aléatoire entre 0 et 3 pour l'utiliser plus tard

let randomNumber =  Math.floor(Math.random() * 4); 
console.log(randomNumber)

// On va associer le nombre random que l'on vient de créer à un bouton

switch (randomNumber) {
    case 0:
        document.getElementById(0).classList.add("vert:active");
        randomColorStock.push(this.id)
        console.log('Vert')
    break
    case 1:
        document.getElementById(1).style.backgroundColor = "blue ";
        randomColorStock.push(this.id)
        console.log('Rouge')
    break
    case 2:
        document.getElementById(2).style.backgroundColor = "blue";
        randomColorStock.push(this.id)
        console.log('Bleu')
    break
    case 3:
        document.getElementById(3).style.backgroundColor = "blue";
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

// Quand on clique sur un bouton,  la couleur de ce dernier va changer pendant un instant
/*
function changeColorOnClick(id){
    switch (id){ 
        case 0 :
        document.getElementById(0).classList.add('vertActive');
        console.log(document.getElementById(0))
        break
        case 1 :
        document.getElementById(1).classList.add('') ;
        break
        case 2 :
        document.getElementById(2).classList.add('') ;
        break
        case 3 :
        document.getElementById(3).classList.add('');
        break
    }
} */


// On check que l'array randomColor qui génère aléatoirement la suite soit bien raccord avec colorClick, où l'on a reproduit cette suite 

if (randomColorStock == clickColorStock) {
    console.log('Bonne réponse')
}