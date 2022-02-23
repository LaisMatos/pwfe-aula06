'use strich'


/* ########## Paradigma Declarativo ##########
    Declaração de argumentos no paradigma declarativo
    ORDEM DOS ARGUMENTOS: (1° DADO/VALOR , 2° INDICE, 3° ARRAY) --> <MAP> <FILTER>
    ORDEM DOS ARGUMENTOS: (1°ACUMULADOR, 2° DADO/VALOR , 3° INDICE, 4° ARRAY) --> <REDUCE>
    <map> é um método que percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.
    <filter> é um método que retorna um novo array, mas somente com os elementos que a função devolve true.
    <reduce> é um método que acumula um único valor de uma matriz 
*/

//declaração de array
const numero = [10,20,30,40,50,60,100,110,120]

//########## programação usando MAP ##########
/*const limite = numero.length -1 // por que usou const?
let numero100 = []   //por que usou let?
for (let index = 0; index < limite; index++) {
    numero100[index]= numeros[index]+100
    
}
                    Ou

const adicionar100 = (numero)=> numero +100
const numero100=numero.map(adicionar100)  */


// ########## programação usando FILTER ##########
/*let contador=0
const limite = numeros.length-1
const numerosMenores100=[]
for (let index = 0; index < limite; index++) {
    if(numero[index]<=100){
        numerosMenores100[contador]=numero[index]
        contador++
    }
    
}
                    OU

const verificador=(numero)=>numero<=100
const numerosMenores100 = numero.filter(verificador)*/


// ########## programação usando REDUCE ##########
/*const limite=numero.length -1
let total=0
for (let index = 0; index < limite; index++) {
   total+=nimero[index]
    
}
                    OU

const soma=(a,b) => a+b
const total=numeros.reduce(soma,0)



*/

//saída de dados
//console.log("STRING",ARRAY)

/* *******EXERCICIOS******** */
//CRIAR UM NOVO ARRAY COM OS VALORES AO QUADRADO
//CRIAR UM NOVO ARRAY COM OS VALORES PARES
//CALCULAR A MÉDIA DOS VALORES
//CALCULAR A SOMA DOS VALORES IMPARES
//CALCULAR O VALOR TOTAL SABENDO QUE CADA VALOR TEVE 20% DE DESCONTO


