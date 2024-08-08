const express = require('express');
const app = express();
const path = require('path');
const routesAdmin = require('./routers/routersAdmin');

const {engine} = require("express-handlebars");

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'handlebars');

app.use('/', routesAdmin);

app.listen(process.env.port || 3000);
console.log('servidor rodando');
