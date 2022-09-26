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

fetch("./json/home.json")
    .then(response => response.json())
    .then(data => {
        musthaveinyourwardrobe(data.musthaveinyourwardrobe);
        budgetbuysappend(data.budgetbuys);
        bestofclothingappend(data.bestofclothing);
        bestofinnerwearappend(data.bestofinnerwear);
        bestoffootwearappend(data.bestoffootwear);
        bestofkidwearappend(data.bestofkidwear);
        bestofbeautyappend(data.bestofbeauty);
        bestofacessoriesappend(data.bestofaccessories);
        bestofhomefurnishingappend(data.bestofhomefurnishing);
        shopbycategoryappend(data.shopbycategory);
    })


function musthaveinyourwardrobe(data){
    let mustdiv = document.getElementById("mustdiv");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        mustdiv.append(card);
    });
}

function budgetbuysappend(data){
    let budgetdiv = document.getElementById("budgetdiv");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        budgetdiv.append(card); 
    });
}

function bestofclothingappend(data){
    let bestclothing = document.getElementById("bestclothing");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestclothing.append(card); 
    });
}

function bestofinnerwearappend(data){
    let bestinnerwear = document.getElementById("bestinnerwear");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestinnerwear.append(card); 
    });
}

function bestoffootwearappend(data){
    let bestfootwear = document.getElementById("bestfootwear");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestfootwear.append(card); 
    });
}

function bestofkidwearappend(data){
    let bestkids = document.getElementById("bestkids");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestkids.append(card); 
    });
}

function bestofbeautyappend(data){
    let bestbeauty = document.getElementById("bestbeauty");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestbeauty.append(card); 
    });
}

function bestofacessoriesappend(data){
    let bestacessories = document.getElementById("bestacessories");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestacessories.append(card); 
    });
}

function bestofhomefurnishingappend(data){
    let bestfurnishing = document.getElementById("bestfurnishing");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link

        card.append(img);
        bestfurnishing.append(card); 
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