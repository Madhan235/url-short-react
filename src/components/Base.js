import React from 'react';
import {useHistory} from "react-router-dom";
function Base({title, description,children}) {
    const history = useHistory();
  return (
    <div>
 <div className='navbar bg-success'>
<button className='btn btn-primary btn-active'
onClick={()=>history.push("/")}
>Signup</button>
<button className='btn btn-primary btn-active'
onClick={()=>history.push("/login")}
>Login</button>
 </div>
 <div className='container text'>
    <h2>{title}</h2>
    <h4>{description}</h4>
 </div>
{children}
    </div>
  )
}

export default Base