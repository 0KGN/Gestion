var block = document.getElementById("add")
var pass = document.getElementById("scpass")
var check = document.getElementById("checkbox")
var submit = document.getElementById("ingreso")
var inco = document.getElementById("incorrecto")
var ingpss = "KGN"

check.addEventListener('click',verpass)
submit.addEventListener('click',mostrar)

function verpass(){
    if (check.checked){
        pass.type="text"
    }
    else{
        pass.type="password"
    }

    }

function mostrar(){
    if(pass.value === ingpss){
        block.style.display= "none"
    }
    else{
        inco.style.display = "block"
        
    }
}

