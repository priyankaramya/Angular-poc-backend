const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.1a6krmm.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;