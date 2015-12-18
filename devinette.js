/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
// initialisation
var proposition=-solution;
var essai=0;

var ESSAI_MAX=6; //nombre maximum d'essai

do {             
            proposition = Number(prompt("Entrez un nombre entre 1 et 100:"));

            if (proposition<solution)
            {
                console.log(proposition+" est trop petit.");
            }
            else if (proposition>solution)
            {
                console.log(proposition+" est trop grand.");
            }

            else
            {
              console.log("Bravo ! La solution était "+solution+".");
              exit;
            }
        
    essai++;
        
    
} while(essai<ESSAI_MAX &&  proposition!=solution);

 
console.log("Perdu ... La solution était "+solution+".");
