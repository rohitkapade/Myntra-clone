
 import head from "../components/navbar.js"
 document.querySelector('#navbar').innerHTML=head();

var data=JSON.parse(localStorage.getItem("localdata"))


data.forEach(function(el){
    var card=document.createElement("div");
    card.id="cards"
    
    var name=document.createElement("div");
    name.id="namecontainer";
    var gola=document.createElement("div");
    gola.id="circle";
    var check=document.createElement("input");
    check.setAttribute("type","checkbox");
    check.id="checkbox";
    gola.append(check);
    var name1=document.createElement("div");
    name1.innerText= el.name;
    name1.id="name1";
    var where=document.createElement("div");
    where.id="where";
    where.innerText="Home";
    name.append(gola,name1,where);//appended all values to the name div.

    var house=document.createElement("div");
    house.id="house"
    house.innerText=el.house+", "+el.local;

    var city=document.createElement("div");
    city.id="city";
    city.innerText=el.incity+", "+el.insatte+" - "+el.pin;

    var mobile=document.createElement("div");
    mobile.id="mobile";
    mobile.innerText="Mobile : "
    var span=document.createElement("span");
    span.innerText=el.mobile;
    span.style.fontWeight="600"
    mobile.append(span)

    var paymethod=document.createElement("div");
    var ul=document.createElement("ul");
    var li=document.createElement("li");
    li.innerText="Pay on Delivery available"
    li.id="paylist";
    ul.append(li);
    paymethod.append(ul);

    var btncontainer=document.createElement("div");
    btncontainer.id="btncontainer";
    var removebtn=document.createElement("div");
    removebtn.id="btnr";
    removebtn.innerText="REMOVE";
    var editbtn=document.createElement("div");
    editbtn.id="btne";
    editbtn.innerText="EDIT";
    btncontainer.append(removebtn,editbtn)

    card.append(name,house,city,mobile,paymethod,btncontainer);

    document.getElementById("container").append(card)
})


// ---Payment section------

data=JSON.parse(localStorage.getItem("cart"))
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