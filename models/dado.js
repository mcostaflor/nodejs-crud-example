var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dadoSchema = new Schema({
    texto: { type: String, require: true, unique: true, maxlength: 40 },
});

module.exports = mongoose.model('Dado', dadoSchema);