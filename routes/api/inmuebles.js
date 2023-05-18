const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Prueba');
});

router.post('/', (req, res) => {
    res.send('Prueba POST');
});

router.put('/:idInmueble', (req, res) => {
    res.send('Prueba PUT');
});

router.delete('/:idInmueble', (req, res) => {
    res.send('Prueba DELETE');
});

module.exports = router;