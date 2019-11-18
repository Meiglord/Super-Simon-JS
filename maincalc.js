let calcul = []
let result = 0

function addArray(id){
    calcul.push(id)
    document.getElementById('display').innerHTML = calcul.join("")
    console.log(calcul)
}

function delet(){
    calcul.pop()
    document.getElementById('display').innerHTML = calcul.join("")
    console.log(calcul)
    
}

function clearr(){
    calcul = []
    document.getElementById('display').innerHTML = calcul.join("")
    console.log(calcul)
    
}

function resultat(){
    result = eval(calcul.join(''))
    document.getElementById('display').innerHTML = result
    console.log(calcul)
}


/*
On veut :

- Cliquer sur un bouton et enregistrer la valeur
- Cliquer sur = va calculer et afficher le résultat
- Cliquer sur + - / * va préparer un calcul

*/