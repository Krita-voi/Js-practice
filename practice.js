const PI = 3.17;
let radius;
let circumference;

//radius = window.prompt("Enter the radius:");




console.log(circumference);


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = circumference;

}
