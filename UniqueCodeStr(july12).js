
function decodeString(code) {
  let decipher = Number(code[0])
  let solution = ""
  for (let i = 1; i < code.length; i++) {
    let strValue = code[i].charCodeAt() + decipher
    solution += String.fromCharCode(strValue)
  }
  return solution
}

///////////////solution1-July12th2022-GDA////////

let code = helloworld
const obj = {

}
let newCode = ""
for(let i = 0; i<code.length; i++) {
  if(!obj[code[i]]){
    obj[code[i]] = true 
    newCode += code[i]
  }
}
console.log(newCode)
////////////////////
/////////////////solution2-KT/////////////

///////////////

