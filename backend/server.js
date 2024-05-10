const express = require("express");
require('dotenv').config()
const { startDatabase, isConnected } = require('./db')
const app = express();
const port = 3000;
const cors = require('cors');
const FeedbackRouter = require("./Routes/Feedback.route");
const { router } = require("./Routes/routes");
const FavouriteRouter = require("./Routes/Favourite.route")
const CartRouter = require("./Routes/Cart.route")

app.use(cors())
app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })
});
app.use(express.json())
app.use(FeedbackRouter)
// app.use("/api/auth", router)
app.use(FavouriteRouter)
app.use(CartRouter)

app.listen(port, async () => {
  await startDatabase();

  console.log(`🚀 Server running on : 💻✨ ${port}`);
}); 