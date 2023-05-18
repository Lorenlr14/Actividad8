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

router.post('/', async (req, res) => {
    try {
        const result = await Inmueble.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:idInmueble', async (req, res) => {
    const { idInmueble } = req.params;
    try {
        const result = await Inmueble.findByIdAndUpdate(idInmueble, req.body, { new: true });
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:idInmueble', (req, res) => {
    res.send('Prueba DELETE');
});

module.exports = router;