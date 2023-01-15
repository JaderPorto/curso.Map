/*
  MAP
   -Cria um novo array, a partir do array percorrido (array original)
   -Cria um novo array com a mesma quantidade de itens do array original
   -Aceita 3 parametros
     - item do array
     - index
     - array completo
*/ 


const numbers = [1,2,3,4,5]; // O DOBRO DE TODOS ESSES NUMEROS

const newNumbers = numbers.map(function(number,index,array) {
    console.log(index)
    console.log(array)
    return number * 10

}) 
console.log(newNumbers)



const clients =[
    {
        name:"Jader",
        age: 40,       
    },
    {
        name: "Aline",
        age:29,
    },
    {
        name:"Pedro",
        age:43,
    },

];

const newCliets = clients.map(function(clients,index,array){
    console.log(index)
    console.log(array)
    return clients.name

})

console.log(newCliets)