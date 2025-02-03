// Fonction pour calculer l'IMC
function calcul(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire pour éviter le rechargement de la page

    var taille = +document.getElementById('taille').value;  // Récupère la valeur de la taille
    var poids = +document.getElementById('poids').value;    // Récupère la valeur du poids

    // Calcul de l'IMC
    var imc = poids / (taille ** 2);
    var commentaire = "";

    if (!Number.isNaN(imc) && imc > 0 && imc !== Infinity) {
        // Détermination de l'interprétation de l'IMC
        if (imc < 18.5) {
            commentaire = "Insuffisance pondérale (maigreur)";
        } else if (imc >= 18.5 && imc < 25) {
            commentaire = "Corpulence normale";
        } else if (imc >= 25 && imc < 30) {
            commentaire = "Surpoids";
        } else if (imc >= 30 && imc < 35) {
            commentaire = "Obésité modérée";
        } else {
            commentaire = "Obésité sévère";
        }

        // Affichage du résultat
        document.getElementById('score-IMC').value = imc.toFixed(1); // Affichage de l'IMC
        document.getElementById('interprétation').value = commentaire; // Affichage de l'interprétation
    } else {
        // Si les valeurs sont invalides
        document.getElementById('score-IMC').value = "";
        document.getElementById('interprétation').value = "";
    }
}





// Fonction pour calculer le score de Glasgow
function calculGlasgow() {
    var reponse1 = +document.getElementById('reponse1').value;  // Récupère la valeur de l'ouverture des yeux
    var reponse2 = +document.getElementById('reponse2').value;  // Récupère la valeur de la réponse verbale 
    var reponse3 = +document.getElementById('reponse3').value;  // Récupère la valeur de la réponse motrice 

    var scoreGlasgow = reponse1 + reponse2 + reponse3;  // Somme des réponses pour obtenir le score de Glasgow
    var commentaire = "";
    console.log(`Réponse 1: ${reponse1}`);
    console.log(`Réponse 2: ${reponse2}`);
    console.log(`Réponse 3: ${reponse3}`);
    console.log(`Score de Glasgow: ${scoreGlasgow}`);

    if (!Number.isNaN(scoreGlasgow) && scoreGlasgow > 0 && scoreGlasgow <= 15) {
        // Détermination de l'interprétation du score de Glasgow
        if (scoreGlasgow === 3) {
            commentaire = "Coma très profond, voire état de mort cérébrale";
        } else if (scoreGlasgow <= 6) {
            commentaire = "Coma avec dommage cérébral très sévère";
        } else if (scoreGlasgow <= 8) {
            commentaire = "Coma avec dommage cérébral sévère";
        } else if (scoreGlasgow <= 11) {
            commentaire = "État d'éveil avec dommage cérébral modéré";
        } else if (scoreGlasgow <= 14) {
            commentaire = "État d'éveil avec dommage cérébral léger"; 
        } else {
            commentaire = "Individu normal";
        }

        // Affichage du résultat
        var scoreElement = document.getElementById('score-glasgow');
        scoreElement.value = scoreGlasgow;

        var interpretationElement = document.getElementById('interpretation');
        interpretationElement.value = commentaire;
    } else {
        // Si les valeurs sont invalides
        document.getElementById('score-glasgow').value = '';
        document.getElementById('interpretation').value = '';
    }
}





// Fonction pour calculer la période des règles et l'ovulation
function calculRegles() {
    var derniereRegles = new Date(document.getElementById('dernieres-regles').value);  // Récupère la date des dernières règles
    var dureeCycle = +document.getElementById('cycle').value;  // Récupère la durée moyenne du cycle

    if (!isNaN(derniereRegles) && dureeCycle >= 21 && dureeCycle <= 35) {
        var prochaineRegles = new Date(derniereRegles);
        prochaineRegles.setDate(prochaineRegles.getDate() + dureeCycle);  // Calcul de la prochaine période des règles

        var dateOvulation = new Date(prochaineRegles);
        dateOvulation.setDate(dateOvulation.getDate() - 14);  // Calcul de la date d'ovulation (14 jours avant les prochaines règles)

        // Affichage des résultats
        var resultatRegles = document.getElementById('resultat-regles');
        resultatRegles.value = prochaineRegles.toLocaleDateString('fr-FR');  // Affichage de la date des prochaines règles

        var resultatOvulation = document.getElementById('resultat-ovulation');
        resultatOvulation.value = dateOvulation.toLocaleDateString('fr-FR');  // Affichage de la date estimée de l'ovulation
    } else {
        // Si les valeurs sont invalides
        document.getElementById('resultat-regles').value = '';
        document.getElementById('resultat-ovulation').value = '';
    }
}





// Fonction pour calculer la surface corporelle (BSA)
function calculSurface() {
    var poids = +document.getElementById('poids').value;  // Récupère la valeur du poids
    var taille = +document.getElementById('taille').value;  // Récupère la valeur de la taille

    if (!isNaN(poids) && !isNaN(taille) && poids > 0 && taille > 0) {
        var bsa = 0.007184 * Math.pow(taille, 0.725) * Math.pow(poids, 0.425);  // Calcul de la surface corporelle selon la formule de DuBois et DuBois

        // Affichage du résultat
        var resultatSurface = document.getElementById('resultat-surface');
        resultatSurface.value = bsa.toFixed(2);  // Affichage du résultat avec 2 décimales
    } else {
        // Si les valeurs sont invalides
        document.getElementById('resultat-surface').value = '';  
    }
}
