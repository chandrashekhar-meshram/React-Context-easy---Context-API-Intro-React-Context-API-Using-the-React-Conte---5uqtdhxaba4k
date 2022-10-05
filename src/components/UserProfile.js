import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    const temp = useContext(UserContext);
    
    return(
        <div>
            <h1 id="name">Name: - {temp.name} </h1>
            <h1 id="age">Age: - {temp.age} </h1>
        </div>
    )
   

}

export {UserProfile}
