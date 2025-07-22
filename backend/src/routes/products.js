const router = require('express').Router();
const ctrl = require('../controllers/productsController');
router.get('/', ctrl.getAll);
module.exports = router;
