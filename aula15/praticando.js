let num = [5, 8, 2, 9, 3]

console.log(num)
num.push(7)
console.log(`Adicionado o número 7 ao vetor fica: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`O vetor colocado em ordem crescente é ${num}`)
//--------------------------------------------------------------
//Procurando um valor dentro de um vetor-------
let pos1 = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos1}.`)

let pos2 = num.indexOf(4)
if (pos2 == -1){
    console.log(`O valor não foi encontrado.`)
}else {
    console.log(`O valor 8 está na posição ${pos2}.`)
}


//Percurso para execução de vetor
for (let pos = 0;pos < num.length; pos++) {
    console.log(`Aposição ${pos} tem o valor ${num[pos]}.`)
}
console.log("A forma mais simplificada é a de baixo:")

//Forma mais simplificada para executar um vetor
for (let pos in num) {
    console.log(`Aposição ${pos} tem o valor ${num[pos]}.`)
}
