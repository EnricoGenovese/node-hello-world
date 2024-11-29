/*
1. Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
2. Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
3. Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
4. Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run dev e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
5. Proviamo a passare da terminale una parola come argomento. da mostrare dopo “Hello”. Dovremo quindi stampare “Hello parola_passata”
*/

console.log("Hello World");

console.log("Hello Boolean");

// Most verbose 

// const myWord = process.argv[2]
// let defaultWord = "Boolean"

// if (myWord) {                --> when = true, 
// defaultWord = myWord      // "Hello + argument in terminal"
// }

// Ternary operator --> less verbose than the conditional

// let myWord = process.argv[2] !== null && process.argv[2] !== undefined ? process.argv[2] : "Boolean"

// Nullish coalescing operator --> least verbose

let myWord = process.argv[2] ?? "Boolean";

console.log(`Hello ${myWord}`)