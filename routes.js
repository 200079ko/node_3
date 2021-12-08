const express = require('express')
const router = express.Router()

const homeController = require('./controllers/HomeController')
const itemController = require('./controllers/ItemController')
const loginController = require('./controllers/LoginController')
const userController = require('./controllers/UserController')

router.get('/', homeController.index);
router.get('/profile',homeController.profile)

router.get('/item',itemController.index)
router.get('/item/:id',itemController.show)

router.get('/user/edit/:id',userController.edit)

router.get('/login',loginController.index)
router.post('/auth',loginController.auth)

module.exports = router