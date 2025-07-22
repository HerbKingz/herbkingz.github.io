const router = require('express').Router();
const ctrl = require('../controllers/statsController');
router.get('/latest', ctrl.getLatest);
module.exports = router;
