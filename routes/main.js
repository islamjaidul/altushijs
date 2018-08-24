// Route service provider
// All services need to registered here

const DIR = '../src/Services';
const Services = [
    require(`${DIR}/MosqueSearch/routes/api`),
]
        
module.exports = Services;


/* let Services = [];

async function registerRoute() {
    const File = require('fs');
    const root = __dirname.replace('/routes', '');
    const path = `${root}/src/Services`;
   console.log(path);
    module.exports = Services;
}

registerRoute(); */
        
