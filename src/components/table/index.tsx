import { useState } from 'react';
import IArrowRight from "../../images/iconsDashs/iarrowright.png"

import * as S from './styles'   

type Table = {
    id: number,
    product: string,
    percentage: number,
  }
  
export default function Table(){
    const [titleColumn] = useState([ "ID", "Produto", "Percentual", ""])
    const [itemsTable] = useState([
        { id: 1, product: 'Papel Higiênico', percentage: -72 },
        { id: 2, product: 'Ácool em Gel', percentage: -68 },
        { id: 3, product: 'Sabonete', percentage: -64 },
        { id: 4, product: 'Detergente', percentage: -56 },
        { id: 5, product: 'Água Sanitário', percentage: -52 },
    ])

  return (
    <S.ContainerTable>
      <S.Thead>
        <tr>
          {titleColumn.map((item) => (
           <th key="item">{item}</th> 
          ))}
        </tr>
      </S.Thead>
      <S.Tbody>
        {itemsTable.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.product}</td>
            <td>{item.percentage}</td>
            <td>
              <S.BtnRightTable><img src={IArrowRight}/></S.BtnRightTable>
            </td>
          </tr>
        ))}
      </S.Tbody>
    </S.ContainerTable>
  )
}