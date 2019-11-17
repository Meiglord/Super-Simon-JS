// Le Modal

var modal = document.getElementById("Modal");

// Le bouton qui ouvre le modal
var btn = document.getElementById("openModal");

// Span qui ferme le modal
var span = document.getElementsByClassName("closeModal")[0];

// Quand l'utilisateur clique sur le bouton information, ouvre le Modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer le modal quand l'utilisateur clique sur la Croix
span.onclick = function() {
    modal.style.display = "none";
}

// Quand l'utilisateur cliquera en dehors du Modal, on le ferme
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}




}
function regles() {
    alert("Bienvenue sur mon Jeu Super Simon ! <br>Pour lancer le jeu, cliquez sur 'Jouer'");
}


function start(){
    console.log('Jeu commencé')
}