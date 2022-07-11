// Write your code below this line

function decodeString(code) {
  // Capture the number to decode the string
  let decipher = Number(code[0])
  // Create a solution string to add letters to one-by-one
  let solution = ""
  // Start iterating through the string, starting at index 1 to avoid the decipher
  for (let i = 1; i < code.length; i++) {
    // Capture the ascii code for the given letter, plus the value of the decipher
    let strValue = code[i].charCodeAt() + decipher
    // Add the letter the belongs to the updated ascii value to the solution string
    solution += String.fromCharCode(strValue)
  }
  // return the solution string
  return solution
}


decoder= (decarr)=> {
  decarr =decarr.split('')
  num = parseInt(decarr[0])
  console.log(num)
  for(i=1;i<decarr.length;i++){decarr[i] = String.fromCharCode(decarr[i].charCodeAt(decarr[i])+num)}
     console.log(decarr)
 }'



 //decoder function
 let regex = /[0-9]/
 const decoder= (string) => {
 
     let newString = []
     for(let i = 1; i<string.length ; i++)
     {
         if(regex.test(string[0])){
         const newChar = parseInt(string.charCodeAt(i))+ parseInt(string[0])
         newString.push(String.fromCharCode(newChar))
         //newString.push(string[i]+string[0])
 
         }
     }
     return newString.join("")
 }