const mongoose = require('mongoose');
const config = require('../config/config.js');
(async function(){
    await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
})();