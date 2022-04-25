var pagina = window.location;
console.log(pagina);

pagina = pagina.href.split("/");
console.log(pagina);

pagina = pagina[pagina.length - 1];
console.log(pagina);

if (pagina == "home.html") {
  document.body.style.backgroundColor = "rgb(150,150,150)";

  /*
    acessar a caixa(unput) chamada numeros, capturar
    esses numeros e utilizar a função maior para
    encontrar o maior valor entre eles
    */

  // referencia um elemeneto de input da tela home

  const txtN = document.getElementById("txtN");

  // aplicar um evento chamado onblur, ou seja
  // quando a caixa perder o foco

  txtN.onblur = function () {
    //   vamos capturar o valor contido em
    // txtN, ou seja, os numeros dentro
    // desta caixa e alocar em um array
    var valores = txtN.value.split(",");
    alert(maior(valores));
  };
}

if (pagina == "formulario.html") {
  document.body.style.backgroundColor = "rgb(120,200,150)";
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");

  nome.onblur = function () {
    verificarVazio(nome.value);
  };

  email.onblur = function () {
    verificarVazio(email.value);
  };

  cpf.onblur = function () {
    verificarVazio(cpf.value);
  };

  telefone.onblur = function () {
    verificarVazio(telefone.value);
  };
}
