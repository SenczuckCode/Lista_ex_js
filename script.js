// console.log("hello world");

// let nome = "Pedro";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);


// let n1 = 1;
// let n2 = 2;
// console.log(n1 + n2)

// function saudacao(){
//     console.log("Olá meu nome é " + nome);
// };
// saudacao();

// function somar (n3,n4){
//     console.log(n3 + n4)
// }
// somar(15,17);

// function somarNumeros() {

//     let soma = 0;
//     let continuar = true;


//     while (continuar) {
//         let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar) :"));

//         //soma += numero;

//         if (isNaN(numero)) {
//             alert("Por favor, digite um número válido!")
//         } else {
//             soma += numero;
//             console.log(soma);
//         }

//         continuar = confirm("deseja adicionar mais um número.");
//     }
//     alert("A Soma dos números é: " + soma);
//     console.log("A soma dos números é: " + soma);
// }

// somarNumeros();

// for (let i = 0; i < 10; i++){
//     console.log(i);

// }

// console.log("Lançamento do foguete em + " + i);

// let ganho_total = 0;
// let gastos_total = 0;

// for (let i = 0; i < 12; i++){
//     let ganho = parseFloat(prompt("Digite o ganho do mês " + (i + 1) + ":"));
//     let gasto = parseFloat(prompt("Digite o gasto do mês " + (i + 1) + ":"));

//     ganho_total += ganho;   
//     gastos_total += gasto;  

// }


// let saldo_final = ganho_total - gastos_total;

// console.log("Ganho total do ano: " + ganho_total);
// console.log("Gastos total do ano: " + gastos_total);
// console.log("Saldo final do ano: " + saldo_final);

// if (saldo_final > 0) {
//     console.log("Você teve lucro");
// } else {
//     console.log("Você não teve lucro");
// }    



// let numeros = [];

// for(let i = 0; i < 4; i++) {
//     numeros.push(parseFloat(prompt("Digite um número:")));      
// }
//     numeros.sort((a , b) => a - b);
//     console.log("Números em ordem crescente: " + numeros);


// let numero = Number(prompt("Digite um número inteiro:"));

// if (numero % 2 == 0) {
//     numero += 1;
// } else {
//     numero += 1;
// }
// console.log("Resultado:", numero);

// let letra = prompt("Digite uma letra:").toLowerCase();  

// if ("aeiou".includes(letra)) {
//     console.log("A letra digitada é uma vogal");
// } else {
//     console.log("A letra digitada é uma consoante");
// }