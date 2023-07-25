export type TableDashType = {
    id: number,
    nome: string,
    percentual: number,
}

export type TableDashClientType = TableDashType & {
    quantidade: number,
}

export type PageProductsType = TableDashType & {
    classificacao: "",
}

export type ResumeDashType = {
    percentualTotalClientesAlta: number,
    percentualTotalClientesBaixa: number,
    percentualTotalProdutosAlta: number,
    percentualTotalProdutosBaixa: number,
    percentualVariacaoClientesAlta: number,
    percentualVariacaoClientesBaixa: number,
    percentualVariacaoProdutosAlta: number,
    percentualVariacaoProdutosBaixa: number,
    quantidadeClientesAlta: number,
    quantidadeClientesBaixa: number,
    quantidadeProdutosAlta: number,
    quantidadeProdutosBaixa: number,
}

export type ResumeDashClientType = {
    media120Dias: 0,
    nome: "", 
    percentualUltimos30Dias: 0,
    ultimos30Dias: 0,
    ultimos60Dias: 0,
    ultimos90Dias: 0,
    ultimos120Dias: 0,
}
export type ContactClientType = {
    id: 0,
    nome: "",
    telefone: "",
    email: "",
}
export type HistoryType = {
    id: 0,
    nome: "",
    quantidade: 0,
    ultimaCompra: ""
}
export type ProdEndingType = HistoryType & {
    proximaCompra: "",
}
export type ProductsCardPredictionsType = [{
    id: 0,
    nome: "",
    proximaCompra: "",
}]

export type CardPredictionsType = {
    id: 0,
    nome: "",
    classificacao: "",
    produtos: ProductsCardPredictionsType,

}