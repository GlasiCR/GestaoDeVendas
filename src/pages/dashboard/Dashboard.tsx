import KpiCard from "../../components/KpiCard"
import TableContainer from "../../components/tableContainer"
import HeaderPages from "../../components/headerPages"
import IProd from "../../images/iconsPagesLoged/iprod.svg"
import ICustomer from "../../images/iconsPagesLoged/icustomer.svg"
import IArrowRight from "../../images/iconsPagesLoged/iarrowright.png"
import * as S from './styles'
import Table from "../../components/table"
import BtnToggle from "../../components/btnToggle"
import { useState, useEffect } from "react"
import DivPercentCardKpi from "../../components/divPercentCardKpi"
import { color } from "../../theme/constants"
import { ClientsUp, ClientsDown } from "../../services/dashHome/TableClientsGet"
import { ProductsDown, ProductsUp } from "../../services/dashHome/TableProductsGet"
import { ResumeDash } from "../../services/dashHome/ResumeCardsGet"
import * as T from "../../types/DashTypes"
import { Link } from "react-router-dom"
import Graphic from "../../components/graphic"
import DivSearchPeriod from "../../components/divSearchPeriod"
import { PieChart, Pie, Sector, Cell } from "recharts";

export default function Dashboard() {
  const [initialLoadingClient, setInitialLoadinClient] = useState(false)
  const [initialLoadingProduct, setInitialLoadinProduct] = useState(true)
  const [productsTable, setProductsTable] = useState<Array<T.TableDashType>>([])
  const [clientsTable, setClientsTable] = useState<Array<T.TableDashType>>([])
  const [resume, setResume] = useState<T.ResumeDashType>()

  useEffect(() => {
    const loadData = async () => {
      if (initialLoadingClient) {
        const data = await ClientsUp();
        if (Array.isArray(data)) {
          setClientsTable(data);
        }
      } else {
        const data = await ClientsDown();
        if (Array.isArray(data)) {
          setClientsTable(data);
        }
      }
    };
    loadData();
  }, [initialLoadingClient]);

  useEffect(() => {
    const loadData = async () => {
      if (initialLoadingProduct) {
        const data = await ProductsUp();
        if (Array.isArray(data)) {
          setProductsTable(data)
        }
      } else {
        const data = await ProductsDown();
        if (Array.isArray(data)) {
          setProductsTable(data)
        }
      }
    };
    loadData();
  }, [initialLoadingProduct]);

  useEffect(() => {
    const resumeNumbers = async () => {
      const data = await ResumeDash()
      setResume(data)
    };
    resumeNumbers()
  }, [])

  const changeViewClient = () => {
    setInitialLoadinClient(prev => !prev)
  }
  const changeViewProduct = () => {
    setInitialLoadinProduct(prev => !prev)
  }

  return (
    <div>
      <HeaderPages
        title="Dashboard"
        filterPeriod={<DivSearchPeriod />}
      >
        <KpiCard
          firstPieceOfTitle="Total "
          titleKpiBold="produtos "
          secondPieceOfTitle="em alta"
          numberKpi={resume?.quantidadeProdutosAlta}
          percentageKpi={resume?.percentualTotalProdutosAlta}
          graphic={<Graphic 
            valueApi={resume?.percentualTotalProdutosAlta}
            valueDifference={100 - resume?.percentualTotalProdutosAlta}
          />}
          >
          <DivPercentCardKpi
            numberPercentageKPI={resume?.percentualVariacaoProdutosAlta}
            backgroundColor={resume?.percentualVariacaoProdutosBaixa && resume?.percentualVariacaoProdutosAlta > 0 ? color.success : color.failure}
          />
        </KpiCard>
        <KpiCard
          firstPieceOfTitle="Total "
          titleKpiBold="produtos "
          secondPieceOfTitle="em baixa"
          numberKpi={resume?.quantidadeProdutosBaixa}
          percentageKpi={resume?.percentualTotalProdutosBaixa}
          graphic={<Graphic 
            valueApi={resume?.percentualTotalProdutosBaixa}
            valueDifference={100 - resume?.percentualTotalProdutosBaixa}
          />} 
        >
          <DivPercentCardKpi
            numberPercentageKPI={resume?.percentualVariacaoProdutosBaixa}
            backgroundColor={resume?.percentualVariacaoProdutosBaixa && resume.percentualVariacaoProdutosBaixa > 0 ? color.success : color.failure}
          />
        </KpiCard>
        <KpiCard
          firstPieceOfTitle="Total "
          titleKpiBold="clientes "
          secondPieceOfTitle="em alta"
          numberKpi={resume?.quantidadeClientesAlta}
          percentageKpi={resume?.percentualTotalClientesAlta}
          graphic={<Graphic 
            valueApi={resume?.percentualTotalClientesAlta}
            valueDifference={100 - resume?.percentualTotalClientesAlta}
          />} 
        >
          <DivPercentCardKpi
            numberPercentageKPI={resume?.percentualVariacaoClientesAlta}
            backgroundColor={resume?.percentualVariacaoProdutosBaixa && resume?.percentualVariacaoClientesAlta > 0 ? color.success : color.failure}
          />
        </KpiCard>
        <KpiCard
          firstPieceOfTitle="Total "
          titleKpiBold="produtos "
          secondPieceOfTitle="em baixa"
          numberKpi={resume?.quantidadeClientesBaixa}
          percentageKpi={resume?.percentualTotalClientesBaixa}
          graphic={<Graphic 
            valueApi={resume?.percentualTotalClientesBaixa}
            valueDifference={100 - resume?.percentualTotalClientesBaixa}
          />}
        >
          <DivPercentCardKpi
            numberPercentageKPI={resume?.percentualVariacaoClientesBaixa}
            backgroundColor={resume?.percentualVariacaoProdutosBaixa && resume?.percentualVariacaoClientesBaixa > 0 ? color.success : color.failure}
          />
        </KpiCard>
      </HeaderPages>
      <S.ContainerInformations>
        <>
          <TableContainer
            iconTable={IProd}
            titleTable="Produtos"
            descriptionImage="Ícone que representa informações de Produtos"
            backgroundColor="#C5CFFF"
            buttons={<BtnToggle
              changeView={changeViewProduct}
              bgButtonUp={initialLoadingProduct == true ? color.success : 'transparent'}
              colorTextButtonUp={initialLoadingProduct == true ? '#FFF' : '#9E9E9E'}
              bgButtonDown={initialLoadingProduct == false ? color.failure : 'transparent'}
              colorTextButtonDown={initialLoadingProduct == false ? '#FFF' : '#9E9E9E'}
            />}
          >
            <Table
              header={["ID", "Produto", "Percentual", ""]}
            >
              {productsTable.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.percentual}%</td>
                  <td>
                    <Link to={`/dashboard/produto/${item.id}`}>
                      <S.BtnRightTable><img src={IArrowRight} /></S.BtnRightTable>
                    </Link>
                  </td>
                </tr>
              ))}
            </Table>
          </TableContainer>
        </>
        <>
          <TableContainer
            iconTable={ICustomer}
            titleTable="Clientes"
            descriptionImage="Ícone que representa informações de Clientes"
            backgroundColor="#001C98"
            buttons={<BtnToggle
              changeView={changeViewClient}
              bgButtonUp={initialLoadingClient == true ? color.success : 'transparent'}
              colorTextButtonUp={initialLoadingClient == true ? '#FFF' : '#9E9E9E'}
              bgButtonDown={initialLoadingClient == false ? color.failure : 'transparent'}
              colorTextButtonDown={initialLoadingClient == false ? '#FFF' : '#9E9E9E'}
            />}
          >
            <Table
              header={["ID", "Cliente", "Percentual", ""]}
            >
              {clientsTable.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.percentual}%</td>
                  <td>
                    <Link to={`/dashboard/cliente/${item.id}`}>
                      <S.BtnRightTable><img src={IArrowRight} /></S.BtnRightTable>
                    </Link>
                  </td>
                </tr>
              ))}
            </Table>

          </TableContainer>
        </>
      </S.ContainerInformations>
    </div>
  )
}