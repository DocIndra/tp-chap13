// Tableau contenant la liste des mangas (document 5)
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

// Fonction appelée au clic sur le bouton "Tirage au sort"
function tirage() {
    // Génère un index aléatoire entre 0 et la longueur du tableau - 1
    let indexAleatoire = Math.floor(Math.random() * mangas.length);

    // Récupère le manga correspondant à cet index
    let mangaTire = mangas[indexAleatoire];

    // Affiche le résultat dans le paragraphe "affichage"
    document.getElementById("affichage").innerText = "🎉 Le manga tiré au sort est :";

    // Affiche le nom du manga dans le paragraphe "aleatoire"
    document.getElementById("aleatoire").innerText = mangaTire;
}
