const questionForm = document.querySelector("#question");
const formError = document.querySelector("#answerError");

function checkValue() {
event.preventDefault();
  let yourAnswer = document.querySelector("#answer").value;
  if (isNaN(yourAnswer) || yourAnswer < 7 || yourAnswer > 7) {
    formError.style.display= "block";
  } else {
     questionForm.innerHTML += `<div class="container">
                                <a href="invitation.html" class="floating" >Supert, klikk her for å fortsette</a>
                                </div>`;
  }
  
}

    
questionForm.addEventListener("submit", checkValue);