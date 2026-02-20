// Fonction appelée au clic sur le bouton
function construirePyramide() {
    // Récupère le nombre de lignes saisi par l'utilisateur
    let nbLignes = parseInt(document.getElementById("ligne-pyramide").value);

    // Chaîne de base composée de toutes les étoiles nécessaires
    let etoiles = "*".repeat(nbLignes * 2 - 1);

    // Variable qui contiendra la pyramide complète
    let pyramide = "";

    // Boucle sur chaque ligne de la pyramide
    for (let i = 1; i <= nbLignes; i++) {
        // slice() permet de découper la chaîne d'étoiles pour obtenir le bon nombre d'étoiles par ligne
        // La ligne i contient (2*i - 1) étoiles
        let ligne = etoiles.slice(0, 2 * i - 1);

        // Ajoute la ligne + saut de ligne (balise <br> car on affiche dans du HTML)
        pyramide += ligne + "<br>";
    }

    // Affiche la pyramide dans le paragraphe prévu
    document.getElementById("pyramide").innerHTML = pyramide;
}
