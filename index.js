function mapToNegativize(sourceArray) {
   let newArr = []
   let fn = element => {newArr.push(element*-1)}
   sourceArray.forEach(fn)
   return newArr
}

function mapToNoChange(sourceArray) {
   return sourceArray
   let newArr = []
   let fn = element => {newArr.push(element)}
   sourceArray.forEach(fn)
   return newArr
}

function mapToDouble(sourceArray) {
   let newArr = []
   let fn = element => {newArr.push(element*2)}
   sourceArray.forEach(fn)
   return newArr
}

function mapToSquare(sourceArray) {
   let newArr = []
   let fn = element => {newArr.push(element**2)}
   sourceArray.forEach(fn)
   return newArr
}
 
function reduceToTotal(sourceArray, startingPoint = 0){
   sourceArray.forEach(element => {startingPoint += element})
   return startingPoint
}

function reduceToAllTrue(sourceArray) {
   let boolean = true
   sourceArray.forEach(element => {boolean = boolean && !!element})
   return boolean
}

function reduceToAnyTrue(sourceArray) {
   let boolean = false
   sourceArray.forEach(element => {boolean += !!element})
   return !!boolean
}
