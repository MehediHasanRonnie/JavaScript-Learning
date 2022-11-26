console.clear();

//event - onload(),onerror();
//property - response, responseText, responseType, responseURL, status, statusText
//function - open(), send(), setRequestHeader();


const makeRequest = (method,url,data) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
     
     xhr.setRequestHeader('content-Type', 'application/json');

    xhr.onload = () =>{
        let data = xhr.response;
        console.log(data);
        console.log(xhr.status);
        console.log(xhr.responseURL);
        console.log(xhr.statusText);
        console.log(JSON.parse(data));
    }

    xhr.onerror = () =>{
        console.log('erroe is here');
    }

    xhr.send(JSON.stringify(data));
}

const getData = () => {
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
}

const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
 });
}
const updateData = () => {
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'foorr',
        body: 'barrrr',
        userId: 1,
 });
}

const updateSingleData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
    
        title: 'This is change',
 });
}

const deleteData = () => {
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')
}


deleteData();

