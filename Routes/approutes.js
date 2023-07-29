const controllers=require('../controllers/bookingcontrollers')

const express=require('express')

const router=express.Router()

router.get('/all',controllers.getAll)

router.post('/add',controllers.addNew)

router.delete('/delete/:id',controllers.delete)
router.put('/edit/:id',controllers.edit)

exports.routes=router