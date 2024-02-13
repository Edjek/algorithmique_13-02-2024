/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire en Javascript
/*
    Un commentaire multiligne
    en Javascript
*/

/* --------------------------- Affichage --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
console.log('Hello, world!');

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

uneVariable = 'Je suis une nouvelle variable!';

// Les differents type de variables
let messages = 'un message';
let number = 20;
let decimal = 20.5;
let boolean = true;
let boolean2 = false;

// Les opérations arithmétiques (+, -, *, /)
// Déclarer 3 variables sum, number1, number2
// Affecter le nombre 10 à number1
// Affecter le nombre 20 à number2
// Affecter à sum l'opération de multiplication des 2 variables précédentes
// Afficher le resultat en console
let sum;
let number1 = 10;
let number2 = 20;
sum = number1 * number2;
console.log(sum);

/* --------------------------- La Concatenation --------------------------- */

let firstName = 'Rachid';
let lastName = 'EDJEKOUANE';

// Pour déclarer une chaine de caractère on peux utiliser ('', "", ``)
// Cela a un impact sur la façon de concatener les variables et les chaines de caractères
let city = 'PARIS';
city = "PARIS";
city = `PARIS`;

// Déclarer une variable city, afficher le message "j'adore vivre à <city>"
console.log("j'adore vivre à " + city);
console.log('j\'adore vivre à ' + city);

// Modifier le message pour afficher j'adore vivre à <city> et je m'appelle <firstName> <lastName>
console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`);
