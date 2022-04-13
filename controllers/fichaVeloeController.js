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
        
        let contador 

        let id_003_1 =  fs.readdirSync('./Veloe', (err, paths) => {})
        if(id_003_1[0] == undefined){
            contador = id_003_1.length
            contador += 1 
        }else{ 
            contador = id_003_1.length
            contador += 1  
        }

        let id_003
            
        if(contador < 10){
         id_003 = "00" + contador
        }else{
        if(contador < 100){
         id_003 = "0" + contador
        }else{
         id_003 = contador
        }
        }   
       

        let id_004 = veloe_campos[1].valor 

        let gerarLinha_1 = id_001 + id_002 + id_003 + id_004 + "\r\n"

        let id_005 = veloe_campos[2].valor
        // let id_006_1 = campos.CNPJ.replace(/[^\d]+/g,'')
        // let cnpjMatriz = id_006_1.substr(0,8) 
        // let cnpjFilial = id_006_1.substr(8,4)
        // let cnpjDigito = id_006_1.substr(12,2)
        let id_006 = campos.CNPJ.replace(/[^\d]+/g,'')
        let id_007 = campos.NOME_FANTASIA
        let id_008 = campos.RAZAO_SOCIAL
        
        let id_009_1 = campos.TIPO_EMPRESA

        if(id_009_1 == "Tipo de Empresa..."){
            id_009_1 = "000"
        }else{
        if(id_009_1 < 10){
            "00" + id_009_1 
        }else{
            "0" + id_009_1 
        }
        }

        let id_009 = id_009_1

        let gerarLinha_2 = id_005 + id_006 + id_007 + id_008 + id_009

        console.log(id_008)

        

        // fs.writeFile('Veloe\\TERADE_' + id_002 + "_" + id_003 + ".txt", gerarLinha_1 + gerarLinha_2, (err)=> {
        //     if (err) throw err;
        //     console.log("O arquivo foi criado!");
        // })
            res.render("veloe")
    },
}
