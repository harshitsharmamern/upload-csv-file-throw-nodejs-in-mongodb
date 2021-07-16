const mongoose= require('mongoose')

const db = 'mongodb+srv://csv:csv@cluster0.cvwlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(db, { 
    useNewUrlParser : true , 
    useUnifiedTopology : true ,
    useCreateIndex : true
});


module.exports = mongoose