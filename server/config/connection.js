const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JakeHigham:7MHSDjIG8Dk1kJ3s@cluster0.yy9x5v6.mongodb.net/bookSearch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

