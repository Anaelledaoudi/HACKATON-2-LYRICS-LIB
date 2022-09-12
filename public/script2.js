//get all the songs from the sql

async function getData(){
    console.log('hii')
    const res=fetch(`http://localhost:5000/songs`)
   .then(res=>res.json())
   .then(data=>{
    let div=document.getElementById('div');
    getSongs(data);
    })
  }
  getData();

function getSongs(arr){
    //get request to the server
   
   const container=document.getElementById('grid-container')
   for(let j=0;j<arr.length;j++){
   const div=document.createElement('div');
   div.classList.add('allLyrics');
   div.setAttribute('id',j)//('sql-id');
   const p=document.createElement('p');
   p.textContent=arr[j].title//title-->req to the server
   p.addEventListener('click',()=>{showLyrics(event,arr[j].lyric)});
   console.log(arr[j].lyric);
   div.appendChild(p);
   const i=document.createElement('i');
   i.setAttribute('class',"fa-solid fa-trash");
   i.addEventListener('click',deleteSong);
   div.appendChild(i);
   container.appendChild(div);
 }
}
function showLyrics(evt,txt){
//req to the server-get the sql songLyrics where sql.id==evt.target.id
const div=document.createElement('div');
div.classList.add('dimScreen');
div.setAttribute("id","divLyr")
const i=document.createElement('i');
i.setAttribute('class',"fa-solid fa-xmark");
i.addEventListener('click',closeLyrics);
div.appendChild(i);
const p=document.createElement('p');
p.innerHTML=txt   //"<h1>Hi</h1>"//lyrics sql;
div.appendChild(p);
// div.classList.add('dimScreen');
document.body.appendChild(div);
}
function closeLyrics(evt){
    console.log(evt.target);
    console.log(evt.target);
    evt.target.parentElement.remove();
 }

function deleteSong(evt){
    const id= evt.target.parentElement.id
   //erase the element in sql table where id==sql_id
   evt.target.parentElement.remove();
   //update sql table whitout the song id-or to run get songs an other time
   
   //getSongs();

}