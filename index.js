import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
  res.send(`Hello from Express on Node running on port ${PORT}`)
);
app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);
