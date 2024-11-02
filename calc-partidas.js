
//Variáveis para definir os dados 
let saldo = calcularSaldo(105, 39);
let nivel = definirNivel();


//Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
   
}
//Função para definir o nível com base no saldo alcançado 
function definirNivel(nivel) {
  if (saldo <= 10) {
  nivel = "Ferro"}
  else if (saldo <= 20) {
    nivel = "Bronze"
  }
  else if (saldo <= 50) {
    nivel = "Prata"
  }
  else if (saldo <= 80) {
    nivel = "Ouro"
  }
  else if (saldo <= 90) {
    nivel = "Diamante"
  }
  else if (saldo <= 100) {
    nivel = "Lendário"
  }
  else {
    nivel = "Imortal"
  }
  
  return nivel 
}



console.log(`O Herói tem saldo de ${saldo} vitórias e está no nível ${nivel}`);