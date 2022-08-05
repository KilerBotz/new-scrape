const kiler = require('pinterest-scrape');
const judul = 'bot'

kiler.pinterest(judul)
    .then(result => {
     console.log(result)
});

