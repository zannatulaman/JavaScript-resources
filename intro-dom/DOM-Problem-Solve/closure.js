function outerfunction() {
    const outerVariable = 15

   function innerFunction() {
        console.log(outerVariable);  
    }

    return innerFunction
}

const closure = outerfunction()
closure()

