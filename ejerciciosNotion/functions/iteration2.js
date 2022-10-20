/*1.2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función*/
const name = ["Alejandro",
 "Maria de los Angeles", 
 "Carla", 
 "Cecilia", 
 "Aaron"]
 
 const findLongestWord = (list) => {
    let longestWord = " ";
    for(const item of list) {
        longestWord = item.length > longestWord.length ? item : longestWord;
    }
    return longestWord;
  };
  
  console.log(findLongestWord(name))


