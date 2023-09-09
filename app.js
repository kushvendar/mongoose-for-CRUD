// getting-started.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating:Number,
//     review:String
//   });

//   const Fruit=mongoose.model("Fruit",fruitSchema);

//   const fruit=new Fruit({
//     name:"apple",
//     rating:"7",
//     review:"it does not keeps doctor away"
//   })

const personSchema=new mongoose.Schema({
    name:String,
    age:Number
});

const Person=mongoose.model("Person",personSchema);

const person =new Person({
name:"Abhram",
Age:"19"
})

person.save();