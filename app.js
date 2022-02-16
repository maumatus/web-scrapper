const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

//Definimos la url desde la que se hara scrapping. 
//Luego se agregara un input desde DOM y una interfaz.
const url = ''