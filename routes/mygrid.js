module.exports = (app)=>{
    var conexao = require('../config/database')

    conexao()
    
    var mygrid = require('../models/mygrid')

    app.get('/mygrid',(req,res)=>{
        res.render('mygrid.ejs')
    })

    app.post('/mygrid',(req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/mygrid')})
        .catch(()=>{res.send('não foi possível gravar')})
    })
}

