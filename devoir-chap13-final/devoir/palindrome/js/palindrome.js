// Fonction appelée au clic sur le bouton "palindrome"
function palindrome() {
    // Récupère la valeur saisie dans le champ de texte
    let motSaisi = document.getElementById("id-mot-saisi").value;

    // Convertit le mot en minuscules pour une comparaison insensible à la casse
    let motMinuscule = motSaisi.toLowerCase();

    // Inverse le mot : on le split en tableau de lettres, on inverse le tableau, puis on rejoint
    let motInverse = motMinuscule.split("").reverse().join("");

    // Récupère le paragraphe résultat
    let resultat = document.getElementById("resultat");

    // Compare le mot original (en minuscule) et le mot inversé
    if (motMinuscule === motInverse) {
        resultat.innerText = "✅ \"" + motSaisi + "\" est un palindrome !";
    } else {
        resultat.innerText = "❌ \"" + motSaisi + "\" n'est pas un palindrome.";
    }
}
