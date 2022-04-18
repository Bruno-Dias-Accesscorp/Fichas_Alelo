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

        let calcNumeroLogradouro = id_020.length
        let valNumeroLogradouro = 5 - calcNumeroLogradouro

        if (id_020.length < 5) {
            id_020 = id_020 + espacos.substring(0, valNumeroLogradouro)
        }

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
                        if (id_026 < 10000) { id_026 = zeros.substring(0, 1) + id_026 }
                    }
                }
            }
        }

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

        if (id_030 == "") {
            id_030 = zeros.substring(0, 8)
        } else {
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

        if (id_031 == "") {
            id_031 = zeros.substring(0, 8)
        } else {
            let data = id_031.replace("-", '')
            let data_2 = data.replace("-", '')
            diaFimValidade = data_2.substring(6, 8)
            mesFimValidade = data_2.substring(4, 6)
            anoFimValidade = data_2.substring(0, 4)
            id_031 = diaFimValidade + mesFimValidade + anoFimValidade
        }

        let id_032 = veloe_campos[7].valor



        let gerarLinha_3 = id_018 + id_019 + id_020 + id_021 + id_022 + id_023 + id_024 + id_025 + id_026 + id_027 + id_028 + id_029 + id_030 + id_031 + id_032 + "\r\n"

        let gerarLinha_4 = veloe_campos[8].valor + "\r\n"

        let id_033 = veloe_campos[9].valor

        let id_034 = id_006

        let id_035 = veloe_campos[10].valor

        let id_036 = campos.NOME_REPRESENTANTE

        let calcNome_Representante = id_036.length
        let valNome_Representante = 35 - calcNome_Representante

        if (id_036.length < 35) {
            id_036 = id_036 + espacos.substring(0, valNome_Representante)
        }

        let id_037 = campos.CPF_REPRESENTANTE.replace(/[^\d]+/g, '')

        let id_038 = campos.DATA_VINCULO_EMPRESA

        let diaVinculoEmpresa
        let mesVinculoEmpresa
        let anoVinculoEmpresa

        if (id_038 == "") {
            id_038 = zeros.substring(0, 8)
        } else {
            let data = id_038.replace("-", '')
            let data_2 = data.replace("-", '')
            diaVinculoEmpresa = data_2.substring(6, 8)
            mesVinculoEmpresa = data_2.substring(4, 6)
            anoVinculoEmpresa = data_2.substring(0, 4)
            id_038 = diaVinculoEmpresa + mesVinculoEmpresa + anoVinculoEmpresa
        }

        let id_039 = campos.RELACAO_REPRESENTANTE_LEGAL

        if (id_039 == "") {
            id_039 = 0
        }

        let id_040 = veloe_campos[11].valor

        let id_041 = id_038

        let id_042 = veloe_campos[12].valor

        let id_043 = campos.TELEFONE_CONTATO

        let calTelefoneContato = id_043.length
        let valTelefoneContato = 12 - calTelefoneContato

        if (id_043.length < 12) {
            id_043 = id_043 + espacos.substring(0, valTelefoneContato)
        }

        let id_044 = veloe_campos[13].valor

        let id_045 = campos.DDD_PRINCIPAL

        if (id_045 == "") { id_045 = zeros.substring(0, 5) } else {
            if (id_045 < 10) { id_045 = zeros.substring(0, 4) + id_045 } else {
                if (id_045 < 100) { id_045 = zeros.substring(0, 3) + id_045 } else {
                    if (id_045 < 1000) { id_045 = zeros.substring(0, 2) + id_045 } else {
                        if (id_045 < 10000) { id_045 = zeros.substring(0, 1) + id_045 }
                    }
                }
            }
        }

        let id_046 = campos.TELEFONE_PRINCIPAL

        let calTelefonePrincipal = id_046.length
        let valTelefonePrincipal = 12 - calTelefonePrincipal

        if (id_046.length < 12) {
            id_046 = id_046 + espacos.substring(0, valTelefonePrincipal)
        }

        let id_047 = campos.RAMAL_PRINCIPAL

        let calRamalPrincipal = id_047.length
        let valRamalPrincipal = 6 - calRamalPrincipal

        if (id_047.length < 6) {
            id_047 = id_047 + espacos.substring(0, valRamalPrincipal)
        }

        let id_048 = veloe_campos[14].valor

        let gerarLinha_5 = id_033 + id_034 + id_035 + id_036 + id_037 + id_038 + id_039 + id_040 + id_041 + id_042 + id_043 + id_044 + id_045 + id_046 + id_047 + id_048 + "\r\n"

        let id_049 = veloe_campos[15].valor

        let id_050 = campos.EMAIL_REPRESENTANTE

        if (id_050 == undefined) {
            id_050 = espacos.substring(0, 40)
        } else {

            let calEmailRepresentante = id_050.length
            let valEmailRepresentante = 40 - calEmailRepresentante

            if (id_050.length < 40) {
                id_050 = id_050 + espacos.substring(0, valEmailRepresentante)
            }
        }

        let id_051 = veloe_campos[16].valor

        let id_052 = campos.NOME_CONTATO

        let calNomeContato = id_052.length
        let valNomeContato = 35 - calNomeContato

        if (id_052.length < 35) {
            id_052 = id_052 + espacos.substring(0, valNomeContato)
        }

        let id_053 = veloe_campos[17].valor

        let id_054 = campos.DDD_CONTATO

        if (id_054 == "") { id_054 = zeros.substring(0, 5) } else {
            if (id_054 < 10) { id_054 = zeros.substring(0, 4) + id_054 } else {
                if (id_054 < 100) { id_054 = zeros.substring(0, 3) + id_054 } else {
                    if (id_054 < 1000) { id_054 = zeros.substring(0, 2) + id_054 } else {
                        if (id_id_054 < 10000) { id_054 = zeros.substring(0, 1) + id_054 }
                    }
                }
            }
        }

        let id_055 = id_043

        let id_056 = campos.RAMAL_CONTATO

        let calRamalContato = id_056.length
        let valRamalContato = 6 - calRamalContato

        if (id_056.length < 6) {
            id_056 = id_056 + espacos.substring(0, valRamalContato)
        }

        let id_057 = veloe_campos[18].valor

        let id_058 = campos.EMAIL_CONTATO

        console.log(id_058)

        if (id_058 == undefined) {
            id_058 = espacos.substring(0, 40)
        } else {

            let calEmailContato = id_058.length
            let valEmailContato = 40 - calEmailContato

            if (id_058.length < 40) {
                id_058 = id_058 + espacos.substring(0, valEmailContato)
            }
        }

        let id_059 = veloe_campos[19].valor

        let gerarLinha_6 = id_049 + id_050 + id_051 + id_052 + id_053 + id_054 + id_055 + id_056 + id_057 + id_058 + id_059 + "\r\n"

        let id_060 = veloe_campos[20].valor

        let id_061 = id_006

        let id_062 = veloe_campos[21].valor

        let id_063 = campos.AGENCIA_VENDEU

        if (id_063 == "") { id_063 = zeros.substring(0, 5) } else {
            if (id_063 < 10) { id_063 = zeros.substring(0, 4) + id_063 } else {
                if (id_063 < 100) { id_063 = zeros.substring(0, 3) + id_063 } else {
                    if (id_063 < 1000) { id_063 = zeros.substring(0, 2) + id_063 } else {
                        if (id_id_063 < 10000) { id_063 = zeros.substring(0, 1) + id_063 }
                    }
                }
            }
        }

        let id_064 = campos.DIGITO_AGENCIA_VENDEU

        if (id_064 == "") {
            id_064 = 0
        }

        let id_065 = campos.CODIGO_VENDEDOR


        let calCodigoVendedor = id_065.length
        let valCodigoVendedor = 20 - calCodigoVendedor

        if (id_065.length < 20) {
            id_065 = id_065 + espacos.substring(0, valCodigoVendedor)
        }

        let id_066 = campos.CODIGO_CPF

        if (id_066 == "") {
            id_066 = " "
        }

        let id_067 = campos.NOME_VENDEDOR

        let calNomeVendedor = id_067.length
        let valNomeVendedor = 40 - calNomeVendedor

        if (id_067.length < 40) {
            id_067 = id_067 + espacos.substring(0, valNomeVendedor)
        }

        let id_068 = campos.DDD_VENDEDOR

        if (id_068 == "") { id_068 = zeros.substring(0, 5) } else {
            if (id_068 < 10) { id_068 = zeros.substring(0, 4) + id_068 } else {
                if (id_068 < 100) { id_068 = zeros.substring(0, 3) + id_068 } else {
                    if (id_068 < 1000) { id_068 = zeros.substring(0, 2) + id_068 } else {
                        if (id_id_068 < 10000) { id_068 = zeros.substring(0, 1) + id_068 }
                    }
                }
            }
        }

        let id_069 = campos.TELEFONE_VENDEDOR

        let calTelefoneVendedor = id_069.length
        let valTelefoneVendedor = 12 - calTelefoneVendedor

        if (id_069.length < 12) {
            id_069 = id_069 + espacos.substring(0, valTelefoneVendedor)
        }

        let id_070 = campos.RAMAL_VENDEDOR

        let calRamalVendedor = id_070.length
        let valRamalVendedor = 6 - calRamalVendedor

        if (id_070.length < 6) {
            id_070 = id_070 + espacos.substring(0, valRamalVendedor)
        }

        let id_071 = campos.DATA_CONTRATO

        let diaAssinaturaContrato
        let mesAssinaturaContrato
        let anoAssinaturaContrato

        if (id_071 == "") {
            id_071 = zeros.substring(0, 8)
        } else {
            let data = id_071.replace("-", '')
            let data_2 = data.replace("-", '')
            diaAssinaturaContrato = data_2.substring(6, 8)
            mesAssinaturaContrato = data_2.substring(4, 6)
            anoAssinaturaContrato = data_2.substring(0, 4)
            id_071 = diaAssinaturaContrato + mesAssinaturaContrato + anoAssinaturaContrato
        }

        let id_072 = veloe_campos[22].valor

        let id_073 = id_011

        let id_074 = campos.VALOR_RECARGA

        if (id_074 == "") { id_074 = zeros.substring(0, 10) } else {
            if (id_074 < 10) { id_074 = zeros.substring(0, 9) + id_074 } else {
                if (id_074 < 100) { id_074 = zeros.substring(0, 8) + id_074 } else {
                    if (id_074 < 1000) { id_074 = zeros.substring(0, 7) + id_074 } else {
                        if (id_074 < 10000) { id_074 = zeros.substring(0, 6) + id_074 } else {
                            if (id_074 < 100000) { id_074 = zeros.substring(0, 5) + id_074 } else {
                                if (id_074 < 1000000) { id_074 = zeros.substring(0, 4) + id_074 } else {
                                    if (id_074 < 10000000) { id_074 = zeros.substring(0, 3) + id_074 } else {
                                        if (id_074 < 100000000) { id_074 = zeros.substring(0, 2) + id_074 } else {
                                            if (id_074 < 1000000000) { id_074 = zeros.substring(0, 1) + id_074 } else {
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

        let id_075

        let id_076 = campos.MEIO_PAGAMENTO_PRE
        let id_076_1 = campos.MEIO_PAGAMENTO_POS

        if(id_076 == id_076_1){
            id_076 = 0
        }else{
            if(id_076 == ""){
                if(id_076_1 == ""){
                    id_076_1 = 0
                    id_076 = id_076_1
                }else{
                    id_076 = id_076_1
                }
            }
        }

        if(id_076 == 0){
            id_075 = " "
        }else{
            if(id_076 == 2 || id_076 == 5){
                id_075 = 2
            }else{
                id_075 = id_076
            }
        }

        let id_077 = veloe_campos[23].valor

        let id_078 = campos.AGENCIA_DEBITO_CONTA

        let id_079 = campos.DIGITO_AGENCIA_DEBITO_CONTA

        if(id_075 == 2){

            if (id_078 == "") { id_078 = zeros.substring(0, 5) } else {
                if (id_078 < 10) { id_078 = zeros.substring(0, 4) + id_078 } else {
                    if (id_078 < 100) { id_078 = zeros.substring(0, 3) + id_078 } else {
                        if (id_078 < 1000) { id_078 = zeros.substring(0, 2) + id_078 } else {
                            if (id_id_078 < 10000) { id_078 = zeros.substring(0, 1) + id_078 }
                        }
                    }
                }
            }

            if(id_079 == ""){
                id_079 = 0
            }
          
        }else{

            id_078 = zeros.substring(0, 5)
            id_079 = 0
            
        }

        let id_080 = veloe_campos[24].valor

        let id_081

        if(id_076 == 3){
            id_081 = "0237"
        }else{
            id_081 = zeros.substring(0, 4)
        }

        let id_082 = veloe_campos[25].valor

        let gerarLinha_7 = id_060 + id_061 + id_062 + id_063 + id_064 + id_065 + id_066 + id_067 + id_068 + id_069 + id_070 + id_071 + id_072 + id_073 + id_074 + id_075 + id_076 + id_077 + id_078 + id_079 + id_080 + id_081 + id_082 + "\r\n"

        let id_083 = veloe_campos[26].valor

        let id_084 = campos.CODIGO_AUTORIZACAO

        let calCodigoAutorizacao = id_084.length
        let valCodigoAutorizacao = 10 - calCodigoAutorizacao

        if (id_084.length < 10) {
            id_084 = id_084 + espacos.substring(0, valCodigoAutorizacao)
        }

        let id_085 = veloe_campos[27].valor

        let gerarLinha_8 = id_083 + id_084 + id_085 + "\r\n"


        fs.writeFile('Veloe\\TERADE_' + id_002 + "_" + id_003 + ".txt", gerarLinha_1 + gerarLinha_2 + gerarLinha_3 + gerarLinha_4 + gerarLinha_5 + gerarLinha_6 + gerarLinha_7 + gerarLinha_8, (err) => {
            if (err) throw err;
            console.log("O arquivo foi criado!");
        })
        res.render("veloe")
    },
}
