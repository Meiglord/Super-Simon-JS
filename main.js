// Mes variables

    // Tableau qui va stocker la couleur qu'on a générée aléatoirement
    let randomColorButtonStock = []

    // Tableau qui va stocker les couleurs sur lesquelles l'utilisateur a cliqué
    let colorButtonStock = []

    // Pour le moment, l'utilisateur ne peut pas cliquer sur les boutons Colorés. on définie une variable pour lever cette interdiction plus tard.
    let antiClick = document.getElementById('bloque');

    // Je crée cette variable afin de 
    let antiClickStart = document.getElementById("start");

    // On crée une variable de tours
    let turn = 0

    // on crée une variable vitesse
    let speed = 600

    // compare les deux listes

    function compare(){
        let i = 0;
        colorButtonStock.forEach(element => {
            if (element !== randomColorButtonStock[i]){
                lose();
            }
            i++;
        });
    }



    // Fonction qui s'active quand le joueur perd

    function lose(){
        reset()
        alert('Perdu !')
    }

    // Score par tours terminés du joueur

    


// Lancement du jeu

function start(){
    antiClick.classList.remove("blocus");  // On enlève la class qui empêche le joueur de cliquer sur les boutons colorés
    console.log('Jeu commencé') // je vérifie que la fonction est bien lancée
    antiClickStart.classList.add("blocus"); // J'empêche l'utilisateur de recliquer sur Jouer quand il a commencé sa partie
    generateRandomNumber() // On lance la fonction qui génere un nombre random et qui l'affiche
}

// Reset de la partie quand le joueur clique

function reset(){
    randomColorButtonStock = [] // On remet à Zéro le tableau qui stockait la suite générée aléatoirement
    colorButtonStock = [] // idem pour le tableau qui stockait la suite que le joueur a entrée
    antiClick.classList.add("blocus") // On remet la class qui empêche le joueur de cliquer sur les boutons colorés
    antiClickStart.classList.remove("blocus"); // J'enlève la class qui empêche le joueur de cliquer sur Start
    console.log(randomColorButtonStock, colorButtonStock) // je vérifie que les tableaux soient bien vide
    document.getElementById('ScoreByClick').innerHTML= 0; // On reset le score par click
}


// Si c'est au joueur ou à l'IA de jouer

//La vitesse augmente de 50ms à chaque tour jusqu'au 8eme tour
while (turn < 8) {
    speed -=50
    turn++ ;
}



/* Je veux ne lancer la fonction QUE quand Start est lancé, et donc générer un nombre qui sera push dans l'array*/
function generateRandomNumber(){
    // Fonction générant un nombre aléatoire entre 0 et 3 pour l'utiliser plus tard
    let randomNumber = 0
    randomNumber = Math.floor(Math.random() * 4);
    
    console.log(randomNumber) // je vérifie que la fonction est bien lancée

    // On va associer le nombre aléatoire que l'on vient de créer à l'ID d'un bouton spécifique, et le push dans un tableau qui va stocker ce que l'IA a généré aléatoirement.
    // En parrallèle, on va faire clignoter le bouton associé à l'ID, pour que faire remarquer au joueur la suite de l'ID
    switch (randomNumber) {
        case 0:

            setTimeout(() => {
                document.getElementById(0).classList.remove("vert-bg")
                document.getElementById(0).classList.add("vert-IA")
                setTimeout(() => {
                    document.getElementById(0).classList.remove("vert-IA")
                    document.getElementById(0).classList.add("vert-bg")
                }, 800); 
            },speed)

            randomColorButtonStock.push('0')
            console.log('Vert')
        break
        case 1:
            document.getElementById(1).classList.remove("rouge-bg")
            document.getElementById(1).classList.add("rouge-IA")
            setTimeout(() => {
                document.getElementById(1).classList.remove("rouge-IA")
                document.getElementById(1).classList.add("rouge-bg")
            }, 800); 
            randomColorButtonStock.push('1')
            console.log('Rouge')
        break
        case 2:
            document.getElementById(2).classList.remove("bleu-bg")
            document.getElementById(2).classList.add("bleu-IA")
            setTimeout(() => {
                document.getElementById(2).classList.remove("bleu-IA")
                document.getElementById(2).classList.add("bleu-bg")
            }, 800); 
            randomColorButtonStock.push('2')
            console.log('Bleu')
        break
        case 3:
            document.getElementById(3).classList.remove("jaune-bg")
            document.getElementById(3).classList.add("jaune-IA")
            setTimeout(() => {
                document.getElementById(3).classList.remove("jaune-IA")
                document.getElementById(3).classList.add("jaune-bg")
            }, 800); 
            randomColorButtonStock.push('3')
            console.log('Jaune')
        break
    }
    console.log('Le Nombre généré aléatoirement est ',randomColorButtonStock)
}




// Quand on clique sur un bouton, on va push son ID dans l'array colorClick

function clickOnColorButton(id){
    colorButtonStock.push(id)
    console.log('Le joueur a cliqué sur le bouton correspondant à ', colorButtonStock)
    document.getElementById('ScoreByClick').innerHTML= colorButtonStock.length ;
    compare()
}


// On check que l'array randomColor qui génère aléatoirement la suite soit bien raccord avec colorClick, où l'on a reproduit cette suite 

if (randomColorButtonStock == colorButtonStock) {
    console.log('Bonne réponse')
}