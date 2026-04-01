import authRoute from "./router/auth/authRoute.js";
import appointmentRoute from "./router/appointment/appointmentRoute.js";
import assesmentRoute from "./router/assesment/assesmentRoute.js";
import locationRoute from "./router/location/locationRoute.js";
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
console.log("server: mounting /api/appointment routes", typeof appointmentRoute);
console.log("server: mounting /api/assesment routes", typeof assesmentRoute);
console.log("server: mounting /api/location routes", typeof locationRoute);

app.use('/api/auth', authRoute)
app.use('/api/appointment', appointmentRoute)
app.use('/api/assesment', assesmentRoute)
app.use('/api/location', locationRoute)
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});