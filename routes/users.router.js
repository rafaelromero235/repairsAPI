const { Router } = require('express');
const router = Router();
const userController = require('../controllers/users.controller');

router.get('/', userController.findusers);

router.get('/:id', userController.finduser);

router.post('/', userController.createUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
