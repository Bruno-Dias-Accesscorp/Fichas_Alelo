const { time } = require("console");
const fs = require("fs")
const veloe_campos = require("../JSON/campos_veloe");
const zeros = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
const espacos = "                                                                                                                                                                                                                                                                                                             "

module.exports = {
    async veloe(req, res) {
        res.render('Veloe')
    },

    async criar(req, res, next) {
        let campos = { ...req.body }

        let id_001 = veloe_campos[0].valor


        var data = new Date()
        var dia
        var mes
        var ano = data.getFullYear()

        if (data.getDate() < 10) {
            var diaTexto = data.getDate()
            dia = "0" + diaTexto.toString()
        } else {
            var diaTexto = data.getDate()
            dia = diaTexto.toString()
        }

        if (data.getMonth() <= 10) {
            var mesTexto = data.getMonth()
            mesTexto = mesTexto += 1
            mes = "0" + mesTexto.toString()
        } else {
            var mesTexto = data.getMonth()
            mes = mesTexto.toString()
        }

        let id_002 = dia + mes + ano

        let contador

        let id_003_1 = fs.readdirSync('./Veloe', (err, paths) => { })
        if (id_003_1[0] == undefined) {
            contador = id_003_1.length
            contador += 1
        } else {
            contador = id_003_1.length
            contador += 1
        }

        let id_003

        if (contador < 10) {
            id_003 = "00" + contador
        } else {
            if (contador < 100) {
                id_003 = "0" + contador
            } else {
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
        let id_006 = campos.CNPJ.replace(/[^\d]+/g, '')

        let id_008 = campos.RAZAO_SOCIAL
        let calcRazao = id_008.length
        let valRazao = 40 - calcRazao

        if (id_008.length < 40) {
            id_008 = id_008 + espacos.substring(0, valRazao)
        }

        let id_007 = campos.NOME_FANTASIA
        let calcFantasia = id_007.length
        let valFantasia = 20 - calcFantasia

        if (id_007 == "") {
            id_007 = id_008.substring(0, 20)
        }

        if (id_007.length < 20) {
            id_007 = id_007 + espacos.substring(0, valFantasia)
        }

        let id_009 = campos.TIPO_EMPRESA

        if (id_009 == "Tipo de Empresa...") {
            id_009 = "000"
        } else {
            if (id_009 < 10) {
                id_009 = "00" + id_009

            } else {
                id_009 = "0" + id_009
            }
        }

        let id_010 = veloe_campos[3].valor

        let id_011 = campos.QUANTIDADE_TOTAL_VEICULOS

        if (id_011 == "") {
            id_011 = zeros.substring(0, 6)
        } else {
            if (id_011 < 10) { id_011 = zeros.substring(0, 5) + id_011 } else {
                if (id_011 < 100) { id_011 = zeros.substring(0, 4) + id_011 } else {
                    if (id_011 < 1000) { id_011 = zeros.substring(0, 3) + id_011 } else {
                        if (id_011 < 10000) { id_011 = zeros.substring(0, 2) + id_011 } else {
                            if (id_011 < 100000) { id_011 = zeros.substring(0, 1) + id_011 }
                        }
                    }
                }
            }
        }

        let id_012 = campos.FATURAMENTO_MEDIO_MENSAL

        if (id_012 == "") { id_012 = zeros.substring(0, 13) } else {
            if (id_012 < 10) { id_012 = zeros.substring(0, 12) + id_012 } else {
                if (id_012 < 100) { id_012 = zeros.substring(0, 11) + id_012 } else {
                    if (id_012 < 1000) { id_012 = zeros.substring(0, 10) + id_012 } else {
                        if (id_012 < 10000) { id_012 = zeros.substring(0, 9) + id_012 } else {
                            if (id_012 < 100000) { id_012 = zeros.substring(0, 8) + id_012 } else {
                                if (id_012 < 1000000) { id_012 = zeros.substring(0, 7) + id_012 } else {
                                    if (id_012 < 10000000) { id_012 = zeros.substring(0, 6) + id_012 } else {
                                        if (id_012 < 100000000) { id_012 = zeros.substring(0, 5) + id_012 } else {
                                            if (id_012 < 1000000000) { id_012 = zeros.substring(0, 4) + id_012 } else {
                                                if (id_012 < 10000000000) { id_012 = zeros.substring(0, 3) + id_012 } else {
                                                    if (id_012 < 100000000000) { id_012 = zeros.substring(0, 2) + id_012 } else {
                                                        if (id_012 < 1000000000000) { id_012 = zeros.substring(0, 1) + id_012 }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        let id_013 = espacos.substring(0, 103)

        let id_014 = id_008.substring(0, 35)

        let id_015 = espacos.substring(0, 20)

        let id_016 = campos.INSCRICAO_MUNICIPAL

        if (id_016 == "") { id_016 = zeros.substring(0, 20) } else {
            if (id_016 < 10) { id_016 = zeros.substring(0, 19) + id_016 } else {
                if (id_016 < 100) { id_016 = zeros.substring(0, 18) + id_016 } else {
                    if (id_016 < 1000) { id_016 = zeros.substring(0, 17) + id_016 } else {
                        if (id_016 < 10000) { id_016 = zeros.substring(0, 16) + id_016 } else {
                            if (id_016 < 100000) { id_016 = zeros.substring(0, 15) + id_016 } else {
                                if (id_016 < 1000000) { id_016 = zeros.substring(0, 14) + id_016 } else {
                                    if (id_016 < 10000000) { id_016 = zeros.substring(0, 13) + id_016 } else {
                                        if (id_016 < 100000000) { id_016 = zeros.substring(0, 12) + id_016 } else {
                                            if (id_016 < 1000000000) { id_016 = zeros.substring(0, 11) + id_016 } else {
                                                if (id_016 < 10000000000) { id_016 = zeros.substring(0, 10) + id_016 } else {
                                                    if (id_016 < 100000000000) { id_016 = zeros.substring(0, 9) + id_016 } else {
                                                        if (id_016 < 1000000000000) { id_016 = zeros.substring(0, 8) + id_016 } else {
                                                            if (id_016 < 10000000000000) { id_016 = zeros.substring(0, 7) + id_016 } else {
                                                                if (id_016 < 100000000000000) { id_016 = zeros.substring(0, 6) + id_016 } else {
                                                                    if (id_016 < 1000000000000000) { id_016 = zeros.substring(0, 5) + id_016 } else {
                                                                        if (id_016 < 10000000000000000n) { id_016 = zeros.substring(0, 4) + id_016 } else {
                                                                            if (id_016 < 100000000000000000n) { id_016 = zeros.substring(0, 3) + id_016 } else {
                                                                                if (id_016 < 1000000000000000000n) { id_016 = zeros.substring(0, 2) + id_016 } else {
                                                                                    if (id_016 < 10000000000000000000n) { id_016 = zeros.substring(0, 1) + id_016 }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        let id_017 = veloe_campos[4].valor

        let gerarLinha_2 = id_005 + id_006 + id_007 + id_008 + id_009 + id_010 + id_011 + id_012 + id_013 + id_014 + id_015 + id_016 + id_017 + "\r\n"

        fs.writeFile('Veloe\\TERADE_' + id_002 + "_" + id_003 + ".txt", gerarLinha_1 + gerarLinha_2, (err) => {
            if (err) throw err;
            console.log("O arquivo foi criado!");
        })
        res.render("veloe")
    },
}
