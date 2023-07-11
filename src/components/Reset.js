import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Base from './Base'
import { useState } from 'react';

function Reset({email,setEmail,password,setPassword,confirm,setConfirm,error,setError}) {
const {id,token} = useParams();
const [changed, setChanged] = useState(false);
    async function updatePassword(){
    const user = {
        password,
        confirm,
    }
    const res = await fetch(`https://madhan235-url-short-node.onrender.com/users/reset/${id}/${token}`,
    {method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })

const result = await res.json()
console.log(result);

if(result.data.error){
      setError(result.data.error)
      return
}
setChanged(true);

}
 
    return (
    <Base
     title={"Reset your password"}
     description={"enter your email and reset your new password"}
     >
      <div className='container input'>
     
      <input
      type='password'
      placeholder='Enter your new password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <input
       type='password'
       placeholder='confirm your new password'
       value={confirm}
       onChange={(e)=>setConfirm(e.target.value)}
      />

      <button className='btn userbtn btn-primary btn-active'
      onClick={updatePassword}
      >Update</button>

<div style={{color:"blue"}}
        className='error'
        >{error? error : ""}</div>

<h2 style={{color:"blue"}}
        className='error'
        >{changed? "Your Password Changed Sucessfully !! , Please return to login Page": ""}</h2> 
        
     </div>
     </Base>
  )
}

export default Reset