import axios from "axios";
import { useEffect, useState } from "react"


export const UserList =()=>{
    const [users,setUsers] =useState([]);

    const renderUsers = ()=>{
        return users.map((item,index)=>{
            return<li>{item.username}</li>
        })
    };
    useEffect(()=>{
        const getUsers = async()=>{
            try{
                const result = await axios.get("https://fakestoreapi.com/users");
                setUsers(result.data);
            }
            catch(ex){
                setUsers([]);
            }
        };
        getUsers();
    },[])
    return(<div>
        <h1>List of users</h1>
        <ul>
            {renderUsers()}
        </ul>

    </div>)
}