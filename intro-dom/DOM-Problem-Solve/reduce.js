const number = [ 4, 5]

const sum = number.reduce((accumulator, currentValue) => {

    return accumulator * currentValue
    
} , 2)

console.log(sum);