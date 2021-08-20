import './App.css';
import OAuth from './OAuth/OAuth'

function App() {
  return (
    <div className="App">
      <br/>
        <OAuth/>
      <br/>
      <br/>
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=fd69192f249af87c0b17">Login With GitHub</a>
    </div>
  );
}

export default App;
