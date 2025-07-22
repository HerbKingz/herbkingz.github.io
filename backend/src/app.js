const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const statsRoutes = require('./routes/stats');
const productsRoutes = require('./routes/products');
const clinicsRoutes = require('./routes/clinics');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/stats', statsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/clinics', clinicsRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT || 5000, () => console.log('Backend running'));
}).catch(console.error);
