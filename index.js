import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nemapi', {
  useMongoClient: true
});

// Setup bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

app.get('/', (req, res) =>
  res.send(`Hello from Express on Node running on port ${PORT}`)
);
app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);
