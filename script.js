function ver(id) {
  var secciones = document.getElementsByClassName('seccion');
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove('visible');
  }
  document.getElementById(id).classList.add('visible');
}

function desc(texto) {
  document.getElementById('descripcion').textContent = texto;
}

function agregarRegalo() {
  var input = document.getElementById('regalo');
  if (input.value == '') return;
  var li = document.createElement('li');
  li.textContent = '🎁 ' + input.value;
  document.getElementById('listaRegalos').appendChild(li);
  input.value = '';
}

var total = 0;
function agregarPlato(nombre, precio) {
  var li = document.createElement('li');
  li.textContent = nombre + ' - Bs. ' + precio;
  document.getElementById('carrito').appendChild(li);
  total += precio;
  document.getElementById('total').textContent = total;
}