const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/navigation', require('./routes/navigationRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));
app.use('/api/notices', require('./routes/noticeRoutes'));

app.get('/', (req, res) => {
  res.send('DCE Darbhanga Clone API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
