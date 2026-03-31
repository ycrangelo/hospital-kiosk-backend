import authRoute from "./router/auth/authRoute.js";

// index.js
import express from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
// JSON.parse(req.body)
// app.use(cors());
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Another example route
app.get('/about', (req, res) => {
  res.send('This is a simple Express app.');
});

console.log("server: mounting /api/auth routes", typeof authRoute);
app.use('/api/auth', authRoute)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});