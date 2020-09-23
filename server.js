// Server para página estática na pasta /public
import express from 'express';
import * as path from 'path';

const app = express();
// process.env.PORT: variável requerida pelo Heroku para o build
// com valor preenchido pelo seu servidor para determinar porta a ser usada
const port = process.env.PORT || 3338;
// path.resolve() dá o caminho absoluto a partir de um caminho relativo
// path.resolve(arquivo.txt) -> /User/Documentos/arquivo.txt
const __dirname = path.resolve();

/*Ao acessarem o diretório raiz '/', 
será servida a página estática em /.../public
através da porta definida em port
 */

// path.join concatena os dois argumentos de entrada
// path.join(/a,/b) -> /a/b

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
