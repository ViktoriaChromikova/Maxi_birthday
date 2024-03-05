const questionForm = document.querySelector("#question");
const formError = document.querySelector("#answerError");

function checkValue() {
event.preventDefault();
  let yourAnswer = document.querySelector("#answer").value;
  if (isNaN(yourAnswer) || yourAnswer < 8 || yourAnswer > 8) {
    formError.style.display= "block";
  } else {
     questionForm.innerHTML += `<div class="container">
                                <a href="invitation.html" class="floating" >Supert, klikk her for å fortsette</a>
                                </div>`;
  }
  
}

function verify(input) {
  switch(input.id){
    case "input1":
      return input.value === "6"
    case "input2":
      return input.value === "7"
    default:
      return false
  }
}

function setColor(input, validity) {
  if (validity) {
    input.style.backgroundColor = 'green';
    return
  }
  input.style.backgroundColor = 'red';
}

function testResults() {
  inputs = []
  input1 = document.getElementById('input1')
  input2 = document.getElementById('input2')
  inputs.push( input1, input2,)

  for (let i = 0; i < inputs.length; i++) {
    console.log("aaa")
    validity = verify(inputs[i])
    setColor(inputs[i], validity)
    if (!validity) {
      alert ("Prøv igjen!");
      return;
    }
  }
  alert ("Bra jobba!");
}
/*
function testResults(form) {
  var inputValue = form.inputbox.value;
  //alert ("You typed: " + inputValue);
  console.log(form.value);
  console.log(form.id);
  if (verify(inputValue, form.id)) {
    form.inputbox.style.backgroundColor = 'green';
    alert ("Bra jobba!");
    return;
  } 
  form.inputbox.style.backgroundColor = 'red';
  alert ("Ikke bra jobba!");
}*/
    
questionForm.addEventListener("submit", checkValue);