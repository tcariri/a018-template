// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]

//parte 1 da pratica sem map
// const arrayOriginal =[4,8,3,4,10,7,9,2]

// const multiplicaArrayFor = (array) =>{
//   let novoArray = []
//   for(let elem of array){
//     novoArray.push(elem * 3)
//   }
//   return novoArray
// }

// console.log(multiplicaArrayFor(arrayOriginal))

// const arrayParesfor = (array) =>{
//   let arrayResultado =[ ]
//   for(let elem of array){
//     if(elem %2 ===0){
//       arrayResultado.push(elem)
//       // uma segunda opção é elem %2===0 && arrayResutado.push(elem)
//     }
//   }
//   return arrayResultado
// }
//  console.log(arrayParesfor(arrayOriginal))

// const imprimirArray =(array,callback) =>{
//   const imprimir = callback(array)
//   console.log(imprimir)

// }

// imprimirArray(arrayOriginal,multiplicaArrayFor)
// imprimirArray(arrayOriginal,arrayParesfor) 

// parte 2 pratica usando map()
// const arrayOriginal =[4,8,3,4,10,7,9,2]
// const arrayTeste = [{nome:"thais",idade:25},{nome:"edina",idade:30}]

// const multiplica = arrayOriginal.map((cadaElem)=>{return cadaElem*3})
// const teste = arrayTeste.map(cadaElem => cadaElem.nome)

// console.log(multiplica)
// console.log(teste) 

// //parte 3 pratica usando o filter()

// const Pares = arrayOriginal.filter((cadaElem)=>{ return cadaElem %2 ===0})

// console.log(Pares)



const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


const exercicioA =(objeto) =>{
  const vidaCheia ={
    ...objeto,
    vida:100
  }
  return vidaCheia
}

  const pokemonsVidaCheia = pokemons.map(exercicioA)
  
console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((pokemons)=>{return pokemons.tipo ==='fogo'})
console.log(pokemonsDeFogo)