/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire en Javascript
/*
    Un commentaire multiligne
    en Javascript
*/

/* --------------------------- Affichage --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
console.log('Hello, world!');

// Afficher une boite de dialogue avec champs à remplir
// On doit récupérer dans une variable la valeur du prompt
// let response = prompt('Quel est votre age???');
// console.log(response);

/* --------------------------- Les Variables --------------------------- */

// Déclaration d'une variable
let uneVariable;

// Affectation d'une valeur à une variable
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules =/= minuscules )
let helloWorld = 'Hello, World!';
helloWorld = uneVariable;
let HELLOWORLD;

// Affichage d'une variable dans la console
console.log(helloWorld);

// On peut changer la valeur d'une variable
uneVariable = 'Je suis une nouvelle variable!';

// Differents type de variables :
// string (chaine de caractère)
let messages = 'une chaine de caractère';

// number (nombre)
let number = 20;
let decimal = 20.5;

// boolean (booléeén)
let boolean = true;
let boolean2 = false;

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

// Demander à l'utilisateur s'il accepte les cgv
// let agree = prompt('Acceptez-vous les cgv?');
let agree = 'oui';

// Si, Sinon (if, else)
if (agree == 'ok') {
    console.log('Vous avez acceptez les conditions!');
} else {
    console.log("Vous n'avez pas acceptez les conditions!");
}

// Si, Si Non Si, Sinon (if, else if, else)
// Si la condition est vraie le premier bloc d'instruction est exécuté
// Sinon il test la deuxième condition
// Sinon aucune condition n'est vraie il exécute le bloc final
if (agree == 'yes') {
    console.log('Vous etes redirigé vers le site en anglais');
} else if (agree == 'oui') {
    console.log('Vous etes redirigé vers le site en français');
} else if (agree == 'da') {
    console.log('Vous etes redirigé vers le site en russe');
} else {
    console.log('Vous ne pouvez acceder au site');
}

console.log('la suite...');

/* --------------------------- Les opérateurs de comparaison --------------------------- */

// ( ==, >, >=, <, <=, !=, ===)

/* --------------------------- Les opérateurs logiques --------------------------- */

// ET (&&), OU (||)

let variable = 'true';

if (variable == true) {
    console.log('droit de conduire');
}

// let age = prompt('Quel est ton age?');
let age = 19;

if (age < '13') {
    console.log('Action Man');
} else if (age >= '13' || age <= 18) {
    console.log('Matrix');
} else if (age > 18) {
    console.log('Evil Dead');
}

// let age = prompt('Quel est ton age?');
// let nationalite = prompt('Quelle est votre nationalité');

let age2 = 19;
let nationalite = 'français';

if (
    (nationalite == 'français' && age2 >= 18) ||
    (nationalite != 'français' && age2 < 18)
) {
    console.log('Vous avez le droit à une assistance juridique');
}

// let nat = prompt('Quelle est votre nationalité?');
let nat = 'fgerg';
console.log(nat);

if (nat == 'français') {
    let age = prompt('Quel est votre age?');
    if (age >= 18) {
        console.log('Vous avez droit aux APL');
    } else {
        console.log("Vous n'avez aucun droit!");
    }
} else {
    console.log("Vous n'avez aucun droit");
}

/* --------------------------- Les boucles --------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Boucle à itération non definies (while)
let i = 0;
while (i < 10) {
    let res = i * 7;
    i = i + 1;
    console.log(`${i} x 7 = ${res}`);
}

// Afficher la table de multiplication de 7
