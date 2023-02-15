let text=document.querySelector(".links")
let toggle=document.getElementById("img2")
console.log(text)
console.log(toggle)
toggle.onclick=()=>{
    if(text.style.display=="none"){
        text.style.display="block"
    }else{
        text.style.display="none"
    }
}