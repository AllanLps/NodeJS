let botao = document.querySelector("#botao");
botao.addEventListener("click", popup)

function popup() {
   let nome =  prompt("qual seu nome?");
   let idade = prompt("qual é a sua idade?");
   let cidade = prompt("onde você nasceu?");

   document.write(`Seu nome é ${nome}, 
   sua idade é ${idade} e a cidade que você nasceu é ${cidade}`)

}

