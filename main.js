const botoes = document.querySelectorAll(".botao");
console.log(botoes)

for (let i=0; 1 < botoes.length; i++) {
     botaoes[i].onclick = function (){
        for (let j = 0; j < botoes.length; j++) {
           botoes(i).classList.remove("ativo");
        }
        botoes(i).classList.add("ativo");
     };
}