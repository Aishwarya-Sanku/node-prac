var http = require('http');
var fs = require('fs');

//read the file
// http.createServer(function (req,res){
//     fs.readFile('demo.html',function(err,data){
//     res.write(data);
//     });
// }).listen(8080);


//check in the file location its there 
// fs.appendFile('qwerty.txt','hello context',function(err){
//     if(err) throw err;
//     console.log('saved');

// });
 

 var f = fs.open('qwerty.txt','r', function (err,file){
    if(err) throw err;
    console.log('open file ')
})

console.log(f + "lll");
