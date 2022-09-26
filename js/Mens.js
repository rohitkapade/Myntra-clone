import footer1 from "../components/footer1.js";
let div1 = document.getElementById("div");
div1.innerHTML = footer1();

import footer from "../components/footer2.js"
let div2 = document.getElementById("oo");
div2.innerHTML = footer();

import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();


fetch("./json/men.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dealsappend(data.deals);
        budgetbuyappend(data.budgetbuy);
        topbranofferappend(data.topbranoffer);
        mostlovedbrandsappend(data.mostlovedbrands);
        musthaveinyourwardrobeappend(data.musthaveinyourwardrobe);
        shopbycategoryappend(data.shopbycategory);
    })

function dealsappend(data){
    let dealsdiv = document.getElementById("dealsdiv");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        dealsdiv.append(card);
    });
}

function budgetbuyappend(data){
    let budgetbuy = document.getElementById("budgetbuy");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        budgetbuy.append(card);
    });
}

function topbranofferappend(data){
    let topbranoffer = document.getElementById("topbranoffer");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        topbranoffer.append(card);
    });
}

function mostlovedbrandsappend(data){
    let mostlovedbrands = document.getElementById("mostlovedbrands");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        mostlovedbrands.append(card);
    });
}

function musthaveinyourwardrobeappend(data){
    let musthaveinyourwardrobe = document.getElementById("musthaveinyourwardrobe");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        musthaveinyourwardrobe.append(card);
    });
}

function shopbycategoryappend(data){
    let shopbycategory = document.getElementById("shopbycategory");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        shopbycategory.append(card);
    });
}

/*  singup part  */



var namedata=JSON.parse(localStorage.getItem("userdata"));
var signindata=JSON.parse(localStorage.getItem("signdata"));
if(namedata[0].pass==signindata[0].pass)
{
    document.querySelector(".bold1").innerText="My Account";
    var muu = document.getElementById("men991");
    muu.style.marginLeft="-90px"

    window.location.reload(index.html)
}