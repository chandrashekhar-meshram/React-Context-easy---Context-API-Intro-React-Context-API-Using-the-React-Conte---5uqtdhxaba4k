import React, {useState} from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = createContext();
const App = () => {
    const [obj, setObj] = useState({name:"Newton", age:3})      

  return (
    <div id="main">        
        <NameContext.Provider value={{obj, setObj}}>
             <UserProfile />
        </NameContext.Provider>
    </div>
  )
}

export default App;
export {UserContext}
