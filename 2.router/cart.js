const router = require('express').Router()
const { getAllCart,
        addCart,
        deleteCart,
        updateCart
} = require('./../3.controller').cart

router.get('/getAllCart', getAllCart)
router.post('/addCart', addCart)
router.put('/updateCart/:id', updateCart)
router.delete('/deleteCart/:id', deleteCart)

module.exports = router