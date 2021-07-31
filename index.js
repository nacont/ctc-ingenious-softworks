const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const logger = require('./loggerMiddleware');

app.use(cors());
app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

// INTENTÓ ENTRAR EN TODAS LAS RUTAS, COMO NO COINCIDIO CON NINGUNA RUTA, DEVOLVIÓ UN 404
app.use( (req, res, next) => {
    res.status(404).json({
        error: 'Not Found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
