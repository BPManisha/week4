// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// a function that checks opening and closing paranthesis:************************
function balancedParens(str) {
  // initialize two vaiables to keep the track of count of opening and closing paranthesis in the given string as we loop thru it
  let openPar = 0
  let closedPar = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1
    } else if (str[i] === ")") {
      closedPar += 1
    }
   
  }
  //if the count ofopenPar and closedPar is equal
  if (openPar===closedPar)
      console.log(" you have done good job with opening and closing parenthis.")
    else
    console.log(" check your opening and closing parenthisis")
  return openPar === closedPar

}
//invoke the function 
//its time to test it.
balancedParens("(This (is (a) balanced) string.).")
//******************************************* */