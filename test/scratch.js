
// for(var i in foo){
//     alert(i); // alerts key
//     alert(foo[i]); //alerts key's value
// }

// Object.keys(item.getFields()).forEach(function(key, index) {
// key: the name of the object key
// index: the ordinal position of the key within the object
// });

// Object.keys(obj).map(e => console.log(`key=${e}  value=${obj[e]}`));

// let mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/ticketcamp');

// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
    // we're connected!
// });

// let ticketSchema = mongoose.Schema({
//     name: String,
//     owner: String,
//     issueNumber: Number
// });

// let Database = mongoose.model("Database", ticketSchema);

// Database.create();

// const project = new Database({
//     name: "myProject",
//     owner: "me",
//     issueNumber: 20
// });

// project.save(function(err, project) {
//     if(err) {
//         console.log("Failed to save project " + project + "... error: " + err);
//     }
//     else {
//         console.log("Successfully saved project " + project);
//     }
// });

// function collectionExists($collectionName)
// {
//     var $mongo = new Mongo();
//     var $collectionArr = $mongo => selectDB('yourrec') => listCollections();
//     if (in_array($collectionName, $collectionArr)) {
//         return true;
//     }
//     return false;
// }

// Object.values(item.getFields()).forEach(value => function() {
//     value = validation.requireOrSet(value, "");
// });

// module.exports = {
//     add: function () {
//         // whatever
//     },
//     get: function () {
//         // whatever
//     }
// };

/* Native javascript input sanitizer */
// let a = "{$gt:25}";
// console.log(a);
// console.log(escape(a));