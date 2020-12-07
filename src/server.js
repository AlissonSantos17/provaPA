const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

const port = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.use(routes)

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`Server running in localhost:${port}!`)
});