const express = require("express");  // Express ko import karo
const app = express();

app.get("/",function(request,response){
    response.send("hello");
});
app.get("/Contact",function(request,response){
    response.send("Contact me: hasnainwasl17@gmail.com");
});
app.get("/About",function(request,response){
    response.send("MY name is hasnian, i love the app beer");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
