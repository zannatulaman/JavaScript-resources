

const API = "https://jsonplaceholder.typicode.com/posts"
fetch(API)

fetch(API)
    .then(response => {
        if(!response.ok) {
            throw new Error("HTTP Error");
        }

        return response.json()
    })

    .then((response) => {
        console.log("Response", response);
    })

    .catch((error) => {
        console.log("Error occurd", error);
    })