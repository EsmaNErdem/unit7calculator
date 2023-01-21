window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    let values = {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
    return values;
  }
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const values = {
      amount: 5000,
      years: 2,
      rate: 3.2
    }
    document.getElementById("loan-amount").value = values.amount
    document.getElementById("loan-years").value = values.years
    document.getElementById("loan-rate").value = values.rate
    update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    
    return updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let p = values.amount;
    let i = (values.rate/100) / 12;
    let n = values.years * 12;
    const payment = Math.round(((p * i) / (1-Math.pow(i+1, -n)))*100)/100
    return payment.toFixed(2);
  
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthPayment = document.querySelector('#monthly-payment');
    return monthPayment.innerText =`$${monthly}`;
  }
  