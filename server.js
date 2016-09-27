
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');


app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    //to support URL-encoded bodies
    extended: true
}));

//setting up the static files for hosting
app.use(express.static(__dirname + '/'));

console.log("file initialized");

app.use(connection(mysql,{
    host        : 'localhost',
    user        : 'ui',
    password    : 'ui1234',
    database    : 'information_cart',
    },'request'));

//Routing
//this is routing but to connect the rest API with our database



app.get("/service/person_table",function(req, res, next){
   //arrays to store dynamic parameters

    var ids=[];
    
    var query = "SELECT * FROM person_table";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, ids,function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            console.log(results);
            
        });

    });

});

app.get( "/service/person_table/:personid",function(req, res, next){
   //arrays to store dynamic parameters
    var ids =[];
    var personid=req.params.personid;
    ids.push(personid);
    
    var query = "SELECT * FROM person_table WHERE personid = ?";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, ids, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            
        });

    });

});

//
//
// app.get("/service/inventory",function(req, res, next){
//    //arrays to store dynamic parameters
//
//
//     var query = "SELECT * FROM inventory";
//     req.getConnection(function(err, connection){
//        if(err) return next(err);
//
//         connection.query(query, function(err, results){
//            if(err){
//                console.log(err);
//                return next("Mysql error, check your query");
//            }
//             res.json(results);
//             console.log(results);
//
//         });
//
//
//     });
//
//
// });
//
// app.get( "/service/inventory/:inventorytype_id",function(req, res, next){
//    //arrays to store dynamic parameters
//     var inventorytype_ids =[];
//     var inventorytype_id=req.params.inventorytype_id;
//     inventorytype_ids.push(inventorytype_id);
//
//     var query = "SELECT * FROM person_table WHERE inventorytype_id = ?";
//     req.getConnection(function(err, connection){
//        if(err) return next(err);
//
//         connection.query(query, inventorytype_ids, function(err, results){
//            if(err){
//                console.log(err);
//                return next("Mysql error, check your query");
//            }
//             res.json(results);
//
//         });
//
//
//     });
//
//
// });

//routing
app.get('/index', function(req, res){
   res.redirect('/views/index.html'); 
    });

//End of routing

//launching application on localhost.
app.listen(3000, function(){
   console.log('server loaded on port 3000');
    
});