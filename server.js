const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: true }));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoose-social-media",
  {
    useUnifiedTopology: true,
  }
);

// Logs Mongo queries being executed.
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`💁‍♀️ Connected on localhost:${PORT}`));
