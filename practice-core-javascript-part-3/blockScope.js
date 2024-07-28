let name = "abdur Rahman"

function myfunc() {
    let number = 10;
    
    if(number === 10){
        let childNumber = 50;
        console.log('The number is from parent block', number);
        console.log('The number is childNumber', childNumber);
        
        if(true){
            console.log('The number is from nested block', childNumber);
        }
    }
   console.log(name); 
}
myfunc()