const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');

router.get('/', async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
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