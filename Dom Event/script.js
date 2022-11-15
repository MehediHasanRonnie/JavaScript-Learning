// {/* <input /> - Text, number, password, email, color, radio,checkbox, search, time, Date,
// datetime,week,month URL,tel,file,
// <select></select>
// <textarea></textarea> */}

//code for input type
const input = document.querySelector("input[name=name")
input.addEventListener("change",changeHandeler);

function changeHandeler(event){
    console.log(event.target.className);
    console.log(event.target.id);
    console.log(event.target.value);

}

//code for checkbox type
const programes = document.querySelectorAll("input[name=programe]");
//console.log(programes);

Array.from(programes).map((programe) =>{
    programe.addEventListener("change", programeHandler);
});

function programeHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}
//code for selection type
const department = document.querySelector("#department");
//console.log(department);

department.addEventListener("change", changeDepartment);

function changeDepartment(e){
   console.log(e.target.value);
}
