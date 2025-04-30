const colorGenerator=document.getElementById("colorGenerator");

colorGenerator.onclick=()=>{
let letter="0123456789ABCDEF";
let bgcolor="#";
for(let i=0; i<6; i++){
   bgcolor+=letter[Math.floor(Math.random()*16)]
   }
   document.body.style.backgroundColor=bgcolor;
}

