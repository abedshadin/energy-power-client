import { useEffect, useState } from "react"

const useToken = user =>{
    const [token,setToken]= useState('');
    useEffect(()=>{
const email = user?.user?.email;
console.log(email)
const currentUser = {email:email}
if(email){
    fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        body: JSON.stringify(currentUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
    },[user]);
    return [token];
}

export default useToken;