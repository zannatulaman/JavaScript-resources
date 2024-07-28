const loginButton = document.getElementById("login-btn");


loginButton.addEventListener("click", () => {
       
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value; 

    if(emailValue && passwordValue){
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
    
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    }else{
        alert("Enter your email and password");
    }


   //add addEventListener for deposite

   const depositeButton = document.getElementById("deposite-btn");
   depositeButton.addEventListener("click", () => {

       const amount = document.getElementById("depositeInput").value
       //console.log(amount);
       const depositeAmout = parseFloat(amount);
       //console.log(depositeAmout);
       
       const balance = document.getElementById("balanceStatus").innerText
       //console.log(currentBalance);
       const currentBalance = parseFloat(balance);
       console.log(currentBalance);

       const miniumAmount = 10;

         if(depositeAmout < miniumAmount){
            alert("Minimum amount is $10");
            return;
       }

       const total = depositeAmout + currentBalance ;
       document.getElementById("balanceStatus").innerText = total;


       const deposite = document.getElementById("depositeStatus").innerText;
       const currentDeposite = parseFloat(deposite);
       document.getElementById("depositeStatus").innerText = depositeAmout
    })

    //add addEventListener for withdraw

    const withdrawButton = document.getElementById("withdraw-btn");

    withdrawButton.addEventListener("click", () => {
         
        const amount = document.getElementById("withdrawInput").value;
        const withdrawAmount = parseFloat(amount);
        //console.log(withdrawAmount);

        const balance = document.getElementById("balanceStatus").innerText;
        const currentBalance = parseFloat(balance);
        //console.log(currentBalance);

        if(withdrawAmount >= currentBalance){
            alert("There is insufficient balance");
            return; 
        }

        const total = currentBalance - withdrawAmount ;
        document.getElementById("balanceStatus").innerText = total

        const withdraw = document.getElementById("withdrawStatus");
        const currentWithdraw = parseFloat(withdraw);
        document.getElementById("withdrawStatus").innerText = withdrawAmount;

})
   
    
})