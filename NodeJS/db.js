const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/CrudDB';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false}, console.log('MongoDB Connection Succeeded...'));

module.exports = mongoose;
