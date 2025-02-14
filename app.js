// create  *
// save localstorage *
// clear inputs  *
// read *
// count  *
// delete *
//ubdate
//search
//clean data


let title = document.getElementById('title')
let price = document.getElementById('price')
let count = document.getElementById('count')
let create = document.getElementById('create')
let category = document.getElementById('category')
let search = document.getElementById('search')
let moodUp ="create"
let temp;



//2

let Data ;

if (localStorage.prodct != null){
      Data = JSON.parse(localStorage.prodct)
}else{
    Data = []
}

create.onclick = function getData(){
    let obj = {
        title : title.value ,
        price : price.value ,
        count : count.value,
        category : category.value,
        

    }
   
        if(moodUp=="create"){
             if(obj.count > 1){
                for(let i =0 ; i < obj.count ; i++){
                    Data.push(obj)
                }
            }else{
                Data.push(obj)
            }
            
        }else{
            Data[temp]=obj
            moodUp ="update"
            create.innerHTML="create"
        }
   
  
    
   
    clear()
    read()
    totalPrice()

    localStorage.setItem('prodct',JSON.stringify(Data))
}

function clear(){
    title.value = ""
    price.value = ""
    count.value =""
    category.value =""

}


function read(){
  
    let table = ""
    for(let i =0 ; i<Data.length ; i++){
        table +=
        `
        <tr>
        <td>${i+1}</td>
        <td>${Data[i].title}</td>
        <td>${Data[i].price}</td>
        <td>${Data[i].category}</td>
        <td><button id = "button" onclick = " updateData(${i})">ubdate</button></td>
        <td><button id ='button'  onclick = "Delete(${i})"> delete</button></td>
       

    </tr>
        
        `
    }

    document.getElementById("tbody").innerHTML= table
   let btn =  document.getElementById("btn")
   if(Data.length != ""){
    btn.innerHTML= `<button id = "btn1" onclick ="DeleteAll()"  > Delete All   (${Data.length})</button>`
   }else{
    btn.innerHTML = ``
   }
}

function Delete(i){
    Data.splice(i,1)
    localStorage.prodct = JSON.stringify(Data)
    read()


}

function DeleteAll(){
    Data.splice(0)
    localStorage.clear()
    read()

}

function updateData(i){

    title.value = Data[i].title;
    price.value = Data[i].price;
    category.value = Data[i].category;
    count.style.display="none";
    create.innerHTML="ubdate"
    moodUp = "update"
    temp =i;
    scroll({
        top:0
        
    })
    search.value ="";
    
   
}

let mood = "title"

function moodSearch(id){
    if(id =="title"){
        mood = "title"
    }else{
        mood = "category"
    }
    search.focus()
    search.placeholder = "search By "+ mood
    search.value ="";

}

function searchItems(value){
    let table ="";
    if(mood=="title"){
        for(let i = 0 ; i<Data.length;i++){
            if(Data[i].title.includes(value)){
                
                table +=
                `
                <tr>
                <td>${i+1}</td>
                <td>${Data[i].title}</td>
                <td>${Data[i].price}</td>
                <td>${Data[i].category}</td>
                <td><button id = "button" onclick = " updateData(${i})">ubdate</button></td>
                <td><button id ='button'  onclick = "Delete(${i})"> delete</button></td>
               
        
            </tr>
                
                `

        }
    }

    }else{

        for(let i = 0 ; i<Data.length;i++){
            if(Data[i].category.includes(value)){
                
                table +=
                `
                <tr>
                <td>${i+1}</td>
                <td>${Data[i].title}</td>
                <td>${Data[i].price}</td>
                <td>${Data[i].category}</td>
                <td><button id = "button" onclick = " updateData(${i})">ubdate</button></td>
                <td><button id ='button'  onclick = "Delete(${i})"> delete</button></td>
               
        
            </tr>
                
                `

        }
    }

    }
       
    document.getElementById("tbody").innerHTML= table

}
read()
