/*IMPORTING THE FOOTER*/

import footer1 from "../components/footer1.js";
let div1 = document.getElementById("div");
div1.innerHTML = footer1();

import footer from "../components/footer2.js"
let div2 = document.getElementById("oo");
div2.innerHTML = footer();

import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();



let data=JSON.parse(localStorage.getItem('rohit'))

let display_products=(data)=>{
    console.log(data)
    data.forEach(element => {
        // console.log(element.Image.trim(" ").split("~"))

        let img_array=element.Image.trim(" ").split("~")
        // image
        let img_box=document.getElementById("image")
        for(let i=0;i<img_array.length;i++){
            let div=document.createElement("div")
            let img=document.createElement("img")
            img.setAttribute("class",'products_img')
            img.src=img_array[i]
            div.append(img)
            img_box.append(div)
        }
        let brand_data=element.Name;
        let name_arr=brand_data.trim(" ").split("~")
        
        let div=document.createElement('div')
        let h4_brand=document.createElement("h1")
        h4_brand.innerText=name_arr[0];

        let p_name=document.createElement("p")
        p_name.innerText=name_arr[1];
        let r_div=document.createElement("div")
        let rating=document.createElement("h4")
        rating.innerHTML=`${element.rating}<span class="fa fa-star checked"></span>  ${element.rating*10}k   <span id="ratings">Ratings</span>`
        r_div.append(rating)
        r_div.setAttribute("id",'ratingbox')


        div.append(h4_brand,p_name,r_div)
        document.getElementById('productsinfo').append(div)

        let div_price=document.createElement('div')
        let price=document.createElement('h3')
        let discounts=Math.floor(Math.random()* 40) + 10;
        
        let price_max=Math.floor(element.Price*(100+discounts)/100)
        console.log(price_max)
        price.innerHTML=`<span>Rs.</span>${element.Price} <span id="max_price">Rs.${price_max}</span> <span id="discounts">(${discounts}%-Off)</span>`

        div_price.append(price)
        document.getElementById("price_data").append(div_price)

        document.getElementById("siza_chart").innerHTML=`<div ><h4 id="siza_chartdis"><span>SELECT SIZE</span><span></span></span><span id="siza_charts">siza chart ></span></h4></div><div id='select-siza'>
            <div id="S" class="siza"><p>S</p></div>
            <div id="M"class="siza"><p>M</p></div>
            <div id="L" class="siza"><p>L</p></div>
            <div id="XL" class="siza"><p>XL</p></div>
        </div>`

        document.getElementById("button").innerHTML=`<div id="addtocart"><span id="bag"><span><img id="img_id" src="../img/iconly-essential-icons.png" alt=""></span><span>Add to cart</span></span></div>
        <div id="wishlist"><span id="bag"><span><img id="img_id" src="../img/whislist (3).png" alt=""></span><span>wishlist</span></span></div>`

        document.getElementById("delivery-option").innerHTML=`<div id="delid"><sapn><h4>DELIVERY OPTIONS</h4></sapn><span ><img id="img_id" src="../img/delivery (1).png" alt=""></span></div>
            <form>
                <input type="text" placeholder="Enter pincode" id="pincode">
                <input type="submit"id="pincode-submit" value="check">
                <div id="valid"></div>
            </form>
        <div><p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p></div>`;

        document.getElementById("extra_info").innerHTML=`<div>
        <div>100% Original Products</div>
        <div>Pay delivery might be available</div>
        <div>Easy 30 days returns and exchanges</div>
        <div>Try & Buy might be available</div>
    </div>`;

    document.getElementById("best-offers").innerHTML=`<div>BEST OFFERS <span></span></div>
    <div>
        <div id="delid"><span><h2>Best price: </h2></span><span><img id="img_id" src="../img/tag.png" alt=""></span></div>
        <div id="coupon-discounts">
        <div><h3>Best Price: <span id="discounts">Rs. ${element.Price-50} </span></h3></div>
            <ul>
                <li>Coupon Discount: Rs. 50 off (check cart for final savings)</li>
                <li>Applicable on: Orders above Rs. 100 (only on first purchase)</li>
                <li>Coupon code: MYNTRA50</li>
            </ul>
            <div id="off"><p class="offers_e">View Eligible Products</p></div>
        </div>
        <div id="banks-offers">
            <div id="icice-bank">
                <h4>10% Instant Discount on ICICI Bank Credit and Debit Cards</h4>
                <ul><li>Min spend Rs 3,500. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>0% Instant Discount on Axis Bank Credit Cards</h4>
                <ul><li>Min spend Rs 3,000. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>Flat Rs 150 Cashback on Paytm Wallet and Postpaid</h4>
                <ul><li>Min spend Rs 1,500. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>15% Cashback upto Rs 750 on ZestMoney.</h4>
                <ul><li>Shop with 0% Interest* EMIs. TCA</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>

            <div id="icice-bank">
                <h4>10% Instant Discount + 5% Unlimited Cashback</h4>
                <ul><li>Shop with Flipkart Axis Bank Credit Card; Min Spend Rs 3000</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>
            <div id="icice-bank">
                <h4>EMI option available</h4>
                <ul><li>EMI starting from Rs.15/month</li></ul>
                <p class="offers_e">View Eligible Products</p>
            </div>

        </div>
    </div>`

    document.getElementById("proucts-details").innerHTML=`<div><h4>PRODUCT DETAILS </h4><span></span></div><div><P>${element.Discripation}</P></div>`

// add to cart part
document.getElementById("addtocart").addEventListener("click",function(){
    addcarfun(element,discounts)
})
//wish-list
document.getElementById("wishlist").addEventListener("click",function(){
    wishlistfunc(element,discounts)
})
document.getElementById('pincode-submit').addEventListener('click',function(){
    pincodecheck()
})
});
}
// *******************************
display_products(data)

//add to cart function 
var cart=JSON.parse(localStorage.getItem("cart"))  || []
function  addcarfun(ele,discounts){
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyAdded = false;
    cart.forEach(function (elem) {
        if(elem.id==ele.id) alreadyAdded = true;
        console.log("allready add")
        alert("cart is allreday add")
    });
    if(!alreadyAdded) {
    ele.discounts=discounts
    cart.push(ele)
    
    // cart.push()
    console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))
    }
}


//whishlist
let wishlist=JSON.parse(localStorage.getItem('wishlist'))||[]
function wishlistfunc(ele,discounts){

    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let alreadyAdded = false;
    wishlist.forEach(function (elem) {
        if(elem.id==ele.id) alreadyAdded = true;
        console.log("allready add")
        alert("wishlist is allreday add")
    });
    if(!alreadyAdded) {
    ele.discounts=discounts
    wishlist.push(ele)
    
    // cart.push()
    console.log(cart)
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }
}
//pincode check
function pincodecheck(){
    event.preventDefault()
    let pin=document.getElementById("pincode").value;
    if(pin.length==6){
        // alert("pin is valid")
        document.getElementById("valid").innerHTML=null
        document.getElementById("valid").innerHTML=`<h4 class="check_pin">pin-code valid</h4>`
    }
    else{
        // alert("pin not valid")
        document.getElementById("valid").innerHTML=null
        document.getElementById("valid").innerHTML=`<h4 class="check_pin">Invalid pin-code</h4>`
    }
}

//bank_offers
document.getElementById("off").addEventListener("click",function(){
    window.location.href="banksoffers.html"
})
//siza selection 
let siza=document.getElementById("select-siza").children;
let order=JSON.parse(localStorage.getItem('order-siza'))||[]
function chose_siza(){
    order=JSON.parse(localStorage.getItem('order'))||[]
    const siza={
        Siza:this.id
    }
    order.push(siza)
    console.log(order)
}
for (let ele of siza) {
    ele.addEventListener("click",chose_siza)
}


/*  singup part  */



// var namedata=JSON.parse(localStorage.getItem("userdata"));
// var signindata=JSON.parse(localStorage.getItem("signdata"));
// if(namedata[0].pass==signindata[0].pass)
// {
//     document.querySelector(".bold1").innerText="My Account";
//     var muu = document.getElementById("men991");
//     muu.style.marginLeft="-90px"

//     window.location.
// }