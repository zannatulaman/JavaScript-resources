// const api = "https://jsonplaceholder.typicode.com/users"

//  fetch(api)
//     .then(res => res.json())
//     .then(res => {
//       const data = res.map((user) => user.name)
//         // console.log(res); 
//     })
    
//     .catch(err => console.log(err))

const API = "https://jsonplaceholder.typicode.com/users" 

    fetch(API)
         .then((response) => {
            if(!response.ok){
                throw new Error("Https Error")
            }
            return response.json()
        })

        .then((response) => {
            console.log(response)
            
        })

        .catch((error) => {
            console.log(error)
        })



     