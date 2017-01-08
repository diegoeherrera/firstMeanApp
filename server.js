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
app.listen(3001);
