const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function (){
   const emailInput = document.getElementById("email");
   const passwordInput = document.getElementById("password");

   const  emailValue = emailInput.value;
   const passwordValue = passwordInput.value;

   if(emailValue && passwordValue){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

   }else{
    alert ("Give your email and passsword");
   }
   // add addEventListener for deposite
     const depositeButton = document.getElementById("depositeBtn");
     depositeButton.addEventListener("click", function(){

    const amount = document.getElementById("depositeAmount").value
    const currentAmount = parseFloat(amount);
    //console.log(currentAmount);  
    const current = document.getElementById("currentBalance").innerText
    const currentBalance = parseFloat(current);

    const total = currentAmount + currentBalance;
    document.getElementById("currentBalance").innerText = total;
    //console.log(total);

    const deposite = document.getElementById("currentDeposite").innerHTML
    const depositeCurrent = parseFloat(deposite);
    document.getElementById("currentDeposite").innerText = currentAmount;

  })

  //add addEventListener for withdraw

  const withdrowButton = document.getElementById("withdrawBtn");
  withdrowButton.addEventListener("click", function(){
     
    
    const amount = document.getElementById("withdrawAmount").value
    const currentAmount = parseFloat(amount);
    //console.log(currentAmount);
    const current = document.getElementById("currentBalance").innerText
    const currentBalance = parseFloat(current);
    //console.log(currentBalance);
    const withdraw = document.getElementById("currentWithdraw").innerHTML
    const withdrawcurrent = parseFloat(withdraw);
    document.getElementById("currentWithdraw").innerText = currentAmount;
   
    if(withdrawcurrent <= currentBalance){
      const total = currentBalance - withdrawcurrent;
      document.getElementById("currentBalance").innerText = total;
      //console.log(total);
      
    }else {
      alert("There is insufficeint balance")
    }
  })

  

  

  
    
})

