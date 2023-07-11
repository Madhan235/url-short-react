import Base from './Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Signup({email,setEmail,password,setPassword,error,setError}) {
  const history = useHistory();
  async function handleSignup(){
    const user = {
      email,
      password,
    }
    const res = await fetch(`https://madhan235-url-short-node.onrender.com/users/signup`,
    {method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })
    const result = await res.json();
    console.log(result);
if(result.data.error){
  setError(result.data.error)
  return
}
history.push("/login");
  }
  
  return (
    <Base
    title={"New user! Please Signup"}
    description={"your information was encrypted with us"}
    >
      <div className='container input'>
        <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className='btn btn-primary btn-active userbtn'
        onClick={handleSignup}  
        >Signup</button>
        <div style={{color:"blue"}}
        className='error'
        >{error? error : ""}</div>

        </div> 
    </Base>
  )
}

export default Signup