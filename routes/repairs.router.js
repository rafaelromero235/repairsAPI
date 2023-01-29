const { Router } = require('express');
const router = Router();
const RepairsController = require('../controllers/repairs.controller');

router.get('/', RepairsController.findDates);

router.get('/:id', RepairsController.findate);

router.post('/', RepairsController.createDate);

router.patch('/:id', RepairsController.updateDate);

router.delete('/:id', RepairsController.deleteDate);

module.exports = router;
