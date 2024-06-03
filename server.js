const webpack= require('webpack')
const webpackDevMiddleware= require('webpack-dev-middleware')
const webpackConfig= require('./webpack.config.js')
const express = require('express');
const path = require('path');
const mysql = require('mysql')
const app = express();
const PORT = 3000;

var conexion = mysql.createConnection(
  {
    host: 'localhost',
    database:'base de datos.sql',
    user: 'root',
    password:''

  }
);
conexion.connect(function(error){
    if(error){
      throw error;
    }else{
      console.log('exito')
    }
});
conexion.end();

app.use(express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(req,res,next){
  res.send('enviando')
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
})