'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':' + 
      process.env.MONGO_PORT_27017_TCP_PORT || 'mongodb://localhost/gishapp-dev',
  },

  seedDB: true
};
