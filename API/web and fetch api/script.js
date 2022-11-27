//web and fetch api


console.clear();
fetch('https://jsonplaceholder.typicode.com/posts',{
//creating resource and posting new data
    method : 'POST',//for update Use 'PUT',to patch use 'PATCH,to delete 'DELETE
    body : JSON.stringify({
        title : "new data adding",
        body: 'bar',
        userId: 1,
    }),
    headers :{
        'Content-type': 'application/json; charset=UTF-8',
    },
})

 //throeing error if data is exceted from the api
    .then((res) =>{
        if(!res.ok){
            const message = `Error: ${res.status}`;
            throw new Error(message);
        }
        return res.json();
    }) 


    .then((res) => console.log(res)) //getting data fro APi
    .catch((error) => console.log(error)); //catching error if there is any