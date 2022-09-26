import head from "../components/navbar.js"
document.querySelector('#navbar').innerHTML=head();




var dataarray=JSON.parse(localStorage.getItem("localdata"))||[];

document.getElementById("addbutton").addEventListener("click",function(){
    saveaddressinstorage()
}
    );
 
function saveaddressinstorage(){
    var objdata={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        pin:document.getElementById("pin").value,
        house:document.getElementById("house").value,
        local:document.getElementById("local").value,
        incity:document.getElementById("incity").value,
        insatte:document.getElementById("instate").value,
    }
    console.log(objdata) 

    dataarray.push(objdata);
    
    localStorage.setItem("localdata",JSON.stringify(dataarray));
}

// ---Payment section------

let data=JSON.parse(localStorage.getItem("cart"))
let Mrp=0;
let totalprice=0;


data.forEach((elem)=>{
  
  Mrp= Mrp+Math.floor(elem.Price*(100+elem.discounts)/100);
  totalprice=totalprice+Number(elem.Price);
  
})

const totalmrp = document.querySelector('#totalmrp');
totalmrp.innerText=Mrp;
const discountMrp = document.querySelector('#discountmrp');
discountMrp.innerText="-"+(Mrp-totalprice);
const totalamount = document.querySelector('#totalamount');
totalamount.innerText=totalprice;