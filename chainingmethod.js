let userName = window.prompt("Enter your name: ");

// no method chain
/*userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extra = userName.slice(1);
extra = extra.toLowerCase();
userName = letter + extra;

console.log(userName);*/


// using method chain

userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

console.log(userName);

