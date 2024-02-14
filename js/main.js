/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire est un texte qui ne sera pas exécuté par le navigateur
// Il permet de documenter le code, de le rendre plus lisible
// Il permet de désactiver une partie du code

// Un commentaire en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/* --------------------------- Affichage --------------------------- */

// Afficher un message dans la console de debbugage du navigateur
// On utilise la fonction console.log()
console.log('Hello, world!');

// Afficher une boite de dialogue avec champs à remplir
// On utilise la fonction prompt()
// prompt('Quel est votre age?');

// On doit récupérer dans une variable la valeur du prompt

// let response = prompt('Quel est votre age???');
// console.log(response);

/* --------------------------- Les Variables --------------------------- */

// Les variables ne peuvent pas commencer par un chiffre
// Les variables ne peuvent pas contenir de caractères spéciaux (-, +, *, /, %, $, @, &, ...)
// Les variables ne peuvent pas contenir d'espaces

// Déclaration d'une variable
let uneVariable;

// Affectation d'une valeur à une variable
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules =/= minuscules )
let messageBonjour = 'Hello, World!';
let MESSAGEBONJOUR;

// On peut affecter le contenu d'une variable à une autre variable
messageBonjour = uneVariable;

// Affichage d'une variable dans la console
console.log(messageBonjour);

// On peut changer la valeur d'une variable
uneVariable = 'Je suis une nouvelle variable!';

/* --------------------------- Les Types de Variables --------------------------- */

// Les types les plus courants sont :

// string (chaine de caractère)
let messages = 'une chaine de caractère';

// number (nombre)
let nombre = 20;
let nombreDecimal = 20.5;

// boolean (booléen)
let isTrue = true;
let isFalse = false;

// Les opérations arithmétiques (+, -, *, /)
let sum;
let number1 = 10;
let number2 = 20;
sum = number1 * number2;
console.log(sum);

/* --------------------------- La Concatenation --------------------------- */

let lastName = 'EDJEKOUANE';
let firstName = 'Rachid';

// Pour déclarer une chaine de caractère on peux utiliser ('', "", ``)
// Cela a un impact sur la façon de concatener les variables et les chaines de caractères
let city = 'PARIS';
city = 'PARIS';
city = `PARIS`;

// Déclarer une variable city, afficher le message "j'adore vivre à <city>"
console.log("j'adore vivre à " + city);
console.log("j'adore vivre à " + city);
console.log(`j'adore vivre à ${city}`);

// Modifier le message pour afficher j'adore vivre à <city> et je m'appelle <firstName> <lastName>
console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`);

/* --------------------------- Instructions Conditionnelles --------------------------- */

// Demander à l'utilisateur s'il accepte les CGV
// let acceptCgv = prompt('Acceptez-vous les CGV?');
let acceptCgv = 'oui';

// Si, Sinon (if, else)
if (acceptCgv == 'ok') {
    console.log('Vous avez acceptez les conditions!');
} else {
    console.log("Vous n'avez pas acceptez les conditions!");
}

// Si, Si Non Si, Sinon (if, else if, else)
// Si la condition est vraie le premier bloc d'instruction est exécuté
// Sinon il test la deuxième condition
// Sinon aucune condition n'est vraie il exécute le bloc final
if (acceptCgv == 'yes') {
    console.log('Vous etes redirigé vers le site en anglais');
} else if (acceptCgv == 'oui') {
    console.log('Vous etes redirigé vers le site en français');
} else if (acceptCgv == 'da') {
    console.log('Vous etes redirigé vers le site en russe');
} else {
    console.log('Vous ne pouvez acceder au site');
}

console.log('la suite...');

/* --------------------------- Les Opérateurs de Comparaison --------------------------- */

// Les opérateurs de comparaison permettent de comparer deux valeurs
// Ils renvoient un résultat booléen (true, false)

// ( ==, >, >=, <, <=, !=, ===) :

// (> ou >=) supérieur ou supérieur ou égal à
// (< ou <=) inférieur ou inférieur ou égal à
// (!=) différent de
// (===) strictement égal à
// (!==) strictement différent de

// (==) égal à
let x = 10;
let y = 10;

console.log(a == b);

/* --------------------------- Les Opérateurs Logiques --------------------------- */

// Les opérateurs logiques permettent de combiner plusieurs conditions

// ET (&&) : les deux conditions doivent être vraies
// OU (||) : au moins une des conditions doit être vraie

let condition = true;

if (condition == true) {
    console.log('droit de conduire');
}

// let age = prompt('Quel est ton age?');
let userAge = 19;

if (userAge < '13') {
    console.log('Action Man');
} else if (userAge >= '13' || userAge <= 18) {
    console.log('Matrix');
} else if (userAge > 18) {
    console.log('Evil Dead');
}

// let age = prompt('Quel est ton age?');
// let nationalite = prompt('Quelle est votre nationalité');

let userAge2 = 19;
let nationality = 'français';

if (
    (nationality == 'français' && userAge2 >= 18) ||
    (nationality != 'français' && userAge2 < 18)
) {
    console.log('Vous avez le droit à une assistance juridique');
}

// let nationality2 = prompt('Quelle est votre nationalité?');
let nationality2 = 'anglais';
console.log(nationality2);

if (nationality2 == 'français') {
    let age = prompt('Quel est votre age?');
    if (age >= 18) {
        console.log('Vous avez droit aux APL');
    } else {
        console.log("Vous n'avez aucun droit!");
    }
} else {
    console.log("Vous n'avez aucun droit");
}

/* --------------------------- Les Boucles --------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions
// Il existe plusieurs types de boucles en Javascript

// Boucle à itération non definies (while) : tant que la condition est vraie
let i = 0;
while (i < 10) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`);
    i = i + 1; // Incrementer i pour éviter une boucle infinie
}

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
let a = 10;
let b = 99;

let temp = a;
a = b;
b = temp;
console.log(a, b);
