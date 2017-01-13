var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList',function(req,res){
  console.log("get request received");
  db.contactlist.find(function (err,docs){
    console.log(docs);
    console.log(err);
    res.json(docs);
  });
});

app.post('/contactList',function(req,res){
//hace que esto aparezca en el servidor ventana cmd
db.contactlist.insert(req.body,function(err,doc){
  res.json(doc);
  console.log(req.body);
});



});


app.delete('/contactList/:id',function(req,res){
//extraigo Id de la URL
var id=req.params.id;

//borro en mongo el dato y paso callback
db.contactlist.remove({_id: mongojs.ObjectId(id)},function(err,doc){

//envio la respuesta al controlador
res.json(doc);
});
//se vera en la consola
console.log("id in server: "+id);
});
app.listen(3001);
