var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post('/file_upload', function(req, res) {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  var file = __dirname + "/" + req.files.file.name;
  
  fs.readFile( req.files.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if(err) {
        console.log(err);
      } else {
        response ={
          message:'File upoloaded successfully',
          filename: requ.files.file.name
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
})
var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Ex. app listening at http://%s:%s", host, port);
})


// app.use(express.static('public'));
// 
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
// 
// var server = app.listen(8081, function() {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("example app list at http://%s:%s", host, port);
// })

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp'}));

// app.get('/index.htm', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.htm");
// });
// 
// app.post('/file_upload', function (req, res) {
//   console.log(req.files.file.name);
//   console.log(req.files.file.path);
//   console.log(req.files.file.type);
//   var file = __dirname + "/" + req.files.file.name;
//   
//   fs.readFile( req.files.file.path, function (err, data) {
//     fs.writeFile(file, data, function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         response = {
//           message: 'File uploaded successfully',
//           filname:req.files.file.name
//         };
//       }
//       console.log(response);
//       res.end( JSON.stringify(response));
//     });
//   });
// });

// app.post('/process_post', urlencodedParser, function (req, res) {
//   response = {
//     first_name:req.body.first_name,
//     last_name:req.body.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("Example app listening at http://%s:%s", host, port);
// });

// app.get('/', function(req, res) {
//   console.log("Got GET request for homepage");
//   res.send('Hello World');
// });
// 
// app.post('/', function(req, res) {
//   console.log("Got a POST requset for homepage");
//   res.send('Hello POST');
// });
// 
// app.delete('/del_user', function(req, res) {
//   console.log("Got DELETE request for /del_user");
//   res.send('Hello DELETE');
// });
// 
// app.get('/list_user', function(req, res) {
//   console.log("Got a GET request for /list_user");
//   res.send('Page Listing');
// });
// 
// app.get('/ab*cd', function(req, res) {
//   console.log("Got a GET request for /ab*cd");
//   res.send('Page Pattern Match');
// });
// 
// var server = app.listen(8081, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   
//   console.log("Example app listening at http://%s:%s", host, port);
// });