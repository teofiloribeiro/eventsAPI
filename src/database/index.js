const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/meetingrest', { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;


module.exports=mongoose;