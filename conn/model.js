const mongoose= require('mongoose')



const Schema = mongoose.Schema({

name:{
    type: String
},branch:{
    type: String
}
,

file:{
    type: String
}

})

const model = mongoose.model('sinup',Schema)


module.exports = model