import './App.css';
import AdbIcon from '@mui/icons-material/Adb';
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp';
import Draggable from "react-draggable";
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <SignInSignupWithLocalStorage/>
    </div>
  );
}

export default App;
