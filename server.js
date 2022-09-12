const express=require('express');
const knex = require('knex');
const app=express();


const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'Anaelle3',
      database: 'hackaton2'
    }
  })
  
app.use('/',express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.listen(5000);

const obj={name:'Anaelle'};
app.get('/songs',(req,res)=>{
  db('songgg')
  .select('title','lyric')
  .then(data=>{
    console.log(data)
    res.json(data);
  }) 
  .catch(err=>console.log(err))
})

app.post('/del/:id',(req,res)=>{
  return db('songgg')
  .where(req.params.id===songgg.id)
  .del()
  .then(data=>res.json(data))  
})

app.post('/songs?title=title&lyric=lyric',(req,res)=>{
  return db('songgg')
  .insert([{title:req.body.title},{lyric:req.body.lyric}])
  .then(data=>res.json(data)) 
})