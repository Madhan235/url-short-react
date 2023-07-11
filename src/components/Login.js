import Base from './Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login({email,setEmail,password,setPassword,error,setError}) {
  const history = useHistory();
  async function handleLogin(){
    const user = {
      email,
      password,
    }
    
    const res = await fetch(`https://madhan235-url-short-node.onrender.com/users/login`,
    {method:"POST",
    body:JSON.stringify(user),
    headers:{"Content-Type": "application/json"},
    })
    const result = await res.json();
    
if(result.data.error){
  setError(result.data.error)
  return
}
localStorage.setItem("token",result.data.token);
console.log(result.data.token);
history.push("/url");
  }
  
  
  return (
    
    <Base
    title={"Already user! Please Login"}
    description={""}
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
        onClick={handleLogin}
        >Login</button>
        <button className='btn btn-primary btn-active userbtn'
        onClick={()=>history.push("/forget")}
        >Forget-Password</button>

        <div style={{color:"blue"}}
        className='error'
        >{error? error : ""}</div>
        </div> 
    </Base>
  )
}

export default Login