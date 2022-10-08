import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js'
import Cors from 'cors'
//app configurable
const app = express();
const port = process.env.PORT || 8001;
const conn = 'mongodb+srv://tejinder:Teji123@cluster0.x40zw.mongodb.net/tinderdb?retryWrites=true&w=majority'
// mongodb+srv://tejinder:Teji123@cluster0.x40zw.mongodb.net/Welding?retryWrites=true&w=majority
//middleware
app.use(express.json())
app.use(Cors());
//db config
mongoose.connect(conn,{ 
    useNewUrlParser: true,
     
    useUnifiedTopology: true,
})
//api endpoints
app.get('/',(req, res) => {
    res.status(200).send('hellof')
})
app.post('/tinder/cards',(req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
       if(err){
           res.status(500).send(err)
       }else{
           res.status(201).send(data)
       }
   })
})

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
//listners 
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})