const express = require('express')
const app = express()
const usuarioRouter = require('./routers/UsuarioRouter');
app.use('/usuarios', usuarioRouter);
app.use(express.json());
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


