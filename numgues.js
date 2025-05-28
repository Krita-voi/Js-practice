const min = 50;
const max = 100;
const ans = Math.floor(Math.random()*(max - min + 1 )) + min;

let atempt = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Enter a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if ( guess < min || guess > max ){
        window.alert(`Please enter a valid number`);
    }
    else{
        atempt ++;
        if(guess < ans){
            window.alert("TOO LOW! TRY AGAIN! ");
        }
        else if(guess > ans){
            window.alert("TOO HIGH! TRY AGIAN! ");
        }
        else{
            window.alert(`Correct! You guessed it in ${atempt} try`);
            running = false;
        }
    }
}

