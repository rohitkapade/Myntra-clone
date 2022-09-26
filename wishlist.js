
import footer1 from "./components/footer1.js"
import footer from "./components/footer2.js"
document.querySelector("#footer1").innerHTML=footer1()
document.querySelector("#footer2").innerHTML=footer()

import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();

// import swal from 'sweetalert';

let login = true;
let box = document.querySelector("#box")
let main = document.querySelector("#main")
// let wishlist = []
// wishlist = [
//     { "Name": "DKNY Unisex Black & Grey Printed Medium Trolley Bag","discounts":22, "sku": "10017413", "mpn": "10017413", "Price": "11745", "in_stock": true, "currency": "INR", "brand": "DKNY", "description": "Black and grey printed medium trolley bag, secured with a TSA lockOne handle on the top and one on the side, has a trolley with a retractable handle on the top and four corner mounted inline skate wheelsOne main zip compartment, zip lining, two compression straps with click clasps, one zip compartment on the flap with three zip pocketsWarranty: 5 yearsWarranty provided by Brand Owner / Manufacturer", "Image": "http://assets.myntassets.com/assets/images/10017413/2020/3/6/0896e133-7c7c-4bca-a6a9-e58de74515211583495685498DKNYUnisexBlackGreyPrintedMediumTrolleyBag1.jpg", "gender": "Unisex" },
//     { "Name": "EthnoVogue Women Beige & Grey Made to Measure Custom Made Kurta Set with Jacket", "discounts":22,"sku": "10016283", "mpn": "10016283", "Price": "5810", "in_stock": true, "currency": "INR", "brand": "EthnoVogue", "description": "Beige & Grey made to measure kurta with churidar and\u00a0dupattaBeige made to measure calf\u00a0length kurta, has a V-neck, three-quarter sleeves, lightly padded on bust, flared hem, concealed zip closureGrey solid made to measure churidar, drawstring closureGrey net sequined dupatta, has printed tapingWhat is Made to Measure?Customised Kurta Set according to your Bust and Length. So please refer to the Size Chart to pick your perfect size.How to measure bust?Measure under your arms and around your chest to find your bust size in inchesHow to measure Kurta length?Measure from shoulder till barefoot to find kurta length in", "Image": "http://assets.myntassets.com/assets/images/10016283/2019/8/7/1cf85cd3-a7c5-47fe-b30d-31ec3c10f4411565173618884-Bollywood-Vogue-Customised-Off-White-Anarkali-Suit-215156517-1.jpg", "gender": "Women" },
// ]


let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[]
/*if user not logsd in*/    
if (login == false) {

    let div = document.createElement("div")
    div.setAttribute("id", "first_div")
    let head = document.createElement("h3")
    head.innerText = "PLEASE LOG IN"
    head.setAttribute("id", "head")

    let p = document.createElement("p")
    p.setAttribute("id", "info")
    p.innerText = "Login to view items in your wishlist."
    let image = document.createElement("img")
    image.setAttribute("id", "image")
    image.src = "data:image/png;base64,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"
    let btn = document.createElement("button")
    btn.setAttribute("id", "btn")
    btn.addEventListener("click", () => {
        window.location = "login.html"
    })
    btn.innerText = "Login"
    div.append(head, p, image, btn)
    box.append(div)
}
/*if user loged in but not add any item*/
else if (login==true&&wishlist.length == 0) {


    let div = document.createElement("div")
    div.setAttribute("id", "first_div")
    let head = document.createElement("h3")
    head.innerText = "YOR WISHLIST IS EMPTY"
    head.setAttribute("id", "head")

    let p = document.createElement("p")
    p.setAttribute("id", "info")
    p.innerText = "Add items that you like to your wishlist. Review them anytime and easily move them to the bag."
    let image = document.createElement("img")
    image.setAttribute("id", "image")
    image.src = "data:image/png;base64,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"
    let btn = document.createElement("button")
    btn.setAttribute("id", "btn")
    btn.addEventListener("click", () => {
        window.location = "product.html"
    })
    btn.innerText = "CONTINUE SHOPPING"
    div.append(head, p, image, btn)
    box.append(div)
}
// 




else {wish_append() }
function wish_append() {
    let length=document.createElement("h3")
    length.innerText=`MY Wishlist ${wishlist.length} Items`

    wishlist.forEach((ele, index) => {
        let div = document.createElement("div")
        div.setAttribute("id", "wish")

        let image = document.createElement("img")
        image.src = ele.Image
        let title = document.createElement("h4")
        title.innerText = ele.Name
        let pricecut = document.createElement("p")
        let maxprice = ele.Price * (ele.discounts+100)/100
        console.log(ele.discounts/10)
        pricecut.innerText = `RS ${Math.floor(maxprice)}`
        pricecut.style.textDecoration = "line-through"
        let off = document.createElement("p")
        off.innerText = `( Rs ${Math.floor(maxprice - ele.Price)} OFF)`
        off.style.color = "#ff905a"
        let price = document.createElement("p")
        price.innerText = `Rs.${ele.Price}`
        price.style.fontWeight = "bold"

        let movdiv=document.createElement("div")
        movdiv.setAttribute("id","movediv")
        let move = document.createElement("button")
        move.innerText = "MOVE TO BAG"
        move.setAttribute("id", "move")
            let myarr=JSON.parse(localStorage.getItem("cart"))||[]
        move.addEventListener("click",()=>{

            alert("Item succesfully added to Bag")
           myarr.push(ele)
           localStorage.setItem("cart",JSON.stringify(myarr))
        //    swal("Here's a message!", "It's pretty, isn't it?");

        })
        let delet = document.createElement("button")
        delet.innerText = "X"
        delet.setAttribute("id", "delet")
        delet.addEventListener("click",()=>{
            alert("Item Succesfully Removed from Wishlist")
         let new_wish= wishlist.filter((elem,inde)=>{
            return inde!=index
          })
          localStorage.setItem("wishlist",JSON.stringify(new_wish))
          window.location.reload()

        })
                movdiv.append(move)
        div.append(image, title, price, pricecut, off, movdiv, delet)
        main.append(div)
        box.append(length,main)
    })




}
// console.log(wishlist.length)




