const express = require("express");
const app = express();
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.json({ msg: "Welcome to the API...." }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/foods", require("./routes/foods"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
