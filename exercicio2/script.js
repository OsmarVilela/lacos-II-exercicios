// SEM FUNÇÃO
/* const usuarioNumero = Number(prompt("digite um número"))

const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let i in numeros){
    const resultado = usuarioNumero * (Number(i)+1)
    const nTabuada = Number(i)+1
    console.log(`${usuarioNumero} x ${nTabuada} = ${resultado}`);
} */


// COM FUNÇÃO
const usuarioNumero = Number(prompt("digite um número"))

const tabuada = (num)=>{
const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let i in numeros){
    const resultado = num * (Number(i)+1)
    const nTabuada = Number(i)+1
    console.log(`${num} x ${nTabuada} = ${resultado}`);
}
}
tabuada(usuarioNumero)
tabuada(2)
