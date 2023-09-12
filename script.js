function afficher() {
let resultat = document.getElementByClass("resultat")
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".box button");
    const resultatDiv = document.querySelector(".resultat");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const choixUtilisateur = this.textContent;
            const choixProgramme = ["Pierre", "Feuille", "Ciseaux"][Math.floor(Math.random() * 3)];
            const resultat = comparerChoix(choixUtilisateur, choixProgramme);
            afficherResultat(resultat, choixUtilisateur, choixProgramme);
        });
    });

    function comparerChoix(choixUtilisateur, choixProgramme) {
        if (choixUtilisateur === choixProgramme) {
            return "Égalité !";
        } 
        if ((choixUtilisateur === "Pierre" && choixProgramme === "Ciseaux") ||
                   (choixUtilisateur === "Feuille" && choixProgramme === "Pierre") ||
                   (choixUtilisateur === "Ciseaux" && choixProgramme === "Feuille")) {
            return "Vous avez gagné !";
        } 
        else {
            return "Vous avez perdu !";
        }
    }

    function afficherResultat(resultat, choixUtilisateur, choixProgramme) {
        resultatDiv.innerHTML = "Choix du joueur : " + choixUtilisateur + "<br> Choix de l'ordinateur : " + choixProgramme + "<br><br>" + resultat;
    }
});