// BOM alert,confirm,prompt

alert("error here!") //alert box

//delete box

function deleteSomething(){
    let value = confirm("Do you want to delete somethong?");

    if(value){
        console.log("deleted");
    }else{
         console.log("not deleted");
    }
}deleteSomething();

//promp box

function wellcomeMessege(){
    var h1 = document.createElement("h1");
    var text;
    var name = prompt("Enter your name:");

    if(name == null || name == ""){
        text = "No name is found!";
    }else{
        text = "wellcome " + name;
    }

    var textnode =  document.createTextNode(text);
    h1.appendChild(textnode);
    document.body.appendChild(h1);
}

wellcomeMessege();