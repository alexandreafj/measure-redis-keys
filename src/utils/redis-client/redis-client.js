const redis = require("redis");

const { 
    redis : {
        host,
        port
    }
} = require('../../config/index.js');

const client = redis.createClient({ host, port });

const { promisify } = require("util");

client.on('connect', () => {});
  

client.on("error", function(error) {
    console.error(error);
});

module.exports = {
    keys: promisify(client.keys).bind(client),
    get: promisify(client.get).bind(client),
}