const express = require('express')
const app = express()
app.use(express.json());
const usuarioRouter = require('./routers/UsuarioRouter');
app.use('/usuarios', usuarioRouter);
require('dotenv').config();
const port = process.env.API_PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


