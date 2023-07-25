import { useState, useEffect } from "react";
import InputSearch from "../../components/InputSearch";
import HeaderPages from "../../components/headerPages";
import PredictionsCard from "../../components/predictionsCard";
import { CardPredictions } from "../../services/predictions/CardPredictionsGet";
import * as S from "./styles"
import * as T from "../../types/DashTypes"
import { color } from "../../theme/constants"
import { Search } from "../../services/predictions/SearchGet";
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

export default function Predictions() {
    const [cardPredictions, setCardPredictions] = useState<Array<T.CardPredictionsType>>([])
    const [searchFor, setSearchFor] = useState("")
    
    useEffect(() => {
        const loadData = async () => {
            const dataCards = await CardPredictions()
            setCardPredictions(dataCards)
        }
        loadData();
    }, []);
    function formatText(status: string) {
        if (status === "NEUTRO") {
            return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        }
        if (status === "EM_ALTA" || status === "EM_BAIXA") {
            const statusSplit = status.split('_')
            const statusFormat = `${statusSplit[0]} ${statusSplit[1]}`
            return statusFormat.charAt(0).toUpperCase() + statusFormat.slice(1).toLowerCase();
        }
    }
    function formatDate(date: string){
        const ref = date.split('-')
        return `${ref[2]}/${ref[1]}/${ref[0]}`
    }

    const toSearch = async () => {
        const resultSearch = await Search(searchFor)
        setCardPredictions(resultSearch)
    }
    
    return (
        <>
            <HeaderPages
                title="Predições"
                colorTitle="#212121"
                bgColor="transparent"
            />
            <S.ContainerForFilter>
                <InputSearch
                    onClick={toSearch}
                    onChange={(event) => setSearchFor(event.target.value)}
                    />

            </S.ContainerForFilter>
            <S.ContainerInfPredictions>
                <>
                    {cardPredictions.map((item, id) => (
                        <PredictionsCard
                            nameCustomer={item.nome}
                            statusCustomer ={formatText(item.classificacao)}
                            color={item.classificacao > "EM_ALTA" ? color.failure : color.success}
                            route={`/dashboard/predicoes/${item.id}`}
                            key={id}
                        >
                            <S.Ttable>
                                <S.TitleColumn>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Próx. compra</th>
                                    </tr>
                                </S.TitleColumn>
                                <S.BodyTable>
                                    {item.produtos.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.nome}</td>
                                            <S.TdNextBuy>{formatDate(product.proximaCompra)}</S.TdNextBuy>
                                        </tr>
                                    ))}
                                </S.BodyTable>
                            </S.Ttable>
                        </PredictionsCard>
                    ))}

                </>
            </S.ContainerInfPredictions>
        </>
    )
}

