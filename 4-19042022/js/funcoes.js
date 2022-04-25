// encontra o maior valor em um array
function maior(numeros) {
  for (var c = 0; c < numeros.length; c++) {
    numeros[c] = parseInt(numeros[c]);
  }

  var m = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > m) {
      m = numeros[i];
    }
  }
  return m;
}

function menor(numeros) {
  var m = numeros[0];
  for (var i = 1; numeros.length; i++) {
    if (numeros[i] < m) {
      m = numeros[i];
    }
  }
  return m;
}

function verificarVazio(controle) {
  if (controle == "" || controle == null) {
    alert("este controle nao pode ficar vazio");
  }
}
function dataHora() {
  return (
    new Date().toLocaleDateString() + " - " + new Date().toDateTimeString()
  );
}
