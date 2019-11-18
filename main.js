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

    // Tableau qui va enregistrer la couleur qu'on a générée aléatoirement
    let randomColor = []

    // Tableau qui va enregistrer les couleurs sur lesquelles l'utilisateur a cliqué
    let colorClick = []

// Lancement du jeu

function start(){
    console.log('Jeu commencé')
}

// Reset de la partie

function reset(){
    randomColor = []
    colorClick = []
    
    console.log(randomColor, colorClick)
    
}

// Si c'est au joueur ou à l'IA de jouer


// Fonction générant un nombre aléatoire entre 0 et 3 pour l'utiliser plus tard

function randomNumber() {
    return Math.floor(Math.random() * 4); 
}

console.log(randomNumber())
// On va associer le nombre random que l'on vient de récupérer à un bouton

switch (randomNumber()) {
    case 0:
        document.getElementById(0)
        randomColor.push(this.id)
        console.log('Vert')
    break
    case 1:
        document.getElementById(1)
        randomColor.push(this.id)
        console.log('Rouge')
    break
    case 2:
        document.getElementById(2)
        randomColor.push(this.id)
        console.log('Bleu')
    break
    case 3:
        document.getElementById(3)
        randomColor.push(this.id)
        console.log('Jaune')
    break
}

console.log(randomColor)

// Quand on clique sur un bouton, on va push son ID dans l'array colorClick

function clickOnColor(id){
    colorClick.push(id)
    console.log(colorClick)
}

// On check que l'array randomColor qui génère aléatoirement la suite soit bien raccord avec colorClick, où l'on a reproduit cette suite 