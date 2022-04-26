function make() {
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      var saida = "<div id=make>";
      dados.map((item, ix) => {
        saida += `
            <div>
            <img src=${item.image_link}>

            
            <h2>${item.name}</h2>
            

            
          
          <p class=preco>$${item.price}</p>

          </div>
            `;
      });

      saida += "</div>";
      document.body.innerHTML = saida;
    });
}
