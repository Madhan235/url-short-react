import React, { useEffect } from 'react'
import Base from './Base'

function Forget({email,error,setError}) {
    useEffect(()=>{
        async function handleForget(){
            const user = {
              email
            }
 const res = await fetch(`https://madhan235-url-short-node.onrender.com/users/forget`,
{method:"POST",
 body:JSON.stringify(user),
headers:{"Content-Type":"application/json"},
     })
    const result = await res.json();
    console.log(result)
              }
handleForget()
    },[])
  return (
    <Base
    title={"Reset Password link has been successfully sent to your email"}
    >
    </Base>
     
  )
}

export default Forget