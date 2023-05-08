import React from 'react'

export const DataTable = ({headers, data}) => {
  return (
    <table>
            <thead>
                {headers.map((val, i)=>{
                    return <th key={i} style={{textTransform:'capitalize'}}>{val}</th>
                })}
            </thead>
            <tbody>
                {data.map((val, i) => {
                    return <tr key={i}>
                         {headers.map(value=>{
                            return <>                                                                              
                                <td>{val[value]}</td>
                            </>
                         })}  
                    </tr>
                })}
            </tbody>
        </table>
  )
}
