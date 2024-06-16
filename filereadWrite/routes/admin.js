const express = require('express')
const router = express.Router()

router.get('/add-product',(req,res) => {
    res.send(`
        <form action="/product" method="POST">
          <input type='text' name='item name'>
          <input type='text' name='quantity'>
          <button type='submit'>Submit</button>
        </form>
      `);
})

router.post('/product',(req,res)=>{
          res.send(req.body)
         res.redirect('/')
})

module.exports = router 