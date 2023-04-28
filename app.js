
function calculateAge(event) {
  event.preventDefault();
  let dob = new Date(document.getElementById("dob").value);
  //  let today=new Date(document.getElementById("today").value)
   let today= new Date

  let error = document.getElementById("error");
  let result = document.getElementById("result");
  let eligibility =document.getElementById("eligibility")
  let age ="";


  if (dob > today) {
    error.innerHTML = "inalid date of birth";
    result.innerHTML = "";
    eligibility.innerHTML=""
  } 

if (age= today.getFullYear()-dob.getFullYear()){
  error.innerHTML=""
  result.innerHTML= `you are ${age} years old !` 
}

}
