//create a promise also return a resolved result 

const fetchData = () => {
    return new Promise ((resolve, reject) => {
          setTimeout(() => {
            const data = {message : "Fetched Successfull"}
            const error = {error : "Feched Error"}

          resolve(data)
          }, 2000)            
          
    })
}

fetchData()
     .then(res => console.log(res))
     .catch(err => console.log(err))
