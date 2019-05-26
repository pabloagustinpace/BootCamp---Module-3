// Declaracion de la clase y el metodo solicitado por enunciado
class Info{
  constructor(nombre, email, tecnology, message){
      this._name = nombre;
      this._email = email;
      this._tecnology = tecnology;
      this._message = message;
  }
}

//Event listener
document.getElementById("button").addEventListener("click",eventHandler);

//Event handler
function eventHandler(event){
  
  event.preventDefault();

  var var1 = document.querySelector("#nombre").value;
  var var2 = document.querySelector("#email").value;
  var var3 = document.querySelector("#tecnologia").value;
  var var4 = document.querySelector("#mensaje").value;
  
  var inf = new Info(var1,var2,var3,var4);

  arrInfo.push(inf);

  var cStr = JSON.stringify(arrInfo);
  
  localStorage.setItem("informacion", cStr);
  
  toggleModal();
  
  document.getElementById('data').reset();
}

var arrStr = localStorage.getItem('informacion');

if(arrStr != null){
var arrInfo = JSON.parse(arrStr);
}else{
    var arrInfo = [];
}

const closeButton = document.getElementById('close-modal');
const modal = document.getElementById('modal-dialog');

function toggleModal(){
  modal.classList.toggle('hidden');
}

closeButton.addEventListener('click', toggleModal);
