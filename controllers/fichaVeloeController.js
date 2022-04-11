const { time } = require("console");
const fs = require("fs")
const veloe_campos = require("../JSON/campos_veloe");


module.exports = {
    async veloe(req, res){
        res.render('Veloe')
    },

    async criar(req, res, next){
        let campos = { ...req.body }
        
        let id_001 = veloe_campos[0].valor 

        // + "\r\n" + "OK"

        var data = new Date()
        var dia
        var mes
        var ano = data.getFullYear()

            if(data.getDate < 10){
                var diaTexto = data.getDate()
                dia = "0" + diaTexto.toString()
            }else{
                var diaTexto = data.getDate()
                dia = diaTexto.toString()
            }

            if(data.getMonth() < 10){
                var mesTexto = data.getMonth()
                mes = "0" + mesTexto.toString()
            }else{
                var mesTexto = data.getMonth()
                mes = mesTexto.toString()
            }

        let id_002 = dia + mes + ano
        let id_003 = () => {fs.readdir('./Veloe', (err, paths) => {return paths})}

        console.log(id_003())
        
        
        // fs.writeFile('Veloe\\arquivo.txt', valor, (err)=> {
        //     if (err) throw err;
        //     console.log("O arquivo foi criado!");
        // })
        //     res.render("veloe")
    },
}
