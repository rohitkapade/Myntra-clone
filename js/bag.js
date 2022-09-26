 document.querySelector('#showmore').addEventListener("click",showmore);
function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show More"; 
      moreText.style.display = "block";
    }
}

 import head from "../components/navbar.js"
  document.querySelector('#navbar').innerHTML=head();


  const append = document.querySelector('#append');
  // let data=[ {
  //   "id": "1",
  //   "Image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2022/3/2/33f426d3-752f-45fa-8344-e0b16f48bfc61646215571249-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--7.jpg~https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2022/3/2/1d0092fa-f331-4713-9ac9-719c9032618b1646215571270-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--5.jpg~https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2022/3/2/14eab570-0d13-4b75-b943-4ceb207b540d1646215571260-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--6.jpg~https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2022/3/2/b29281a6-99d0-4ed2-a54e-1b239553f7471646215571297-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--2.jpg~https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg",
  //   "Name": "HRX by Hrithik Roshan",
  //   "Price": "314",
  //   "Discripation": "Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.",
  //   "rating": "4",
  //   "category": "t-sirts",
  //   "discounts":"40",
  // },];
 
let data=JSON.parse(localStorage.getItem("cart"));

let Mrp=0;
let totalprice=0;
  


  
data.forEach(function(ele,index){
  var biggercartcard=document.createElement("div");
  biggercartcard.id="biggercartcard";
  var cartcard=document.createElement("div");
  cartcard.id="cartcard"

  var itemimg=document.createElement("img");
  let image=ele.Image.split("~");
  itemimg.setAttribute("src",image[index]);
  itemimg.id="append-image"
  
  var cartdetails=document.createElement("div");
  cartdetails.id="cartdetails";
 
let namedata=ele.Name.split("~");
let Brand=namedata[0];
let description=namedata[1];
  

  var brand=document.createElement("div");
  brand.innerText=Brand;

  var name=document.createElement("div");
  name.innerText=description;

  name.id="name";

  var desc=document.createElement("div");
  desc.innerText=ele.category ;
  desc.id="category";


  var sizes=document.createElement("div");
  sizes.id="sizes";
  var size=document.createElement("select");
  size.id="size";
  var size1=document.createElement("option");
  size1.innerText="38";
  var size2=document.createElement("option");
  size2.innerText="40";
  var size3=document.createElement("option");
  size3.innerText="42";
  var size4=document.createElement("option");
  size4.innerText="44";
  size.append(size1,size2,size3,size4)

  var qty=document.createElement("select");
  qty.id="qty";
  var qty1=document.createElement("option");
  qty1.innerText="1";
  qty1.setAttribute("value","1")
  var qty2=document.createElement("option");
  qty2.innerText="2";
  qty2.setAttribute("value","2")
  var qty3=document.createElement("option");
  qty3.innerText="3";
  qty3.setAttribute("value","3")
  var qty4=document.createElement("option");
  qty4.innerText="4";
  qty4.setAttribute("value","4")
  qty.append(qty1,qty2,qty3,qty4);
  sizes.append(size,qty);

  var prices=document.createElement("div");
  prices.id="prices";
  var rate=document.createElement("p");
  rate.innerText="₹ "+ele.Price;
  totalprice=totalprice+ Number(ele.Price);
  
  rate.id="rate";

   Mrp= Mrp+Math.floor(ele.Price*(100+ele.discounts)/100)
   console.log(Mrp+1);

  var costprices=document.createElement("p");
  costprices.innerText="₹ "+Mrp;
  costprices.id="costprices";
  var discounts=document.createElement("p");

  // ------- Taking discount Fix -----

  discounts.innerText =ele.discounts+"% OFF";
  discounts.id="discounts";
  prices.append(rate,costprices,discounts);

  var deliverydate=document.createElement("div");
  deliverydate.innerText="Delivery by "
  deliverydate.id="date";
  var date=document.createElement("span");
  date.innerText="tomorrow";
  date.style.color="#03a685";
  deliverydate.append(date);

 
  cartdetails.append( name,desc,sizes,prices,deliverydate);
  cartcard.append(itemimg,cartdetails);
  biggercartcard.append(cartcard);
  document.getElementById("append").append(biggercartcard);
})


let totalmrp = document.querySelector('#totalmrp');
totalmrp.innerText=Mrp;
// console.log(typeototalprice)
let discountMrp = document.querySelector('#discountmrp');
let tp = +[totalprice]
// let amt = 
console.log(Mrp,tp);
discountMrp.innerHTML= `${Mrp-tp}`;
let totalamount = document.querySelector('#totalamount');
totalamount.innerText=tp;

// data.forEach((elem)=>{
  
//   Mrp= Mrp+Math.floor(elem.Price*(100+elem.discounts)/100);
//   totalprice=totalprice+elem.Price
  
// })