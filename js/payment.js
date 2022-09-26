import head from "../components/navbar.js"
document.querySelector('#navbar').innerHTML=head();


document.querySelector('#showmore').addEventListener("click",showmore);

function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "block";
    }
}


document.getElementById("Final-order").addEventListener("click",function(){
     let codes=document.getElementById("code").value;
    if(codes==="W68HP"){
        alert("Payment Successful");
        window.location.href="./index.html";
    }else{
        alert("Enter Correct Captcha")
    }
})


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