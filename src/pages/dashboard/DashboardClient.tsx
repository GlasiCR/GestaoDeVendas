import KpiCard from "../../components/KpiCard";
import BtnCallbackPage from "../../components/btnCallbackPage";
import HeaderPages from "../../components/headerPages";
import Table from "../../components/table";
import TableContainer from "../../components/tableContainer";
import { color } from "../../theme/constants"
import * as S from "./styles"
import IArrowDown from "../../images/iconsPagesLoged/iarrowdown.png"
import IArrowUp from "../../images/iconsPagesLoged/iarrowup.png"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsUpPerClient, ProductsDownPerClient } from "../../services/dashClient/TableClientGet";
import * as T from "../../types/DashTypes"
import { ResumeClient } from "../../services/dashClient/ResumeClientGet";
import DivPercentCardKpi from "../../components/divPercentCardKpi";

export default function DashboardClient() {
    const { id } = useParams()
    const [productUpPerClient, setProductUpPerClient] = useState<Array<T.TableDashClientType>>([])
    const [productDownPerClient, setProductDownPerClient] = useState<Array<T.TableDashClientType>>([])
    const [resumeClient, setResumeClient] = useState<T.ResumeDashClientType>()

    useEffect(() => {
        const loadData = async () => {
            const dataUp = await ProductsUpPerClient(id)
            setProductUpPerClient(dataUp)
            const dataDown = await ProductsDownPerClient(id)
            setProductDownPerClient(dataDown)
        }
        loadData();
    }, [id]);

    useEffect(() => {
        const loadData = async () => {
            const resume = await ResumeClient(id)
            setResumeClient(resume)
        }
        loadData();
    }, [id]);

    return (
        <>
            <S.UnderlinedLink to="/dashboard">
                <BtnCallbackPage
                    titleReturn="Detalhamento"
                />
            </S.UnderlinedLink>
            <HeaderPages
                title={resumeClient?.nome}
                colorTitle={color.primary}
                bgColor="transparent"
            >
                <KpiCard 
                    firstPieceOfTitle="Média 120 dias" 
                    numberKpi={resumeClient?.media120Dias} 
                    width="20%" 
                />
                <KpiCard
                    firstPieceOfTitle="Últimos 30 dias"
                    numberKpi={resumeClient?.ultimos30Dias}
                    percentageKpi={resumeClient?.percentualUltimos30Dias}
                    width="20%"
                    colorTitle="#212121"
                    bgColor="#FFF"
                    colorNumberKpi={color.primary}
                >
                    <DivPercentCardKpi
                        numberPercentageKPI={resumeClient?.percentualUltimos30Dias}
                        backgroundColor={resumeClient?.percentualUltimos30Dias > 0 ? color.success : color.failure}
                    />
                </KpiCard>
                <KpiCard
                    firstPieceOfTitle="Últimos 60 dias"
                    numberKpi={resumeClient?.ultimos60Dias}
                    width="20%"
                    colorTitle="#212121"
                    bgColor="#FFF"
                    colorNumberKpi={color.primary}
                />
                <KpiCard
                    firstPieceOfTitle="Últimos 90 dias"
                    numberKpi={resumeClient?.ultimos90Dias}
                    width="20%"
                    colorTitle="#212121"
                    bgColor="#FFF"
                    colorNumberKpi={color.primary}
                />
                <KpiCard
                    firstPieceOfTitle="Últimos 120 dias"
                    numberKpi={resumeClient?.ultimos120Dias}
                    width="20%"
                    colorTitle="#212121"
                    bgColor="#FFF"
                    colorNumberKpi={color.primary}
                />
            </HeaderPages>
            <S.ContainerInformations>
                <>
                    <TableContainer
                        iconTable={IArrowDown}
                        titleTable="Produtos em baixa"
                        descriptionImage="Ícone seta para baixo representando informações de produtos em baixa"
                        backgroundColor={color.failure}
                    >
                        <Table
                            header={["ID", "Produtos", "Percentual", "Qtd"]}
                        >
                            {productDownPerClient.map((item) => (
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
                        iconTable={IArrowUp}
                        titleTable="Produtos em alta"
                        descriptionImage="Ícone seta para baixo representando informações de produtos em alta"
                        backgroundColor={color.success}
                    >
                        <Table
                            header={["ID", "Produtos", "Percentual", "Qtd"]}
                        >
                            {productUpPerClient.map((item) => (
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