const express = require('express');
const app = express();


var data = ['code','sleep','eat']


module.exports = (app)=>{

// var data ={
//     name:"arpit",
//     status:"single"
// }
 

    //get routes
    app.get('/home' ,(req,res)=>{          // localhost:5000/home pe browser pe kholea program
    // res.render('home',{
    //     name:"arpit",status:"single"
    //     // data:data
    // })
 
    // wish se ham ejs file me use karenge
    res.render('home',{wish:data})

})
// callback function fire hoga , yeh req,res vahi hai -- request , response
app.get('/about', (req,res)=>{         // localhost:5000/about pe browser pe kholega program
    res.render('about')
})

// app.get('/',(req,res)=>{  // ab file ko send karenge
//     res.sendFile(__dirname + '/index.html')  // __dirname is used for detecting file i.e. index.html , its basically telling us the path
// })

//post routes
app.post('/sent',(req,res)=>{
    // console.log(req.body.item)
    data.push(req.body.item)
    // res.send('/send',(req,res)=>{
    // })
    res.send(data)  // returning new array after updation
})




//delete routes
app.delete('/remove/:id',(req,res)=>{

    // yaha pe ho  kya rha hai ki , jo item pe hum(client) click kr rhe hai , voh item compare hogi poore array me, one by one saare array ke elements se , if array item != our clicked item , then voh ek new array me return hogi , ese hee krte hue ek new array banega jisme voh saari items hogi except that clicked one item . okay
//    data =  data.map(item=>{
//         if(item!=req.params.id){
//             return item
//         }
//     })   
    // there is one more alternative for above code , by using Arrays.filter  method , by using this method , null values will not be created in array
    data = data.filter(item=>{
        return item!=req.params.id
    }) 

    
    console.log("aa rha hai ", req.params.id)
    res.send(data)
})









}





// CRUD = create, read, update, delete