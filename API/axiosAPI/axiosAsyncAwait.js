// axios API using async await

const makeRequet = async (config) =>{
    return await axios(config);
}


const deleteData = () => {
    makeRequet({
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        method : 'delete'
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}
deleteData();

// const updateData = () => {
//     makeRequet({
//         url : 'https://jsonplaceholder.typicode.com/posts/1',
//         method : 'put',
//         data : JSON.stringify({
//             id: 1,
//             title: 'foogito',
//             body: 'bargito',
//             userId: 1,
//           }),
//     })
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err))
// }
// updateData();

// const createData = () => {
//     makeRequet({
//         url : 'https://jsonplaceholder.typicode.com/posts',
//         method : 'post',
//         data : JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//     })
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// }
// createData();


// const getData = () => {
//     makeRequet('https://jsonplaceholder.typicode.com/posts/1')
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// }
// getData();