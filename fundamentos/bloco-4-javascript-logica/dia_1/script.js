/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let a = 0;
let b = 0;
let c = 0;

function soma(a,b){
  console.log(a + b);
}
//soma(5,6);
function subtracao(a,b){
  console.log(a - b);
}
//subtracao(7,2);
function multi(a,b){
  console.log(a * b);
}
//multi(6,6);
function divisao(a,b){
  console.log(a / b);
}
//divisao(10,5);
function modulo(a,b){
  console.log(a % b);
}
//modulo(8,3);

 /* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/

function maiorNum(a,b){
  if(a > b){
    console.log(a);
  }else {
    console.log(b);
  }
}
//maiorNum(8,7);

/* 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

function maior3(a,b,c){
  if(a > b && a > c){
    console.log(a);
  }else if(b > a && b > c){
    console.log(b);
  }else {
    console.log(c);
  }
}
//maior3(8,8,10);

/* 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário*/

function valorDefi(a){
  if(a > 0){
    console.log("positive");
  }else if(a < 0){
    console.log("negative");
  }else {
    console.log("zero");
  }
}
//valorDefi(-6);

/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

let angulo1 = 30;
let angulo2 = 50;
let angulo3 = 100;
let triangulo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;
let somaTri = angulo1 + angulo2 + angulo3;

if(triangulo){
  if(somaTri === 180){
//    console.log(true);
  } else {
 //   console.log(false);
  }
} else {
 // console.log("Erro")
}

/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

let peca;

function moviPeca(peca) {
  peca = peca.toLowerCase();
  if(peca === "horse"){
    console.log("Movimenta em proporção de 2:1, formando um L");
  }
  else if(peca === "bishop"){
    console.log("Movimenta em diagonal");
  }
  else if(peca === "king"){
    console.log("Movimenta em todas as direções somente uma casa.");
  }else {
    console.log("Erro.")
  }
}
// moviPeca("KinG");

/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota;

function converte(nota){
  if(nota >= 90){
    console.log("A");
  }else if(nota >= 80){
    console.log("B");
  }else if(nota >= 70){
    console.log("C");
  }else if(nota >= 60){
    console.log("D");
  }else if(nota >= 50){
    console.log("E");
  }else if(nota < 50 && nota >= 0){
    console.log("F");
  }else {
    console.log("Erro");
  }
}
// converte(nota);

/* 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let num1;
let num2;
let num3;

function par(num1,num2,num3){
  if(num1 % 2 === 0){
    console.log(true);
  }else if(num2 % 2 === 0){
    console.log(true);
  }else if(num3 % 2 === 0){
    console.log(true);
  }else {
    console.log(false);
  }
}
// par(9,5,4);

/* 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

function impar(num1,num2,num3){
  if(num1 % 2 !== 0){
    console.log(true);
  }else if(num2 % 2 !== 0){
    console.log(true);
  }else if(num3 % 2 !== 0){
    console.log(true);
  }else {
    console.log(false);
  }
}
// impar(8,5,4);

/* 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoProd = 4;
let valorVenda = 8;
let valorTotal;
let imposto = 1.2;
let lucro;

if(custoProd >= 0 && valorVenda >= 0){
  valorTotal = custoProd * imposto;
  lucro = (valorVenda - valorTotal) * 1000;
 // console.log(lucro);
} else {
 // console.log("Erro, valorer menores que zero");
}

/* 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let inss;
let ir;
let salarioBruto = 3500;
let salarioLiquido;

if(salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
} else if(salarioBruto <= 2826.65){
  inss = salarioBruto * 0.09;
} else if(salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
} else {
  inss = 570.80;
}

salarioLiquido = salarioBruto - inss;

if(salarioLiquido <= 1903.98){
  ir = 0;
} else if(salarioLiquido <= 2826.65){
  ir = (salarioLiquido * 0.075) - 142.80;
} else if(salarioLiquido <= 3751.05){
  ir = (salarioLiquido * 0.15) - 354.80;
} else if(salarioLiquido <= 4664.68){
  ir = (salarioLiquido * 0.225) - 636.13;
} else {
  ir = (salarioLiquido * 0.275) -869.36;
}

// console.log("Resultado do salário é: " + (salarioLiquido - ir));