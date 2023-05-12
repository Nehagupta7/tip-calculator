const billAmount=document.getElementById("amount");
const billTip=document.getElementsByClassName("billTip");
const Person=document.getElementById("person");
const ShowAmount=document.querySelector(".right_span h3")
const totalAmount=document.querySelector(".right_form_control .total_amount h3")
const person_error=document.querySelector(".person_error")
const amount_error=document.querySelector(".amount_error")
console.log("hello",billAmount,Person)

  function myFunction(element) {
console.log(ShowAmount)
if(this.element =="Custom"){

}

    if(billAmount.value == "" ){
// alert("Enter Bill Amount")
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
        var total = (Number(billAmount.value) * Number(element.innerText.replace("%", "")/100))/ Number(Person.value);
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        ShowAmount.innerHTML=`$${total}`
        totalAmount.innerHTML=`$${Person.value}`
        console.log( total)
    }

   }
document.getElementById("reset").onclick = function() {
    billAmount.value=""
    Person.value=""
    location.reload();
  };