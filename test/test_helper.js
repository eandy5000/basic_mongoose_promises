const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/users_test')
mongoose.connection
    .once('open', () => console.log('Connection open'))
    .on('error', () => console.warn('Error', error))