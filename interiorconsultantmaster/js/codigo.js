

//Mandar llamar las funcriones haciendo uso del (DOM)
document.getElementById("menu-mobile").style.display = "none";
let iconCierreMenu = document.getElementById("icon-x")
iconCierreMenu.addEventListener("click",  mostrarMein) 

let iconAperturaMenu = document.getElementById("icon-apertura") 
iconAperturaMenu.addEventListener("click",  ocultar) 



// Ocultar 
function ocultar() {
    document.getElementById("header").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("menu-mobile").style.display = "block";


}

//Mostrar
function  mostrarMein() {
    document.getElementById("menu-mobile").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("main").style.display = "block";
    document.getElementById("footer").style.display = "block";
}


