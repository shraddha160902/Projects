function computeLoan(){
//Some of the class functions have been assigned a global constant
  const amount = document.querySelector(‘#amount’).value;
  const interest_rate = document.querySelector(‘#interest_rate’).value;
  const months = document.querySelector(‘#months’).value;
  const interest = (amount * (interest_rate * 0.01)) / months;
     
    let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment
    //regedit to add a comma after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, “,”); 
//”innerHTML” will help you to see the information in the webpage
    document.querySelector(‘#payment’).innerHTML = Monthly Payment = ${payment}
}