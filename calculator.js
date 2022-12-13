//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get('/bmi_calculator',function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});

app.post('/',function(req,res){
  console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var op=req.body.op;
  var result;
  switch(op){
    case '+': result=num1+num2;break;
    case '-': result=num1-num2;break;
    case '*': result=num1*num2;break;
    case '/': result=num1/num2;break;
    case '%': result=num1%num2;break;
  }
  res.write('<!DOCTYPE html> <html> <head> <title>Operation</title> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> </head> <body> <div class="container"> <div class="row justify-content-center"> <div class="col-md-6"> <p>Thank you for submitting<br>The <span class="text-primary">'+op+'</span> of 2 numbers <span class="text-primary">'+num1+'</span> and <span class="text-primary">'+num2+'</span> = <span class="text-primary">'+result+'</span></p> </div> </div> </div> </body> </html>');
  res.send();
});

app.post('/bmi_calculator',function(req,res){
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  var results= parseFloat(weight/(height*height)).toFixed(2);
  res.send("Your bmi= "+results+"\n have a nice day!");
});

app.listen(4000,function(){
  console.log("server started on port 4000");
});
