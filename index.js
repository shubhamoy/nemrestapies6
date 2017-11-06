import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) =>
  res.send(`Hello from Express on Node running on port ${PORT}`)
);
app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);
