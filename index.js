const billInput = document.querySelector(".bill-input-field");
const cashInput = document.querySelector(".cash-input-field");
const waringMsg = document.querySelector("#warning");
const checkBtn = document.querySelector(".btn");
const noOfNotes = document.querySelectorAll('.no-of-notes')

const availableNotes = [2000,500,200,100,50,20,10,5,2,1]

const handleClick = () => {
  const billValue = Number(billInput.value);
  const cashValue = Number(cashInput.value);
  const cashToReturn = cashValue - billValue

  if (billValue > 0 && cashValue > 0) {
    if (billValue > cashValue) {
      waringMsg.innerHTML = "Cash is less than bill, please enter right amount";
    }

    if (billValue === 0 || cashValue === 0) {
      waringMsg.innerHTML =
        "Enter valid bill amount and cash given to continue";
    }

    waringMsg.innerHTML = "";
    calculateNotes(cashToReturn);
  } else {
    waringMsg.innerHTML = "Enter valid bill amount and cash given to continue";
  }
};

const calculateNotes = (cashToReturn)=>{
    for(var i = 0; i < availableNotes.length; i++){
        const notes = Math.trunc(cashToReturn / availableNotes[i]) // to check for no. of notes for each available note
        cashToReturn = cashToReturn % availableNotes[i] // update remaining amount

        noOfNotes[i].innerHTML = notes
    }
}

checkBtn.addEventListener("click", handleClick);
