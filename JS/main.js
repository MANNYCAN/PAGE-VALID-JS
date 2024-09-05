const txtName = document.getElementById("txtName");
const btnAgregar = document.getElementById("btnAgregar");
const alertValidaciones = document.getElementById("alertValidaciones");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    if (txtName.value.trim().length<3){ 
        alertValidaciones.innerHTML="El nombre introducido no es correcto. Intenta nuevamente";
        alertValidaciones.style.display = "block";
        return false; //Simo es correcto sale
    }
    localStorage.setItem("nombre",txtName.value);//Guardamos el valoe Name
})















// let isValid = true;
// let contador = 0;
// let nameInput = txtName.value;

// btnAgregar,addEventListener("click", function(event){
//     event.preventDefault();
//     txtName.style.border="";
//     alertValidacionesTexto.innerHTML = "";
//     alertValidaciones.style.display = "none";
//     //isValid = true;
//     if(txtName.value.trim().length<3){
//         txtName.style.border="solid red medium";
//         alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto.<br/>";
//         alertValidaciones.style.display = "block";
//         //isValid = false;
//         //return false;
//     }// if length<3
    
//     if(isValid){
//         //PARA EL OBJETO DE LA TABLA DEFINOMS ELEMENTO---------
//         let elemento = {"nombre":txtName.value};
       
//         localStorage.setItem("datos",JSON.stringify(datos))
//         //TODO ESTO DE ARRIBA ES PARA ANAEXAR DAROS DE TIPO OBJETO 
//         //A NUESTRO ARREGLO Y CONVERTIRLOS A STRING ---------
//         txtName.value = "";
//         txtName.focus(); 
//     }/
// })

// txtName.addEventListener("blur", function(event){
//     txtName.value = txtName.value.trim();
// }) //txtName.addEventListener

// window.addEventListener("load", function(){
//     //null es para saber si hay datos que cargar 
//     if (this.localStorage.getItem("nameInput") != null){
//         nameInput = String(this.localStorage.getItem("nameInput"));
//     }//!=null
// })