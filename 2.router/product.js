const router = require('express').Router()
const { getAllProduct,
        getProductById,
        getDetailById,
        deleteProduct,
        addProduct,
        updateProduct
        
      } = require('./../3.controller').product

router.get('/getAllProduct', getAllProduct)
router.get('/getProductById/:id', getProductById)
router.get('/getDetailById/:id', getDetailById)
router.delete('/deleteProduct/:id', deleteProduct)
router.post('/addProduct', addProduct)
router.put('/updateProduct/:id', updateProduct)

module.exports = router