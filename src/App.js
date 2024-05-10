import { NotificationContainer } from 'react-notifications';
import AuthPage from './components/authPage';
import { useSelector } from "react-redux";
import UserPage from './components/userPage';

function App() {
  const {loggedIn} =useSelector((state)=>state.user);
  return (
    <div className="App">
    {loggedIn ? <UserPage/> : <AuthPage/>}
     <NotificationContainer/>
    </div>
  );
}

export default App;
