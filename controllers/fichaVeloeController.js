const { time } = require("console");
const fs = require("fs");
const campos_veloe = require("../JSON/campos_veloe");
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


        let data = new Date()
        let dia
        let mes
        let ano = data.getFullYear()

        if (data.getDate() < 10) {
            let diaTexto = data.getDate()
            dia = "0" + diaTexto.toString()
        } else {
            let diaTexto = data.getDate()
            dia = diaTexto.toString()
        }

        if (data.getMonth() <= 10) {
            let mesTexto = data.getMonth()
            mesTexto = mesTexto += 1
            mes = "0" + mesTexto.toString()
        } else {
            let mesTexto = data.getMonth()
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

        if (id_009 == "") {
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

        let id_018 = veloe_campos[5].valor

        let id_019 = campos.NOME_LOGRADOURO

        let calcLogradouro = id_019.length
        let valLogradouro = 50 - calcLogradouro

        if (id_019.length < 50) {
            id_019 = id_019 + espacos.substring(0, valLogradouro)
        }

        let id_020 = campos.NUMERO_LOGRADOURO

        if (id_020 == "") { id_020 = espacos.substring(0, 5) } else {
            if (id_020 < 10) { id_020 = espacos.substring(0, 4) + id_020 } else {
                if (id_020 < 100) { id_020 = espacos.substring(0, 3) + id_020 } else {
                    if (id_020 < 1000) { id_020 = espacos.substring(0, 2) + id_020 } else {
                        if (id_020 < 10000) { id_020 = espacos.substring(0, 1) + id_020 }}}}}
        
        let id_021 = campos.COMPLEMENTO_LOGRADOURO
        
        let calcComplemento = id_021.length
        let valComplemento = 25 - calcComplemento

        if (id_021.length < 25) {
            id_021 = id_021 + espacos.substring(0, valComplemento)
        }

        let id_022 = campos.BAIRRO_LOGRADOURO
        
        let calcBairro = id_022.length
        let valBairro = 30 - calcBairro

        if (id_022.length < 30) {
            id_022 = id_022 + espacos.substring(0, valBairro)
        }

        let id_023 = campos.MUNICIPIO_LOGRADOURO
        
        let calcMunicipio = id_023.length
        let valMunicipio = 28 - calcMunicipio

        if (id_023.length < 28) {
            id_023 = id_023 + espacos.substring(0, valMunicipio)
        }

        let id_024 = campos.UF

        if (id_024 == "") {
            id_024 = espacos.substring(0, 2)
        }

        let id_025 = campos.CEP

        if (id_025 == "") { id_025 = zeros.substring(0, 8) } else {
            if (id_025 < 10) { id_025 = zeros.substring(0, 7) + id_025 } else {
                if (id_025 < 100) { id_025 = zeros.substring(0, 6) + id_025 } else {
                    if (id_025 < 1000) { id_025 = zeros.substring(0, 5) + id_025 } else {
                        if (id_025 < 10000) { id_025 = zeros.substring(0, 4) + id_025 } else {
                            if (id_025 < 100000) { id_025 = zeros.substring(0, 3) + id_025 } else {
                                if (id_025 < 1000000) { id_025 = zeros.substring(0, 2) + id_025 } else {
                                    if (id_025 < 10000000) { id_025 = zeros.substring(0, 1) + id_025 }
                                }
                            }
                        }
                    }
                }
            }
        }

        let id_026 = campos.DDD_PRINCIPAL

        if (id_026 == "") { id_026 = zeros.substring(0, 5) } else {
            if (id_026 < 10) { id_026 = zeros.substring(0, 4) + id_026 } else {
                if (id_026 < 100) { id_026 = zeros.substring(0, 3) + id_026 } else {
                    if (id_026 < 1000) { id_026 = zeros.substring(0, 2) + id_026 } else {
                        if (id_026 < 10000) { id_026 = zeros.substring(0, 1) + id_026 }}}}}

        let id_027 = campos.TELEFONE_PRINCIPAL

        let calcTelefone = id_027.length
        let valTelefone = 12 - calcTelefone

        if (id_027.length < 12) {
            id_027 = id_027 + espacos.substring(0, valTelefone)
        }

        let id_028 = veloe_campos[6].valor

        let id_029 = campos.LIMITE_CREDITO

        if (id_029 == "") { id_029 = zeros.substring(0, 13) } else {
            if (id_029 < 100000000) { id_029 = zeros.substring(0, 12) + id_029 } else {
                if (id_029 < 1000000000) { id_029 = zeros.substring(0, 11) + id_029 } else {
                    if (id_029 < 10000000000) { id_029 = zeros.substring(0, 10) + id_029 } else {
                        if (id_029 < 100000000000) { id_029 = zeros.substring(0, 9) + id_029 } else {
                            if (id_029 < 1000000000000) { id_029 = zeros.substring(0, 8) + id_029 } else {
                                if (id_029 < 10000000000000) { id_029 = zeros.substring(0, 7) + id_029 } else {
                                    if (id_029 < 100000000000000) { id_029 = zeros.substring(0, 6) + id_029 } else {
                                        if (id_029 < 1000000000000000) { id_029 = zeros.substring(0, 5) + id_029 } else {
                                            if (id_029 < 10000000000000000n) { id_029 = zeros.substring(0, 4) + id_029 } else {
                                                if (id_029 < 100000000000000000n) { id_029 = zeros.substring(0, 3) + id_029 } else {
                                                    if (id_029 < 1000000000000000000n) { id_029 = zeros.substring(0, 2) + id_029 } else {
                                                        if (id_029 < 10000000000000000000n) { id_029 = zeros.substring(0, 1) + id_029 }
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

        let id_030 = campos.DATA_INICIO_VALIDADE

        let diaInicioValidade
        let mesInicioValidade
        let anoInicioValidade

        if(id_030 == ""){
            id_030 = zeros.substring(0, 8)
        }else{
            let data = id_030.replace("-", '')
            let data_2 = data.replace("-", '')
            diaInicioValidade = data_2.substring(6, 8)
            mesInicioValidade = data_2.substring(4, 6)
            anoInicioValidade = data_2.substring(0, 4)
            id_030 = diaInicioValidade + mesInicioValidade + anoInicioValidade
        }


        let id_031 = campos.DATA_FIM_VALIDADE

        let diaFimValidade
        let mesFimValidade
        let anoFimValidade

        if(id_031 == ""){
            id_031 = zeros.substring(0, 8)
        }else{
            let data = id_031.replace("-", '')
            let data_2 = data.replace("-", '')
            diaFimValidade = data_2.substring(6, 8)
            mesFimValidade = data_2.substring(4, 6)
            anoFimValidade = data_2.substring(0, 4)
            id_031 = diaFimValidade + mesFimValidade + anoFimValidade
        }

        let id_032 = veloe_campos[7].valor

        

        let gerarLinha_3 = id_018 + id_019 + id_020 + id_021 + id_022 + id_023 + id_024 + id_025 + id_026 + id_027 + id_028 + id_029 + id_030 + id_031 + id_032 + "\r\n"

        console.log(gerarLinha_3.length)

        fs.writeFile('Veloe\\TERADE_' + id_002 + "_" + id_003 + ".txt", gerarLinha_1 + gerarLinha_2 + gerarLinha_3, (err) => {
            if (err) throw err;
            console.log("O arquivo foi criado!");
        })
        res.render("veloe")
    },
}
