const {
    keys
} = require('../../utils/index.js');

const redis_key_pattern = process.env.KEY_PATTERN;

const getRedisKeys = async () => {

    const keys_raw = await keys(redis_key_pattern);

    const has_keys_raw = Array.isArray(keys_raw) && keys_raw.length > 0;

    if (has_keys_raw) {

      const keys = keys_raw;

      return {
        keys,
      };

    }

    return {
      keys: [],
    };
}

module.exports={getRedisKeys};