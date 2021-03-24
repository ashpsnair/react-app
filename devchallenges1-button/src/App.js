
import './App.css';
import Button from './Button';

function App() {
  return (
  
    <div className="App">
      <div className='sidebar'>
        <h3>Devchallenges.io</h3>
        <ul>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li >Input</li>
          <li>Grid</li>
        
        </ul>
      </div>
      <h1>Buttons</h1>
      <div className="row1">
        < Button name="default" content="<Button />" para="pdefault"/>
        < Button name="defaultdark" content="&:hover &:focus" para="pdefaultdark"/>  
      </div>
      <div className="row">
        < Button name="row21" content="<Button />" para="pdefault"/>
        < Button name="row22" content="&:hover &:focus" para="pdefaultdark"/>  
      </div>
       <div className="row">
        < Button name="default" content="<Button />" para="pdefault"/>
        < Button name="defaultdark" content="&:hover &:focus" para="pdefaultdark"/>  
      </div>
      
    
    </div>
  );
}

export default App;
