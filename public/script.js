const btnSearch=document.getElementById('btnSearch');
btnSearch.addEventListener('click',retrieveData);
let globalSongId;
let globalSongTitle;
function retrieveData(){
    const search=document.getElementById('search').value;
    const singerNames=search.split(" ");
     getSongsBySinger(singerNames)
}
//search
async function getSongsBySinger(arr){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c607295270mshe9344ea719be864p1a43b1jsn5ee3f8534840',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

fetch(`https://genius-song-lyrics1.p.rapidapi.com/search?q=${arr[0]}%20${arr[1]}&per_page=10&page=1`, options)
	.then(response => response.json())
	.then(response => {
        const hits=response.response.hits
        console.log(hits)
        clear();
        for(let i=0;i<hits.length;i++){
            const{result:{id,title,header_image_thumbnail_url}}=hits[i];
            happenedSingerSong(id,title,header_image_thumbnail_url);
        }
    })
   
   .catch(err => console.error(err));
}
function clear(){
   const grid=document.getElementById('grid-container');
   while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}
function happenedSingerSong(id,title,img){
    const grid=document.getElementById('grid-container');
    const div=document.createElement('div');
    div.style.backgroundImage=`url(${img})`;
    div.setAttribute('id',id);
    const p=document.createElement('p');
    p.textContent=title;
    p.classList.add('title');
    div.appendChild(p);
    div.classList.add('imgStyle')
    div.addEventListener('click',getLyricaBySongId);
    grid.appendChild(div);
}

function getLyricaBySongId(evt){
//id of the song
console.log(evt.target);
globalSongId=evt.target.id;
globalSongTitle=evt.target.querySelector('p').innerText;
const id=evt.target.id;
console.log(id);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c607295270mshe9344ea719be864p1a43b1jsn5ee3f8534840',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

fetch(`https://genius-song-lyrics1.p.rapidapi.com/songs/${id}/lyrics`, options)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        const {response:{lyrics:{lyrics:{body:{html}}}}}=data;
     
        console.log(html);
    //     const{body:{plain}}=lyrics
    //     console.log(plain);
        createLyrics(html)
          })
	.catch(err => console.error(err));

//     fetch(`http://localhost:5000/search`,{
//         method:"POST",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             id:parseInt(id)
//         })
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
  }

 function createLyrics(songLyrics){
   //const div=document.createElement('div');
   const div=document.createElement('div');
   const i=document.createElement('i');
   i.setAttribute('class','fa-solid fa-xmark iMy')
   i.addEventListener('click',closeLyrics)
   div.appendChild(i);
   const p=document.createElement('p');
   p.innerHTML=songLyrics;
   div.appendChild(p);
   div.classList.add('dimScreen');
   div.setAttribute("id","divLyr")
   //div.appendChild(p);
  // div.classList.add('dimScreen');
   const btn=document.createElement('btn');
   btn.innerText='Add Lyrics';
   btn.addEventListener('click',addLyrics);
   div.appendChild(btn) ;
   document.body.appendChild(div);
 }
 function closeLyrics(evt){
    console.log(evt.target);
    console.log(evt.target);
    evt.target.parentElement.remove();
 }
//name on a colorful background and when click its redirect to another page with the lyrics
async function addLyrics(){
 //add to the sql post method
 console.log('songId==>',globalSongId);
 console.log('songTitle==>',globalSongTitle);

  let obj={
    songid:globalSongId,
    songtitle:globalSongTitle
  }
  fetch('http://localhost:5000/addSong',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    //because of this i'll get on the body
    body:JSON.stringify(obj)
    //same=> body:JSON.stringify({email,password})
    //{msg:'ffff'}----->its an obj
})
//its the response i'll get from the server
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.msg='OK'){
        window.location.href=''
    }
})
.catch(e=>{
    console.log(e);
})

}




