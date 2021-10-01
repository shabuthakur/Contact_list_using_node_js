//reqiure library
const mongoose=require('mongoose');

//coonect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection (to check if it is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//if running
db.once('open',function(){
  console.log('successfully conneted to the database');
})