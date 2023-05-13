const billAmount=document.getElementById("amount");
const billTip=document.getElementsByClassName("billTip");
const Person=document.getElementById("person");
const ShowAmount=document.querySelector(".right_span h3")
const totalAmount=document.querySelector(".right_form_control .total_amount h3")
const person_error=document.querySelector(".person_error")
const amount_error=document.querySelector(".amount_error")
const button = document.getElementById('custombutton');

// only enter the number
function OnlyNumber(event) {
  const key = event.key;
  const isNumber = /^\d$/.test(key);
  const isEnter = key === 'Enter';
  
  if (!isNumber && !isEnter) {
    event.preventDefault();
  }
};

// on custom button click
button.addEventListener('click',()=>{
   // Create a new input element
   const inputText = document.createElement('input');
  
   // Set the type attribute to "text"
   inputText.setAttribute('type', 'text');
   inputText.onchange = function() {
    console.log('Input value changed:', inputText.value);
    myFunction(inputText);
    // Perform additional actions here
  };
   // Copy other at
  inputText.onkeypress = function(event) {
    OnlyNumber(event)
  };
   // Copy other attributes and values from the button
   inputText.setAttribute('id', button.getAttribute('id'));
   inputText.setAttribute('value'," ");
   
   // Replace the button with the new input element
   button.parentNode.replaceChild(inputText, button);
})

billAmount.onkeypress = function(event) {
  OnlyNumber(event)
};

Person.onkeypress = function(event) {
  OnlyNumber(event)
};
  function myFunction(element) {
   
    if(billAmount.value == "" ){

        amount_error.style.display="inline"
        billAmount.style.borderColor="#B48372"

    }else if(Person.value == ""){

        person_error.innerHTML="Enter the no of Person"
        person_error.style.display="inline"
        Person.style.borderColor="#B48372"

    }else if(Person.value == 0){

        person_error.innerHTML="Can,t be zero"
        person_error.style.display="inline"
        Person.style.borderColor="#B48372"

    }
    else{
        var total = (Number(billAmount.value) * Number(element.value.replace("%", "")/100))/ Number(Person.value);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        ShowAmount.innerHTML=`$${total}`
        totalAmount.innerHTML=`$${billAmount.value}`
        console.log( total)
    }

   }

  //  reset button click
    document.getElementById("reset").onclick = function() {
        billAmount.value=""
        Person.value=""
        location.reload();
      };