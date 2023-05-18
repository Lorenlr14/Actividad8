const { model, Schema } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: String,
    letra: String,
    extension: Number,
    num_hab: Number,
    alquilado: Boolean,
    nomb_prop: String,
    email: String
});

module.exports = model('inmueble', inmuebleSchema);