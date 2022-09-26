
var arr=JSON.parse(localStorage.getItem("userdata"))
console.log(arr)

var signin1=document.querySelector("#signinform");

var array=[];

function signin(){

event.preventDefault();

var obje={

    email:signin1.email.value,
    pass:signin1.pass.value

}
if(arr[0].email==obje.email && arr[0].pass==obje.pass)
{
    var array=[];
   array.push(obje)
    localStorage.setItem("signdata",JSON.stringify(array));
    window.open("index.html","_self")

}
else{
    alert("data Incorrect");
}





}


function signup(){

    event.preventDefault();

    if(arr.length==0)
    {
        window.open("signup.html","_self");
    }




}
