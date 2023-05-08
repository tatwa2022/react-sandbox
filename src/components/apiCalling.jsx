import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi"

export const ApiCalling = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (() => {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                console.log(res.data);
                setUsers(res.data)
            }).catch(err => {
                console.error(err);
            })
        })();
    }, [])


    return (<>
        <div>apiCalling</div>

        {users.length === 0 ? <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <BiLoaderAlt className='rotate' style={{ fontSize: "30px", color: "red", marginRight: "5px" }} /><p>Data Loading</p>
        </div> : <table>
            <thead>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
            </thead>
            <tbody>
                {users.map((val, i) => {
                    return <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.username}</td>
                        <td>{val.email}</td>
                    </tr>
                })}
            </tbody>
        </table>}


    </>

    )
}
