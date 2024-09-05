const alertNoName = document.getElementById("alertNoName");
const btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function(event){

    if(this.localStorage.getItem("nombre")!=null){
        alertNoName.innerHTML= `Hola ${this.localStorage.getItem("nombre")}, Bienvenid@ de nuevo`;
    }//if !=null
    alertNoName.style.display="block";
})//load

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    //objeto para refrescar la pasgina
    location.href="welcome.html";
})