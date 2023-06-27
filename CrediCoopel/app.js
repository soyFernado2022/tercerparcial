let empleo=document.querySelector("#empleado")
let cantidad=document.querySelector("#cantidad")
let canti=document.querySelector("#canti")
let salario=document.querySelector("#salarioNeto")
let img=document.querySelector("#img")
let bono=document.querySelector("#bono")
let intereses=document.querySelector("#intereses")

let r1=document.querySelector("#p1")
let r2=document.querySelector("#p2")
let r3=document.querySelector("#p3")


cantidad.oninput=()=>{
    canti.innerHTML=cantidad.value
    calcular()
}
empleo.onchange=()=>{
    calcular()
}
r1.onchange=()=>{
    calcular()
}
r2.onchange=()=>{
    calcular()
}
r3.onchange=()=>{
    calcular()
}

const calcular=()=>{
let c=0
let d=parseFloat(document.querySelector("#cantidad").value)
let pinter=0


if(r1.checked){
pinter=0.05
mes=6
}
else if(r2.checked){
pinter=0.10
mes=12
}
else if(r3.checked){
pinter=0.15
mes=18
}




if(empleo.value==1){
    c=10000
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario*pinter)+c
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="img/tv.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">TV</p></div>'
}
else if(empleo.value==2){
    c=125000
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario*pinter)+c
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="img/moto.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">MOTO</p></div>'
}
else if(empleo.value==3){
    c=20000
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario*pinter)+c
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="img/sala.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">SALA</p></div>'
}
else if(empleo.value==4){
    c=5000
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario*pinter)+c
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="img/refri.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">REFIGERADOR</p></div>'
}
else if(empleo.value==5){
    c=6000
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario*pinter)+c
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="img/lavadora.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">LAVADORA</p></div>'
}
}