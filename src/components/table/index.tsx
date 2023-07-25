import * as S from './styles'   

type TableProps = {
  header: string[],
  children: React.ReactNode,
  paddingLeft?: string,
}
  
export default function Table({header, children, paddingLeft}: TableProps){
  

  return (
    <S.ContainerTable>
      <S.Thead>
        <tr>
          {header.map((item) => (
           <th padding-left={paddingLeft} key={item}>{item}</th> 
          ))}
        </tr>
      </S.Thead>
      <S.Tbody>
      {children}
      </S.Tbody>
    </S.ContainerTable>
  )
}