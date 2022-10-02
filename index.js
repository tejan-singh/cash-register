const billInput = document.querySelector(".bill-input-field");
const cashInput = document.querySelector(".cash-input-field");
const waringMsg = document.querySelector("#warning");
const checkBtn = document.querySelector(".btn");

const handleClick = () => {
  const billValue = Number(billInput.value);
  const cashValue = Number(cashInput.value);
  const cashToReturn = billValue - cashValue

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
    
}

checkBtn.addEventListener("click", handleClick);
