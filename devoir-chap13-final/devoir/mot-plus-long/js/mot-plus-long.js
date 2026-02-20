// Récupère le texte du paragraphe "citation"
let citation = document.getElementById("citation").innerText;

// Remplace les apostrophes (droites et typographiques) par un espace avec replace
// pour séparer correctement les mots comme "n'aurez" en "n" et "aurez"
let citationSansPonctuation = citation.replace(/[''\u2019]/g, " ").replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

// Découpe la phrase en tableau de mots grâce à split (séparateur = espace)
// filter(Boolean) supprime les cases vides générées par les doubles espaces
let mots = citationSansPonctuation.split(" ").filter(Boolean);

// Variable pour stocker le mot le plus long
let motLePlusLong = "";

// Parcourt chaque mot du tableau
for (let i = 0; i < mots.length; i++) {
    // Si le mot actuel est plus long que le mot mémorisé, on le remplace
    if (mots[i].length > motLePlusLong.length) {
        motLePlusLong = mots[i];
    }
}

// Affiche le résultat dans le paragraphe "motPlusLong"
document.getElementById("motPlusLong").innerText = "Le mot le plus long est : " + motLePlusLong + " (" + motLePlusLong.length + " lettres)";
