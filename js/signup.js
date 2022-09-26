var form=document.querySelector("#form");






 function sign(){
     event.preventDefault();


   var obj={


    name:form.name.value,
    email:form.email.value,
    pass:form.pass.value,
    agpass:form.agpass.value
}
if(obj.pass==obj.agpass)
{
    var arr=[];
    arr.push(obj);
console.log(arr);
localStorage.setItem("userdata",JSON.stringify(arr));
window.open("signin.html","_self")

}
else{
    alert("Password Mismatched")
}

}