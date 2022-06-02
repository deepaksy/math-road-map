import { 
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
 } from 'react-router-dom';
import './App.scss';
import HomePage from './Routes/HomePage';
import ToolBar from './components/Toolbar';
import Feedback from './Routes/Feedback';
import Contact from './Routes/Contact';

function App() {
  return (
    <Router>
      <ToolBar/>
      <div style={{minHeight:'56px'}}></div>
      <Routes>
        <Route path='' element={<Navigate to='home'/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
  );
}

export default App;
