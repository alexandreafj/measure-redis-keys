const { get } = require("../../utils/index");

const getDataKey = async ({ key }) => {
    
  const raw_data = await get(key);

  const has_raw_data = raw_data !== null;

  if (has_raw_data) {
    const data = JSON.parse(raw_data);

    return {
      data,
    };
  }

  return {
    data: [],
  };
};

module.exports = { getDataKey };
