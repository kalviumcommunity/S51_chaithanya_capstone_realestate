const express = require("express");
require('dotenv').config()
const {startDatabase,isConnected} = require('./db')
const app = express();
const port = 3000


app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })
});


app.listen(port, async () => {
  await startDatabase();

  console.log(`🚀 Server running on : 💻✨ ${port}`);
});