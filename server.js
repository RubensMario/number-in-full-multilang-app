// Server para página estática na pasta /public
import express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3338;
const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
