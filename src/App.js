import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { useState } from 'react';
import UrlShortner from './components/UrlShortner';
import Forget from './components/Forget';
import Reset from './components/Reset';
 
function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("");
  const [confirm,setConfirm] = useState("")

  return (
    <div className="App">
       <Switch>
        <Route exact path="/">
          <Signup
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          />
        </Route>
        <Route path="/login">
          <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          />
        </Route>
        <Route path="/forget">
<Forget
email={email}
error={error}
setError={setError}
/>
        </Route>
        <Route path="/url">
<UrlShortner/>
        </Route>
       </Switch>
       <Route path="/reset/:id/:token">
        <Reset
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirm={confirm}
        setConfirm={setConfirm}
      error={error}
      setError={setError}
        />
       </Route>
    </div>
  );
}

export default App;
