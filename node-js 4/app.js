const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser')
// npm install body-parser



// client hamse kuch request karega , konse route pe - toh ->  /route == /home
// app.get('/home' ,(req,res)=>{          // localhost:5000/home pe browser pe kholea program
//     res.send("hello world arpiittt")
// })
// callback function fire hoga , yeh req,res vahi hai -- request , response
// app.get('/about', (req,res)=>{         // localhost:5000/about pe browser pe kholega program
//     res.send("about this page")
// })

app.get('/',(req,res)=>{  // ab file ko send karenge
    res.sendFile(__dirname + '/index.html')  // __dirname is used for detecting file i.e. index.html , its basically telling us the path
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



// app.use is a middle ware , esa code jisse kuch dusre code me help mil sake
app.use(express.static('public'))
// public folder me apni saari static file patak denge  , or serving static files


// import routes
require('./route')(app);

app.set('view engine','ejs')  // nodejs home ko dhundega views folder me , toh uska naam change nahi kar sakte , view hee rahega

app.get('/profile/:id',(req,res)=>{
    res.send("you requested user no. " + req.params.id)

    // to dynamically add name
    // data={
    //     name:req.params.id
    // }
    // res.render('home',{data:data})

})


app.listen(port,()=>{
    console.log("server is running on port " + port)
})

 