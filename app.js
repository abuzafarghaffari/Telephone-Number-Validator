let input = document.getElementById("in");
const button = document.querySelector("button");
let result = document.getElementById("result");


button.addEventListener("click",()=>{
  console.log(input.value);
  result.innerHTML = telephoneCheck(input.value);
});





function telephoneCheck(str) {
 
  const exp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  return exp.test(str);

  };
  
  // telephoneCheck("(555)555-5555");