let userName1;

userName1 = window.prompt("name");
console.log(userName1);
document.getElementById("myH1").textContent = `Hello ${userName1}`;




let userName;

document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("text").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`

}


