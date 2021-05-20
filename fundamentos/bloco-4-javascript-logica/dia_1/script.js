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

