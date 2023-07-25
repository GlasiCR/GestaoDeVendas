import KpiCard from "../../components/KpiCard";
import BtnCallbackPage from "../../components/btnCallbackPage";
import HeaderPages from "../../components/headerPages";
import Table from "../../components/table";
import TableContainer from "../../components/tableContainer";
import {color} from "../../theme/constants"
import * as S from "./styles"
import IArrowDown from "../../images/iconsPagesLoged/iarrowdown.png"
import IArrowUp from "../../images/iconsPagesLoged/iarrowup.png"
import { useEffect, useState } from "react";
import DivPercentCardKpi from "../../components/divPercentCardKpi";
import { useParams } from "react-router-dom";
import * as T from "../../types/DashTypes"
import { ClientDownPerProduct, ClientUpPerProduct } from "../../services/dashProduct/TableProductGet";
import { ResumeProduct } from "../../services/dashProduct/ResumeProductGet";

export default function DashboardProduct(){
    const { id } = useParams()
    const [clientDownPerProduct, setClientDownPerProduct] = useState<Array<T.TableDashClientType>>([])
    const [clientUpPerProduct, setClientUpPerProduct] = useState<Array<T.TableDashClientType>>([])
    const [resumeProduct, setResumeProduct] = useState<T.ResumeDashClientType>()

    useEffect(() => {
        const loadData = async () => {
            const dataDown = await ClientDownPerProduct(id)
            setClientDownPerProduct(dataDown)
            const dataUp = await ClientUpPerProduct(id)
            setClientUpPerProduct(dataUp)
        }
        loadData();
    }, [id]);

    useEffect(() => {
        const loadData = async () => {
            const resume = await ResumeProduct(id)
            setResumeProduct(resume)
            console.log(resume)
        }
        
        loadData();
    }, [id]);
    
    return(
        <>
            <S.UnderlinedLink to="/dashboard">
                <BtnCallbackPage 
                    titleReturn="Detalhamento"
                />
            </S.UnderlinedLink>
            <HeaderPages
                title={resumeProduct?.nome}
                colorTitle= {color.primary}
                bgColor="transparent"
            >
            <KpiCard 
                firstPieceOfTitle="Média 120 dias" 
                numberKpi={resumeProduct?.media120Dias} 
                width="20%" 
            />
            <KpiCard 
                firstPieceOfTitle="Últimos 30 dias" 
                numberKpi={resumeProduct?.ultimos30Dias} 
                percentageKpi={-26} 
                width="20%" 
                colorTitle="#212121" 
                bgColor="#FFF" 
                colorNumberKpi={color.primary}
            >
                <DivPercentCardKpi
                    numberPercentageKPI={resumeProduct?.percentualUltimos30Dias}
                    backgroundColor={resumeProduct?.percentualUltimos30Dias > 0 ? color.success : color.failure}
                />
            </KpiCard>
            <KpiCard 
                firstPieceOfTitle="Últimos 60 dias" 
                numberKpi={resumeProduct?.ultimos60Dias} 
                width="20%" 
                colorTitle="#212121" 
                bgColor="#FFF" 
                colorNumberKpi={color.primary}
            />
            <KpiCard 
                firstPieceOfTitle="Últimos 90 dias" 
                numberKpi={resumeProduct?.ultimos90Dias} 
                width="20%"
                colorTitle="#212121" 
                bgColor="#FFF" 
                colorNumberKpi={color.primary}
            />
            <KpiCard 
                firstPieceOfTitle="Últimos 120 dias" 
                numberKpi={resumeProduct?.ultimos120Dias} 
                width="20%" 
                colorTitle="#212121" 
                bgColor="#FFF" 
                colorNumberKpi={color.primary}
            />
            </HeaderPages> 
            <S.ContainerInformations>
                <>
                    <TableContainer
                        iconTable = {IArrowDown}
                        titleTable = "Clientes em baixa"
                        descriptionImage="Ícone seta para baixo representando informações de clientes em baixa"
                        backgroundColor={color.failure}
                        >
                        <Table
                            header= {["ID", "Produtos", "Percentual", "Qtd" ]}
                        >
                            {clientDownPerProduct.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.nome}</td>
                                  <td>{item.percentual}</td>
                                  <td>{item.quantidade}</td>
                                </tr>
                              ))}   
                        </Table>
                    </TableContainer>
                </>
                <>
                    <TableContainer
                        iconTable = {IArrowUp}
                        titleTable = "Clientes em alta"
                        descriptionImage="Ícone seta para baixo representando informações de clientes em alta"
                        backgroundColor={color.success}
                    >
                        <Table
                            header= {["ID", "Produtos", "Percentual", "" ]}
                        >
                            {clientUpPerProduct.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.nome}</td>
                                  <td>{item.percentual}</td>
                                  <td>{item.quantidade}</td>
                                </tr>
                              ))}   
                        </Table>
                    </TableContainer>  
                </>
            </S.ContainerInformations>
        </>
    )
}