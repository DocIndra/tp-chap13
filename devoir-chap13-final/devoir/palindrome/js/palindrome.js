function palindrome() {
  // Récupère la valeur saisie par l'utilisateur dans le champ input
  let motSaisi = document.getElementById("id-mot-saisi").value;

  // Convertit en minuscules pour comparer sans tenir compte de la casse
  // (ex: "Kayak" et "kayak" seront traités identiquement)
  let motMinuscule = motSaisi.toLowerCase();

  // Inverse le mot :
  // split("") → transforme la chaîne en tableau de caractères ["k","a","y","a","k"]
  // reverse()  → inverse le tableau                           ["k","a","y","a","k"]
  // join("")   → recolle les caractères en une chaîne         "kayak"
  let motInverse = motMinuscule.split("").reverse().join("");

  let resultat = document.getElementById("resultat");

  // Compare le mot original (en minuscules) avec sa version inversée
  if (motMinuscule === motInverse) {
    resultat.innerText = ' Oui "' + motSaisi + '" est un palindrome !';
  } else {
    resultat.innerText = ' Non "' + motSaisi + '" n\'est pas un palindrome.';
  }
}