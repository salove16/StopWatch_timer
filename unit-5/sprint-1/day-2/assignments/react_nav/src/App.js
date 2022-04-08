import logo from './logo.svg';
import './App.css';

function App() {
  let link=["Services","Projects","Abouts"]
  return (
    
    <div className="App">
      <div className="logo">
        <logo >LOGOBACKERY</logo>
        </div>
     
      <div className="link">
        {link.map(el=>{
         return <a href="">{el}</a>
        })}
      </div>
      <div className="button">
      <button >Contact</button>
      </div>
      
    </div>
    
  );
}

export default App;
