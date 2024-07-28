//const API = 'https://jsonplaceholder.typicode.com/todos/1'

const API = "https://jsonplaceholder.typicode.com/posts"

fetch(API)
.then(response => response.json())
.then(json => console.log(json))