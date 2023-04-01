// Je sélectionne et je stocke
let titre = document.getElementById("titre");
console.log("titre"); 
const btnCyan = document.getElementById("btn-cyan");// btnRed, "bouton rouge"; 
const btnBlue = document.getElementById("btn-blue")// btnblue, "bouton bleu"; 
const replay = document.getElementById('replay'); // btn "rejouer"

let counter = 0;
// console.log(counter,"compteur au démarrage");

//création de la fonction d'incrémentation
function add(){ 
    counter = counter + 1;
    console.log(counter,"aprés clic");
    titre.innerText=counter;
    //ici l'action incrémenter le compteur
}

// Je soumet l'action du chronomètre
setTimeout(function(){
    //supprime les cercles
    btnCyan.remove()
    btnBlue.remove()
    console.log("fin du chrono");
},10000);

//Je soumet une action btn red
btnCyan.addEventListener('click', function(){
   add();
    //ici l'action incrémenter le compteur (rappel de la fonction)
});

//Je soumet une action btn blue
btnBlue.addEventListener('click', function(){
    add()
    //ici l'action incrémenter le compteur (rappel de la fonction)
});

// réactualise le jeu 
replay.addEventListener('click', function(){
    console.log('cliqué'); 
    location.reload();
});