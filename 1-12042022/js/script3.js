/*
script para solicitação de cor ao 
usuario. quando o usuario digita a cor 
desejada , então iremos mudar a cor de
fundo body. caso o usuario digite uma cor nao listada,
mudaremos a cor de fundo para uma pré estabelecida e sera
exibida uma mensagem ao usuario
*/

var cor = prompt("Digite\n\n"+
                "\n1 - Preto"+
                "\n2 - Amarelo"+
                "\n3 - Vermelho"+
                "\n4 - Azul"+
                "\n5 - Laranja");

if(cor == 1){
    document.body.style.backgroundColor="black";
}
else if(cor == 2){
    document.body.style.backgroundColor="yellow";

}
else if(cor == 3){
    
    document.body.style.backgroundColor="red";

}
else if(cor == 4){
    document.body.style.backgroundColor="blue";

}
 else if(cor == 5){
    document.body.style.backgroundColor="orange";

 }
 else{
    document.body.style.backgroundColor="teal";
    alert("Você digitou uma oção inexistente")

 }