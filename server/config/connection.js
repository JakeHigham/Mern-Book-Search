const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JakeHigham:7MHSDjIG8Dk1kJ3s@cluster0.yy9x5v6.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
