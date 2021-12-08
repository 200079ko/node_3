const item = require('../models/item')
exports.index = (req,res) => {
    const id = req.params.id
    let data = {}
    data.title = '商品データ'
    data.items = item.values
    res.render('item/index.ejs',data)
}
exports.show = (req, res) => {
    const id = req.params.id
    let data = {}
    data.title = '商品データ'
    data.item = item.find(id)
    res.render('item/show.ejs', data)
}