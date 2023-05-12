import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi"
import { DataTable } from './ReUsable/DataTable'
import { Loader } from './ReUsable/Loader'

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

        {users.length === 0 ? 
        
        <Loader>
            <BiLoaderAlt className='rotate' style={{ fontSize: "30px", color: "red", marginRight: "5px" }} />
            <p>Data Loading</p>
        </Loader>
        
        : <DataTable headers={["name","username","email","phone","website"]} data={users}/>}
    </>
    )
}
