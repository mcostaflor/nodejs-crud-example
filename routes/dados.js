var router = require('express').Router();
var Dado = require('../models/dado');

router.get('/', function (req, res, next) {
    Dado.find({})
        .then(doc => {
            res.json(doc);
        })
        .catch(error => {
            res.json(error);
        });
});
router.get('/:id', function (req, res, next) {
    Dado.findById(req.params.id)
        .then(doc => {
            res.json(doc);
        })
        .catch(error => {
            res.json(error);
        });
});
router.post('/', function (req, res, next) {
    new Dado({
        texto: req.body.newTexto
    })
        .save()
        .then(doc => {
            res.json(doc);
        })
        .catch(error => {
            res.json(error);
        });
});
router.put('/:id', function (req, res, next) {
    Dado.findByIdAndUpdate(req.params.id, { texto: req.body.newTexto })
        .then(doc => {
            res.json(doc);
        })
        .catch(error => {
            res.json(error);
        });
});
router.delete('/:id', function (req, res, next) {
    Dado.findByIdAndDelete(req.params.id)
        .then(doc => {
            res.json(doc);
        })
        .catch(error => {
            res.json(error);
        })
});

module.exports = router;
