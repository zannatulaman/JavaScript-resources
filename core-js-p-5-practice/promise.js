const fetchData = () => {
    return  new Promise((resolve, reject) => {
            setTimeout(() => {
              const data = {messege: 'Fetched Successful'}
              const error = {message: 'Fetched Error'}

              //resolve(data)
              reject(error)
              
            }, 20000)
       })
}

fetchData()
       .then((result) => {
          console.log("Result", result)
       })
       .catch((error) => {
          console.log("Error", error);
       })