let autos=JSON.parse(localStorage.getItem("autos"));
if(!autos){
  localStorage.setItem("autos",JSON.stringify([]));
}

var add = document.querySelector("#agregar")
add.onclick = () => {
  //RECOPILA DATOS
  let marca = document.querySelector("#marca").value;
  let modelo = document.querySelector("#modelo").value;
  let año = document.querySelector("#año").value;
  let color = document.querySelector("#color").value;
  //VALIDAR DATOS
  if (marca.trim() === '' || modelo.trim() === '' || año.trim() === '' || color.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'CAMPOS VACIOS',
      footer: 'CECYTEM 2023'
    })
    return;
  }
  let auto ={marca,modelo,año,color}
  autos.push(auto);
  localStorage.setItem("autos",JSON.stringify(autos))
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalAuto").click()
  mostrarAutos();
 

}


const mostrarAutos=()=>{
  var autosHTML="";
  autos=JSON.parse(localStorage.getItem("autos"))
  let i=1;
  autos.map(auto=>{
    autosHTML+=`<div class="card bg-white text-dark w-75 m-auto mb-2 p-4">
    <p><b>Marca: </b>${auto.marca}</p>
    <p><b>Modelo: </b>${auto.modelo}</p>
    <p><b>Año: </b>${auto.año}</p>
    <p><b>Color: </b>${auto.color}</p>
    <button class="btn btn-danger" onclick="eliminarAuto(${i})">Eliminar</button>
    </div>` 
    
  })
  document.querySelector("#listAutos").innerHTML=autosHTML;
}
const eliminarAuto=(id)=>{
  Swal.fire({
    title: 'Estas seguro de eliminar Auto?',
    showDenybutton: true,
    confirmButtonText: 'Si',
    denyButtonText: 'No',
  }).then((result)=>{
    if (result.isConfirmed) {
      autos=JSON.parse(localStorage.getItem("autos"))
      let autos2=new Array();
      let i=1
      autos.map(auto=>{
        if (i!=id){
          autos2.push(auto)
        }
        i++;
      })
      localStorage.setItem("autos",JSON.stringify(autos2))
      mostrarAutos();
    }else if (result.isDenied){
      return;
    }
    
    
  })
}

