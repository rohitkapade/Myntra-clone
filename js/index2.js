var namedata=JSON.parse(localStorage.getItem("userdata"));
var signindata=JSON.parse(localStorage.getItem("signdata"));
if(namedata[0].pass==signindata[0].pass)
{
    document.querySelector(".bold1").innerText="My Account";
    var muu = document.getElementById("men991");
    muu.style.marginLeft="-90px"

    window.location.reload(index.html)

    

}