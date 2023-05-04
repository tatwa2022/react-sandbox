 import React, { useEffect, useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState({
    name:"",
    age:""
  })
  const [users, setUsers] = useState([])
    const storeToStorage=(value)=>{
        // console.log("data----", inputValue)
        // localStorage.setItem("users", JSON.stringify(inputValue))
        let localData= localStorage.getItem("users");
        console.log(localData);
        if(!localData){
          localStorage.setItem("users", JSON.stringify([inputValue]))
          setUsers([inputValue])
        }
        else{
          let arr= JSON.parse(localData)
          arr.push(inputValue)
          localStorage.setItem("users", JSON.stringify(arr))
          setUsers(arr)
        }
    }

    useEffect(() => {
      let localData= localStorage.getItem("users");
      if(localData){
        setTimeout(() => {
          setUsers(JSON.parse(localData))
        }, 4000);
      }
      else{
        setUsers([])
      }
    }, [])
    

    const getData=()=>{
      let localData= localStorage.getItem("data");
      console.log("local data-----", localData)
    }




  return (
    <div>
      <p>name</p>
      <input type="text"  value={inputValue.name} onChange={(e)=>{

        // setInputValue({
        //   ...inputValue,
        //   name:e.target.value
        // })
        setInputValue(prev=>({
          ...prev,
          name:e.target.value
        }))
      }}/> 
      <p>age</p>
      <input type="number"  value={inputValue.age} onChange={(e)=>{
       setInputValue(prev=>({
        ...prev,
        age:e.target.value
      }))
      }}/>   
      <button onClick={()=>{
        storeToStorage(inputValue)
      }}>Store</button>

      {/* <button onClick={()=>getData()}>Show</button> */}

      {users.length === 0 ? <h1>Loading....</h1> : users.map((val, i)=>{
        return <div key={i} style={{padding:"10px",border:"1px solid #000", margin:"10px"}}>
          <h6>{val.name}</h6>
          <p>{val.age}</p>
        </div>
      })}
      
      </div>
  )
}

export default App