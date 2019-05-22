const db = require('../1.database')

module.exports = {
    //7
    addCart : (req,res)=>{
        var data = {
            id_product : req.body.id_product,
            harga : req.body.harga,
            qty : req.body.qty
        }
        var sql = `insert into cart set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/cart/getAllCart')
        })
    },
    
    //8
    getAllCart : (req,res) => {
        var sql = `select * from cart;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    //9
    deleteCart : (req,res) => {
        var id = req.params.id
        var sql= `delete from cart where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/cart/getAllCart')
        })
    },

    //10
    updateCart : (req,res)=>{
        var id = req.params.id
        var qty = req.body.qty
        var sql = `update cart set qty = '${qty}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/cart/getAllCart')
        })
    },
    
}