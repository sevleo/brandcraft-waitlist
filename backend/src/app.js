// backend/server.js
const cors = require("cors");
const express = require("express");
const http = require("http");
const mainRouter = require("./app/routes/mainRouter");
require("./storage/db");

// App & Server
const app = express();
const server = http.createServer(app);
const port = 3000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

// Use JSON middleware to parse the body
app.use(express.json());

app.use("/", mainRouter);

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

server.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
