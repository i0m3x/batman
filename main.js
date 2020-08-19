const _ = {}
// takes two params - one is an array, the other is a function (nested function are closure)
_.each = (array, iteratee) => { //_.each(list, iteratee, [context]) 
  //Each invocation of iteratee is called with three arguments: (element, index, list)
  //print it out to test it
  console.log(array)
  //print it out to see what's being iterated over
  console.log(iteratee)
  // 
  for(let i =0; i < array.length ; i++){
    //give an alias
    let var1 = array[i]
    // as Evan showed, place these three (iteratee being the predicate)
    iteratee(var1, i, array) //f(x) taking three args
  }
  // show each index in the array
  //only defined within lexical scope, so it doesn't show up outside of the function
}

_.map = (array, iteratee) => {
  //initialize an empty array
  let newArray =[]
  // a map performs a function on a list so iterate!
  for(let i = 0; i <array.length; i ++){
    //now access the value at the given index
    let value = array[i]
    //now append them to the new array - we add 3 arguments not b/c it has to have three, but b/c it CAN (kinda like 'slice')
    newArray.push(iteratee(value, i, array))
  }
  // return the formerly empty array with new values that we performed the function upon
  return newArray
}
_.filter = (array, predicate) => {
  //takes 3 args (list, predicate, [context])
  //create empty array
  let arrayj = []
  // if(array === undefined){
  //   array = []
  // }

  //look through each value in the list
  for(let i = 0; i <array.length; i++){
    let value = array[i]
    if(predicate(value, i, array) === true) {
      arrayj.push(value)
    }
  }
  //return array of all values that are truthy from the predicate
  return arrayj
  //return updated list
}

//https://underscorejs.org/#iteratee
//Looks through each value in the list, returning the first one that passes a truth test (predicate)
//
_.find = (array, predicate) => {
  // traverses an array
  for(let i = 0; i <array.length ; i++){
    let value = array[i]
    //predicate transformation
    if (predicate(value, i, array)){
      return value
    

    //mistakes: I started it with an empty array - it didn't need that
    }
  }
}
//randrange from python
// 
//Returns a random integer between min and max, inclusive.
_.random = (min, max) => {
  // iterate through min and max
  //var result = Math.floor(Math.random()*max.length)
  return min + Math.floor(Math.random()*max-min +1)
  //after consulting Pete, we want to make this like the one in Matthew's class, but we also want it to return

  // add a one b/c it is inclusive

  
  
}
//MISTAKE
// _.range = (start, stop, step) => {
//   // Returns a list of integers from start (inclusive) to stop (exclusive)
//   for(let i = start; i< stop ; step++){
//     return i
//   }

// }
_.range = (start, stop, step=1) => {
  let array = []
  // Returns a list of integers from start (inclusive) to stop (exclusive)
  for(let i = start; i< stop ; i+=step){
    array.push(i)
  }
  return array
}

// _.range = (start, stop, step) => {
//   let array = []
//   // Returns a list of integers from start (inclusive) to stop (exclusive)
//   for(let i = start; i< stop ; step++){
//     array.push(i)
//   }
//   return array
// }
_.extend = (...args) => {
  result = {}
  let argsList = [...args]
  for(let i = 0; i<argsList.length; i++){
    entry = argsList[i]
    for (const property in entry){
      result[property] = entry[property]
    }
  }
  return result
}

//take objects combine into one

//edge case -if empty obj, return empty obj




export default _
