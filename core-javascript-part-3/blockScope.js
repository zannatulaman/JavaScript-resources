let name = "Abdur Rahman";


function myfunc(){
    //parent block start here
     
    let number = 10;

    if(number === 10){
      const numberInchildren = 50;
      console.log("The number is from parent block", number);
      console.log("The number in children", numberInchildren);
      
      console.log(name);


      if(true){
        console.log("The number is from nested block", numberInchildren);

        console.log(name);
    }
    }



}
myfunc();

