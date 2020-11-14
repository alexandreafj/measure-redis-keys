const {
    formatByteSize,
    getRedisKeys,
    getDataKey
} = require('./helpers/index');

const sizeof = require('object-sizeof')

const measureKeys = async () => {
    console.time('start process');
    try {

        const { keys = [] } = await getRedisKeys();

        const keys_by_size = [];

        for (let index = 0; index < keys.length; index++) {

            const key = keys[index];

            const { data } = await getDataKey({ key });

            const bytes = sizeof(data);
        
            const format = formatByteSize({ bytes });
        
            keys_by_size.push({
                key,
                size: bytes,
                size_format: format,
            });
            console.log(`current key:${index}`);
            console.log(`total keys:${keys.length}`);
        }

        keys_by_size.sort((a , b) => b.size - a.size);

        const data = new Date();
        
        require('fs').writeFile(`./keys-by-size-${data.toISOString()}.json`, JSON.stringify(keys_by_size), (err) => {});

        console.timeEnd('start process');
    } catch (error) {
        console.error(error);
    }
}
measureKeys();