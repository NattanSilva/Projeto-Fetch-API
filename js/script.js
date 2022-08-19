console.log("Testando branch dev");

const valor = () => {
  let numero1 = parseInt(prompt("Digite o primeiro valor:"));
  let numero2 = parseInt(prompt("Digite o segundo valor:"));

  return soma(numero1, numero2);
}

const soma = (num1, num2) => {
  return num1 + num2;
}

console.log(valor(4,8));