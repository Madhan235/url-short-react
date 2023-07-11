import React, { useState } from 'react'
 


function UrlShortner() {
  const [url, setUrl] = useState("");
  const [ urldata, setUrlData ] = useState([]);
  async function handleShort(){
    const input = {
         url,
    }
    const res = await fetch(`https://madhan235-url-short-node.onrender.com/users/shortner`,
    {method:"POST",
    body:JSON.stringify(input),
    headers:{"Content-Type": "application/json"},
    })
    const result = await res.json();
    console.log(result)
    handleData()
  }

  async function handleData(){
const res = await fetch(`https://madhan235-url-short-node.onrender.com/get/url`,
{method:"get",
headers:{"auth-token": localStorage.getItem("token")}
});
const result = await res.json();
// console.log(result);
setUrlData(result.data)
  }
  return (
    <div className=''>
      <div className='navbar bg-success'>
        <h2 style={{color:"greenyellow"}}>
          Url Shortener</h2></div>
<div className='container text'>
    
 <h4>"you can shorten your long Url to short in seconds !!"
 </h4>
 </div>
  
    <div className='container'>
      <div className='input'>

<input placeholder="Url" 
  className='col mr-2'
   value={url}
  onChange={(e)=>setUrl(e.target.value)}
  />
 <button onClick={handleShort} className='btn btn-primary btn-active userbtn'>Shorten</button>
<br/>
<button onClick={handleData} className='btn btn-primary btn-active userbtn'>getUrl</button>

</div>

<table className='table table-striped table-responsive'>
  <thead>
    <tr>
      <th>Full Url</th>
      <th>Short Url</th>
    </tr>
  </thead>
  <tbody>
  {urldata.map((url,idx)=>(
    <tr key={idx}>
      <td><a href={url.longUrl}>{url.longUrl}</a></td>
      <td><a href={url.longUrl}>{url.shortUrl}</a></td> 
    </tr>
    ))} 
  </tbody>
</table>

    </div>
    </div>

    
  )
}


export default UrlShortner