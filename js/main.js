/* --------------------------- LES COMMENTAIRES --------------------------- */

/*
    Un commentaire est un texte qui ne sera pas exécuté par le navigateur
    Il permet de documenter le code, de le rendre plus lisible
    Il permet de désactiver une partie du code
*/

// Un commentaire sur une ligne en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/* --------------------------- L'AFFICHAGE --------------------------- */

// Afficher un message dans la console de debbugage du navigateur
// On utilise la fonction console.log()
console.log('Hello, world!');

// Afficher une boite de dialogue avec champs à remplir
// On utilise la fonction prompt()
// prompt('Quel est votre age?');

// On doit récupérer dans une variable la valeur du prompt

// let response = prompt('Quel est votre age???');
// console.log(response);

/* --------------------------- LES VARIABLES --------------------------- */

/*
    Les variables ne peuvent pas commencer par un chiffre
    Les variables ne peuvent pas contenir de caractères spéciaux (-, +, *, /, %, $, @, &, ...)
    Les variables ne peuvent pas contenir d'espaces
*/

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

/* --------------------------- LES TYPES DE VARIABLE --------------------------- */

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

/* --------------------------- LA CONCATENATION --------------------------- */

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

/* --------------------------- LES INSTRUCTIONS CONDITIONNELLES --------------------------- */

// Demander à l'utilisateur s'il accepte les CGV
// let acceptCgv = prompt('Acceptez-vous les CGV?');
let acceptCgv = 'oui';

// Si, Sinon (if, else)
if (acceptCgv == 'ok') {
    console.log('Vous avez acceptez les conditions!');
} else {
    console.log("Vous n'avez pas acceptez les conditions!");
}

// if, else if, else : (Si, Sinon Si, Sinon)

/*
    Si la condition est vraie le premier bloc d'instruction est exécuté
    Sinon il test la deuxième condition
    Sinon aucune condition n'est vraie il exécute le bloc final (else)
*/
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

/* --------------------------- LES OPERATEURS DE COMPARAISON --------------------------- */

/*
    Les opérateurs de comparaison permettent de comparer deux valeurs
    Ils renvoient un résultat booléen (true, false)
*/

/*
    (> ou >=) supérieur ou supérieur ou égal à
    (< ou <=) inférieur ou inférieur ou égal à
    (!=) différent de
    (===) strictement égal à
    (!==) strictement différent de
*/

// (==) égal à
let x = 10;
let y = 10;

console.log(x == y);

/* --------------------------- LES OPERATEURS LOGIQUE --------------------------- */

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

/* --------------------------- LES BOUCLES --------------------------- */

/*
    Les boucles sont des structures permettant d'executer plusieurs fois des instructions

    La principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/

// Boucle à itération non definies while(){...} : tant que la condition est vraie
let i = 0;
while (i < 10) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`);
    i = i + 1; // Incrementer i pour éviter une boucle infinie
}

/*
    Déclarer vos revenus (20 000 euros)
    Tant que vos revenus ne sont pas supérieur à 30 000 euros
    Chaque année mes revenus augmente de 10% grace à mes placement
    Au bout de combien d'années mes revenus dépasseront 30 000 euros ?
*/
let revenu = 20000;
let year = 0;

while (revenu < 30000) {
    revenu = revenu + revenu * 0.1;
    year = year + 1;
}

console.log(`il faudra ${year} années, mon revenu sera de ${revenu} `);

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/
let marrakech = 1000000;
let agadir = 500000;
let year1 = 0;
while (agadir < marrakech) {
    agadir *= 1.08;
    marrakech += 50000;
    console.log(`il faudra ${year1} années avant que..`);
    year = year + 1;

    // Sucre syntaxique pour incrementer une variable
    /* Le sucre syntaxique est un concept en programmation qui fait référence à des fonctionnalités ou des constructions de langage qui permettent d'écrire du code de manière plus concise ou plus expressive, sans ajouter de nouvelles fonctionnalités à proprement parler.
    */
    // year1 +=1
    // year++;
}

// Boucle à itération definies (for)
for (let i = 0; i < 10; i++) {
    let res = i * 7;
    console.log(`${i} x 7 = ${res}`);
}

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur

// Demande à l'utilisateur un nombre

// Tant que la reponse n'est pas bonne
// Si sa reponse est inferieur au chiffre magique
// Le nombre magique est plus grand, donne moi une autre réponse
// Sinon
// Le nombre magique est plus petit, donne moi une autre réponse

// Le nombre magique était bien
let magic = 135;
let res = prompt('Donne moi ta réponse');

while (res != magic) {
    if (res < magic) {
        res = prompt('trop petit');
    } else {
        res = prompt('trop grand');
    }
}

console.log('bravo');

/* --------------------------- LES FONCTIONS --------------------------- */

/*
    Une fonction est un bloc d'instructions réutilisable
    Elle peut prendre des paramètres et renvoyer un résultat
    Elle est déclarée avec le mot clé function
*/

// Déclaration d'une fonction
function helloWorld() {
    console.log('Hello, world!');
}

// Appel de la fonction
helloWorld();

/*
    Une fonction renvoie un résultat avec le mot clé return
    Les autres variables déclarées dans la fonction sont locales à la fonction
    Les autres instructions après le return ne sont pas exécutées
*/
function calculNasa() {
    let res = 65765765;
    let essence = 8977897;
    let anneeLumiere = 798786786;
    let solution = ((res * essence) / anneeLumiere) * 675765675;

    return solution;
}

// console.log(solution);

let chaussette = calculNasa();

/*
    Une fonction peut prendre des paramètres
    Les paramètres sont des variables locales à la fonction
    Ils permettent de passer des valeurs à la fonction
*/
function tableMultiplication(x, y) {
    for (let i = 0; i < y; i++) {
        let res = i * x;
        console.log(`${i} x ${x} = ${res}`);
    }
}

tableMultiplication(12, 8);
tableMultiplication(2, 20);

// Ecrire une fonction qui affiche Bonjour
function hello() {
    console.log('Bonjour');
}

hello();

function helloYou(name) {
    return 'Bonjour ' + name;
}

let hello3 = helloYou('Rachid');
console.log(hello3);

// Ecrire une fonction qui prend un parametre et qui affiche Bonjour [le Prénom passé en parametre]

// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher

// Algorithme qui calcule et affiche le carre d'un nombre

// // Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
// let a = 10;
// let b = 99;

// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// // Boucle à itération definies (for) : pour un nombre de fois donné
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // Ecrire un algorithme qui affiche les nombres pairs de 0 à 100
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// // Ecrire un algorithme qui affiche les nombres impairs de 0 à 100
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

// // Fonction avec paramètres et renvoi d'une valeur
// function addition(a, b) {
//     return a + b;
// }

// let resultat = addition(10, 20);
// console.log(resultat);

// // Ecrire une fonction qui prend en paramètre un nombre et renvoie le carré de ce nombre
// function carre(nombre) {
//     return nombre * nombre;
// }

// let res = carre(5);
// console.log(res);

// // Ecrire une fonction qui prend en paramètre un nombre et renvoie le double de ce nombre
// function double(nombre) {
//     return nombre * 2;
// }

// let res2 = double(5);
// console.log(res2);

// // Ecrire une fonction qui prend en paramètre un nombre et renvoie le triple de ce nombre
// function triple(nombre) {
//     return nombre * 3;
// }

// let res3 = triple(5);
// console.log(res3);

// // Ecrire une fonction qui prend en paramètre un nombre et renvoie le nombre suivant
// function suivant(nombre) {
//     return nombre + 1;
// }

// let res4 = suivant(5);
// console.log(res4);
