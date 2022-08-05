# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/KilerBotz/scraper/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/KilerBotz/scraper/issues/new)


# Installation

## Latest
`npm i github:KilerBotz/scraper`

## Npm 
`npm i scraper`


# Require
```js
const kiler = require("scraper")
```

# Docs

## Example
```js
const kiler = require('scraper');
const judul = 'bot'

kiler.pinterest(judul)
    .then(result => {
     console.log(result)
});
```
# OR
```js
const kiler = require('scraper');
const judul = 'bot'

kiler.linkwa(judul)
    .then(result => {
     console.log(result)
});
```
