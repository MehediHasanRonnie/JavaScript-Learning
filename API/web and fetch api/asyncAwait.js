//fetch api usuing asynch and await

const makeRequest = async (url,config) => {
    const res = await fetch(url,config);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message); ///throwing an error
    }
    const data = await res.json();
    return data;

}

const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',
    {
        method: 'DELETE',
       
      })
    .then((res) => console.log(res))
    .catch((err) => console.log(err)) //catching thate error and printing
}
deleteData();

// const updateData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',
//     {
//         method: 'PATCH',
//         body: JSON.stringify({
//           title: 'This is a patch update data',
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err)) //catching thate error and printing
// }
// updateData();



// const updateData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',
//     {
//         method: 'PUT',
//         body: JSON.stringify({
//             id :101,
//           title: 'fooooonmsahkr',
//           body: 'barrrrrbsvhsr',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err)) //catching thate error and printing
// }
// updateData();

// const sendData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',
//     {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'fooooor',
//           body: 'barrrrrr',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err)) //catching thate error and printing
// }
// sendData();

// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err)) //catching thate error and printing
// }
// getData();