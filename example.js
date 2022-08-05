const kiler = require('./index');
const judul = 'bot'

kiler.pinterest(judul) //ganti klalo mau pake linkwa
    .then(result => {
     console.log(result)
});