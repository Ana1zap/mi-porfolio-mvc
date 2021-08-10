const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

/*routing*/

const mainRouter = require('./router/main');

app.use('/', mainRouter); 
app.use('/about', mainRouter); 

app.listen(port, () => console.log('Server running in http://localhost:' + port));