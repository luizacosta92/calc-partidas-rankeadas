# Sistema de Níveis do Herói

Este é um script em JavaScript para calcular o saldo de vitórias de um herói e determinar seu nível com base nesse saldo.

## Descrição

O código define duas variáveis principais:
1. `saldo` - Armazena o saldo de vitórias e derrotas do herói, calculado pela função `calcularSaldo`.
2. `nivel` - Determina o nível do herói com base no saldo, através da função `definirNivel`.

O script exibe o saldo de vitórias e o nível correspondente no console.

## Estrutura do Código

### Variáveis

- `saldo`: Calcula o saldo subtraindo as derrotas das vitórias.
- `nivel`: Define o nível do herói com base no saldo.

### Funções

#### `calcularSaldo(vitorias, derrotas)`

Recebe o número de vitórias e derrotas como parâmetros e retorna o saldo resultante:
```javascript
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}
```

A função definirNivel utiliza o valor de saldo para classificar o nível do herói em categorias.

```javascript
function definirNivel() {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}
```


### Exibição de Resultado
O script exibe o saldo e o nível no console.

### Melhorias Futuras
- Permitir que os valores de vitórias e derrotas sejam inseridos dinamicamente pelo usuário.
- Expandir o sistema de níveis com mais classificações.
- Criar uma interface visual para exibir o saldo e o nível do herói.
