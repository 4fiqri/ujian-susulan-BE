const db = require('../1.database')

module.exports = {
    //1
    getAllProduct : (req,res) => {
        var sql = `select * from product;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    //2
    getProductById : (req,res) => {
        var id = req.params.id
        var sql = `select * from product where product.id=${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    //3
    getDetailById : (req,res) => {
        var id = req.params.id
        var sql = `select product.id, nama, deskripsi, warna, harga from product
        join product_detail on id_product = product.id where id_product=${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    //4
    deleteProduct : (req,res) => {
        var id = req.params.id
        var sql= `delete from product where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/product/getAllProduct')
        })
    },
    
    //5
    addProduct : (req,res)=>{
        var data = {
            nama : req.body.nama,
            harga : req.body.harga
        }
        var sql = `insert into product set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/product/getAllProduct')
        })
    },

    //6
    updateProduct : (req,res)=>{
        var id = req.params.id
        var nama = req.body.name
        var sql = `update product set nama = '${nama}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/categorylist/getAllcategories')
        })
    },
}