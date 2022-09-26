


products()

async function products(){
    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products
    console.log(data2)
    appendData(data2)
}

function appendData(data){
    let product = document.getElementById("products")
    product.innerHTML=null
    data.forEach(ele => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        card.addEventListener("click",()=>{savedata(ele)})

        let img = document.createElement("img")
        img.setAttribute("class", "pro-img")
        img.src=ele.Image

        let star = document.createElement("img")
        star.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHBQ-Ptz3JcgdGxGm_S05egkrGs3XTp_Aaw&usqp=CAU`

        let rating = document.createElement("div")
        rating.setAttribute("class", "rating")
        rating.innerHTML=ele.rating

        rating.append(star)
        star.style=("height:100%; background-color:pink")

        let name = document.createElement("h5")
        name.innerText=ele.Name
        name.setAttribute("class","name")

        let desc = document.createElement("p")
        desc.innerText=ele.Discripation
        desc.setAttribute("class","desc")

        let price = document.createElement("p")
        price.innerText=`Rs.${ele.Price}`
        price.setAttribute("class","price")



        card.append(img,rating,name,desc,price)
        product.append(card)

    });
}

function savedata(ele){
    let arr=[];

arr.push(ele);
localStorage.setItem("rohit",JSON.stringify(arr))
window.location.href="../scr/products.html"
console.log(arr)

}



async function sortFunc(){
    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products
    
    let sort = document.querySelector("#sort1").value
    
    if (sort=="dec"){
        
        data2.sort(function(a,b){
            
            return b.Price-a.Price
            
        })
        
        appendData(data2)
    }
    if(sort==="asc"){
        data2.sort(function (a,b){
             return a.Price-b.Price
        })
        appendData(data2)
    }
    
    if (sort==="pop"){
        data2.sort(function(a,b){
            return b.rating-a.rating
        })
        appendData(data2)
    }

    if (sort===""){
        data2.sort(function(a,b){
            return a.id-b.id
        })
        appendData(data2)
    }
    
}


async function priceFunc(){

    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products


    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")
    let p4 = document.getElementById("p4")



    if (p1.checked===true){
        let one = data2.filter(function(ele,ind){
            return ele.Price>301 && ele.Price<500
            
        })
        appendData(one)
    }
    else if (p2.checked===true){
        let one = data2.filter(function(ele,ind){
            return ele.Price>501 && ele.Price<750
            
        })
        appendData(one)
    }
    else  if (p3.checked===true){
        let one = data2.filter(function(ele,ind){
            return ele.Price>751 && ele.Price<999
           
        })
        appendData(one)
    }
    else       if (p4.checked===true){
        let one = data2.filter(function(ele,ind){
            return ele.Price>1000 && ele.Price<5000
            
        })
        appendData(one)
    }
    else {
        appendData(data2)
    }
}

async function size1Func(){
    let url = `./db.json`
    let data = await fetch(url)
    let data1 = await data.json()
    let data2 = data1.products

    let size = document.getElementById("size").value
    
   
        if (size==="small"){
            
            let one =  data2.filter(function(ele,ind){
                return ele.size==="small"
            })
            appendData(one)
        }
        else if (size==="medium"){
            
            let one =  data2.filter(function(ele,ind){
                return ele.size==="medium"
            })
            appendData(one)
        }
        else if (size==="large"){
            
            let one =  data2.filter(function(ele,ind){
                return ele.size==="large"
            })
            appendData(one)
        }
        else if (size==="xl"){
            
            let one =  data2.filter(function(ele,ind){
                return ele.size==="xl"
            })
            appendData(one)
        }
        else if (size==="xxl"){
            
            let one =  data2.filter(function(ele,ind){
                return ele.size==="xxl"
            })
            appendData(one)
        }
        else{
            appendData(data2)
        }
    
}
