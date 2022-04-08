const fs = require("fs")
const veloe_campos = require("../JSON/campos_veloe");


module.exports = {
    async veloe(req, res){
        res.render('Veloe')
    },

    async criar(req, res, next){
        let data = { ...req.body }
        
        let valor = veloe_campos[0].valor + "\r\n" + "OK"
        
        
        
        fs.writeFile('Veloe\\arquivo.txt', valor, (err)=> {
            if (err) throw err;
            console.log("O arquivo foi criado!");
        })
            res.render("veloe")
    },
}
