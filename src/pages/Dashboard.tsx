import KpiCard from "../components/KpiCard"
import TableContainer from "../components/tableContainer"
import HeaderPages from "../components/headerPages"

import IProd from "../images/iconsDashs/iprod.svg"
import ICustomer from "../images/iconsDashs/icustomer.svg"

import * as S from './styles'
import Table from "../components/table"

export default function Dashboard(){
    return(
        <div>
           <HeaderPages
            title="Dashboard">
                <KpiCard 
                    titleKpi = "produtos"
                    directionKpi = "alta"
                    numberKpi = {120} 
                    percentageKpi = {13}
                 />
                  <KpiCard 
                    titleKpi = "produtos"
                    directionKpi = "baixa"
                    numberKpi = {120} 
                    percentageKpi = {-13}
                 />
                  <KpiCard 
                    titleKpi = "clientes"
                    directionKpi = "alta"
                    numberKpi = {120} 
                    percentageKpi = {13}
                 />
                  <KpiCard 
                    titleKpi = "clientes"
                    directionKpi = "baixa"
                    numberKpi = {120} 
                    percentageKpi = {-13}
                 />
            </HeaderPages>
            <S.ContainerInformations>
                <>
                    <TableContainer
                        iconTable = {IProd}
                        titleTable = "Produtos"
                        descriptionImage="Ícone que representa informações de Produtos"
                        >
                        <Table/>
                    </TableContainer>
                </>
                <>
                    <TableContainer
                        iconTable = {ICustomer}
                        titleTable = "Clientes"
                        descriptionImage="Ícone que representa informações de Clientes"
                        backgroundColor="#001C98"
                    >
                        <Table/>
                    </TableContainer>  
                </>
            </S.ContainerInformations>
        </div>
    )
}