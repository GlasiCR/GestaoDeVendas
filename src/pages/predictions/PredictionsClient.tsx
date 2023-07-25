import BtnCallbackPage from "../../components/btnCallbackPage";
import HeaderPages from "../../components/headerPages";
import Table from "../../components/table";
import TableContainer from "../../components/tableContainer";
import { color } from "../../theme/constants";
import * as S from "./styles"
import IHistory from "../../images/iconsPagesLoged/history.png"
import IProdEnding from "../../images/iconsPagesLoged/iprodfault.svg"
import ICheck from "../../images/iconsPagesLoged/icheck.png"
import { useEffect, useState } from "react";
import ClientContact from "../../components/clientContact";
import * as T from "../../types/DashTypes"
import { ContactClient } from "../../services/predictions/ContactClientGet";
import {History} from "../../services/predictions/HistoryGet"
import { ProdEnding } from "../../services/predictions/ProdEndingGet";
import { useParams } from "react-router-dom";

export default function PredictionsClient(){
    const [contactClient, setContactClient] = useState<T.ContactClientType>()
    const [history, setHistory] = useState <Array<T.HistoryType>>([])
    const [prodEnding, setProdEnding] = useState<Array<T.ProdEndingType>>([])
    const {id} = useParams()
    
    useEffect(() => {
        const loadData = async () => {
            const contacts = await ContactClient(id!)
            setContactClient(contacts)
        }
        loadData();
    }, []);

    useEffect(() => {
        const loadData = async () => {
            const historyData = await History(id!)
            setHistory(historyData)
        }
        loadData();
    }, [])

    useEffect(() => {
        const loadData = async () => {
            const prodEnding = await ProdEnding(id!)
            setProdEnding(prodEnding)
        }
        loadData();
    }, [])
    function formatDate(date: string){
        const ref = date.split('-')
        return `${ref[2]}/${ref[1]}`
    }
    return(
        <>
            <S.UnderlinedLink to="/dashboard/predicoes">
                <BtnCallbackPage 
                    titleReturn="Predições"
                />
            </S.UnderlinedLink>
            <HeaderPages
                title={contactClient?.nome}
                margin-top=""
                
            >
                <ClientContact
                    emailAddress={contactClient?.email}
                    phoneNumber={contactClient?.telefone}
                    
                />
            </HeaderPages>
            <S.ContainerInformations>
                <>
                    <TableContainer
                        iconTable = {IHistory}
                        titleTable = "Histórico"
                        descriptionImage="Ícone: histórico de compras realizado pelo cliente selecionado"
                        backgroundColor="#EEE"
                        >
                    <Table
                            header= {["ID", "Produto", "Última compra", "Qtd.", "Dar baixa"]}
                        >
                            {history.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.nome}</td>
                                  <td>{formatDate(item.ultimaCompra)}</td>
                                  <td>{item.quantidade}</td>
                                  <td>
                                    <S.BtnRightTable><img src={ICheck}/></S.BtnRightTable>
                                  </td>
                                </tr>
                              ))}   
                        </Table>   
                    </TableContainer>
                </>
                <>
                    <TableContainer
                        iconTable = {IProdEnding}
                        titleTable = "Produtos esgotando"
                        descriptionImage = "Ícone: produtos esgotando"
                        backgroundColor = "#FFE1E1"
                        colorTitle = {color.failure}
                    >
                        <Table
                            header= {["ID", "Produto", "Última compra", "Próx. Compra", "Qtd.", "Dar baixa"]}
                        >
                            {prodEnding.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.nome}</td>
                                  <td>{formatDate(item.ultimaCompra)}</td>
                                  <td>{formatDate(item.ultimaCompra)}</td>
                                  <td>{item.quantidade}</td>
                                  <td>
                                    <S.BtnRightTable><img src={ICheck}/></S.BtnRightTable>
                                  </td>
                                </tr>
                              ))}   
                        </Table>
                    </TableContainer>  
                </>
            </S.ContainerInformations>
        </>
    )
}