const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const fs = require('fs');

//Definimos la url desde la que se hara scrapping. 
//Luego se agregara un input desde DOM y una interfaz.

const url = 'https://dragonframe.com/'


axios(url)

    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        //console.log(html)
        const articles = []

        $('a', html).each(function() { //<-- cannot be a function expression
            const title = $(this).text()
            //const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        //$.html();
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
