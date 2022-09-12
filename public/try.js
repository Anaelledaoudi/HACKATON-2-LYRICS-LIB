// function addData(t,s){
//     fetch(`http://localhost:5000/songs?title=${t}&lyric=${s}`,{
//         method:"POST",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             title:t,
//             song:s
//         })
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }
//addData("neta","allo efo ata ata po po lo po po po lo");

// const { json } = require("express");

async function getData(){
   console.log('hii')
  const res=fetch(`http://localhost:5000/songs`)
  .then(res=>res.json())
  .then(data=>{
   let div=document.getElementById('div');
   accessData(data);
   })
 }
 function accessData(arr){
   let div=document.getElementById('div');
   for(let i=0;i<arr.length;i++){
      let p=document.createElement('p');
      let p2=document.createElement('p');
      
      p.textContent=arr[i].title;
      p2.textContent=arr[i].lyric;

      div.appendChild(p);
      div.appendChild(p2);
   }
 }
 getData();