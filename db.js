const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.rbufb03.mongodb.net/Angular?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;