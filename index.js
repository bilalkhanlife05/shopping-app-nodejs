const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const adminRouter = require("./routes/admin");


const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");



const PORT = process.env.PORT || 7070;
const app = express();
const DB = "mongodb://bilal:bilal123@ac-ivlxzh7-shard-00-00.bec44to.mongodb.net:27017,ac-ivlxzh7-shard-00-01.bec44to.mongodb.net:27017,ac-ivlxzh7-shard-00-02.bec44to.mongodb.net:27017/?ssl=true&replicaSet=atlas-u3107b-shard-0&authSource=admin&retryWrites=true&w=majority";


app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


mongoose.connect(DB)
.then(() => {

    console.log('Connection is successfull');

})
.catch((e) => {

});





app.listen(PORT, "0.0.0.0", function (){

    console.log(`connected at port ${PORT}`);
    
});