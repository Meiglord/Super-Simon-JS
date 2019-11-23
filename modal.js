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
