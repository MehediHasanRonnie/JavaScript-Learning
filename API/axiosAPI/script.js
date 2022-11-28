console.clear();
//.put, .get, .patch .update .delete all we can do just simply type on .post's place
axios
   .post("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
   .then((res) => console.log(res.data))
   .catch(err => console.log(err))