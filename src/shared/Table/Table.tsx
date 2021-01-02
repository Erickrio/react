import React from 'react';
import organizeData from '../../utils/organizeDataForTable';
import './Table.scss';
 
  export interface TableHeader {
    key: string
    value: string
    right?: boolean //propriedade opcional
  }

  declare interface TableProps {
    headers: TableHeader[]
    data: any[]
  
    enableActions?: boolean
    
    onDelete?: (item : any) => void
    onDetail?: (item : any) => void
    onEdit?: (item : any) => void
  }
    
  const Table: React.FC<TableProps> = (props) => {
    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
    
    return <table className="AppTable">
      <thead>
        <tr>
          {
            props.headers.map(header =>
              <th
                className={header.right ? 'right' : ''}
                key={header.key}
              >
                {header.value}
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          organizedData.map((row, i) => {
              //retorna uma table row
            return <tr key={i}>
              {
                Object
                  .keys(row)
                  .map((item, i) =>
                    item !== '$original'
                      ? <td
                          key={row.$original.id + i}
                          /*Dentro dos indices indexados ,pega o valor de item(name,price) 
                          @e verifica se tem a propriedade right,
                          caso verdadeiro renderiza a classe em branco
                          */
                          className={indexedHeaders[item].right ? 'right' : ''}
                        >
                          { row[item] }
                        </td>
                      : null
                  )
              }
            </tr>
          })
        }
      </tbody>
    </table>
  }
  
  export default Table