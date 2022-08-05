# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/KilerBotz/pinterest-scrape/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/KilerBotz/pinterest-scrape/issues/new)


# Installation

## Latest
`npm i github:KilerBotz/pinterest-scrape`

## Npm 
`npm i pinterest-scrape`


# Require
```js
const kiler = require("pinterest-scrape")
```

# Docs

## Example
```js
const kiler = require('pinterest-scrape');
const judul = 'bot'

kiler.pinterest(judul)
    .then(result => {
     console.log(result)
});
```
