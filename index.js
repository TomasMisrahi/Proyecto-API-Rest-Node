const dotenv = require('dotenv');
dotenv.config();

const chalk = require('chalk');

const express = require('express');
const server = express();

const port = process.env.PORT;
console.log(chalk.green("API"));


server.listen(port, () => {
    console.log(chalk.blue(`Servidor web corriendo en el puerto ${port}`));
});