
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='creds'>
            <div className="options">
               <button className='op1 a' style={{"backgroundColor":"#F4D93B" ,"color":"black"}}> SignUp</button>
               <button className='op1' style={{"backgroundColor":"#185685"}}> Login</button>
              </div>
              <div className="creds_div">
                <br/>
                  <img class="creds_img" src="logo.jpg" alt='logo'/>
                  {/* <br/> */}
                  <br/>
                  <input placeholder='Your Username' type="text"/>
                  <br/>

                  <input placeholder='Your Password' type="text"/>
                  <br/>

                  <button className='op1_b' style={{"backgroundColor":"#185685"}} onClick={()=>alert("Unable to login ")}> Login</button>
                  <br/>
                  <button className='op1_b' style={{"backgroundColor":"#185685"}} onClick={()=>alert("Unable to login ")}> Login as demo user</button>
              </div>
       </div>
    </div>
  );
}

export default App;
