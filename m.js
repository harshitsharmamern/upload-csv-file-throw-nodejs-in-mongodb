const express = require ("express")
const app = express()
const port = process.env.PORT || 8000
const path = require("path")
// const route = reqire(path.join(__dirname , "/router"))
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))

require('./conn/db')

app.use('/',require('./controller/route'))


app.set("view engine", "ejs")




app.listen(port, ()=>{
    console.log(`running ${port}`)
})

