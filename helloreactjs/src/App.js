import logo from './logo.svg';
import './App.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';


function App() {

  
const styleList ={
  display:'flex',
  alignItens:'center',
  listStyle:'none'
}

const  styleIcon = {
  margin:'20px',
}


  return (
    <div className="App">
      <header className="App-header">    
        <h1>
          Ola. Este e meu primeiro codigo React
        </h1>
        <p>Veja minhas redes sociais</p>
        <ul style={styleList} >
          <li><a href='#' style={styleIcon}><FaFacebook/></a></li>
          <li> <a href='#' style={styleIcon}><FaInstagram/></a></li>
          <li> <a href='#' style={styleIcon}><FaLinkedin/></a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
