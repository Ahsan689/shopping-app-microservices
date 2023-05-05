const express = require('express')

const app = express();

app.use(express.json())

app.use('/', (req,res, next) =>  {
    return res.status(200).json({"msg":"hello form PRODUCTS"})
})
app.listen(8002,() => console.log(`cudtomer is listening on PORT : ${8002}`))