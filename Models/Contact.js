const mongoose=require('mongoose');

//create schema
const contactSchema=new mongoose.Schema({
  name:{
    type:String,  //type of schema
    required:true
  }, 
  phone:{
    type:String,
    required:true

  }
});
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;