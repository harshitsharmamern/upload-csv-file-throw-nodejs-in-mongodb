
const express = require("express")
const route = express.Router()
const model = require('../conn/model')
var multer = require('multer')
const path = require('path')
const fs = require("fs");
const fastcsv = require("fast-csv");


var storage = multer.diskStorage({
    destination: './public/',

    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })

route.post("/", upload.single('file'), (req, res) => {
    const { name, branch } = req.body
    const file = req.file.filename

    let stream = fs.createReadStream("file");
 let csvData = [];
    let csvStream = fastcsv
      .parse()
      .on("data", function(data) {
        csvData.push({
          id: data[0],
          name: data[1],
          description: data[2],
          createdAt: data[3]
        });
      })
      .on("end", function() {
        // remove the first line: header
        csvData.shift();
    
        // save to the MongoDB database collection
      });
    
    stream.pipe(csvStream)


    const database = new model({ name,branch , file : csvData  })
database.save()


    })

route.get("/", (req, res) => {
    
    res.render("sinup")


})


module.exports = route







