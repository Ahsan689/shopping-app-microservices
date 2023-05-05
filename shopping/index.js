const express = require('express')

const app = express();

app.use(express.json())

app.use('/', (req,res, next) =>  {
    return res.status(200).json({"msg":"hello form SHOPPING"})
})
app.listen(8003,() => console.log(`cudtomer is listening on PORT : ${8003}`))