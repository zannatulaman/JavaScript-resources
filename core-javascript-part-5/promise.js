//create promise also return the resolved result
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {message: "Fetched Sucessfully"}
            const error = {message: "Fatched error"}
            resolve(data);
            reject(error);
        }, 2000);
    })
}

//sucess or failed status of the promise

fetchData()
    .then((result) => {
        console.log("Result", result)
    })
    .catch((error) => {
        console.log("Error", error);
    })