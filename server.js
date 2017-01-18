var express = require("express");
var app = express();

//Creating Router() object



// Provide all routes here, this is for Home page.

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
app.get('/',function(req,res){
   res.json({"unix" : null,"date":null}); 
});
app.get("/:data",function(req,res){
  if(isNaN(req.params.data)) {
    
    res.json({"unix" : Math.round(new Date(req.params.data).getTime()/1000),"date":req.params.data});    
  }
  else {
    var d=new Date(Number(req.params.data) * 1000);
    res.json({"unix" : req.params.data,"date":(monthNames[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear())});    

  }
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.



// Listen to this Port
app.listen(process.env.PORT ||8080,function(){
  console.log("Live at Port 8080");
});

