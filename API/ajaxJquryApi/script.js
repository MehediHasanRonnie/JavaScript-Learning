//ajax jquery

console.clear();

const makeRequest = async (url,method,data) => {
   try {
    const result = await $.ajax({
        url : url,
        method : method,
        data : data
    });
    return result;
   } catch (error) {
      console.log(error);
   }
}
const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',"DELETE")
       .then(res => console.log(res))
}
deleteData();

// const updateData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',"PUT",
//     {
//         id : 101,
//         title: 'fooooooor',
//         body: 'barrrrrr',
//         userId: 1,
//       })
//        .then(res => console.log(res))
// }
// updateData();

// const createData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',"POST",
//     {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//        .then(res => console.log(res))
// }
// createData();

// const getdata = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',"GET")
//        .then(res => console.log(res))
// }
// getdata();