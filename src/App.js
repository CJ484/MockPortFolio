import {Home, AboutMe, Contact, Portfolio} from './pages';
import { NavDesktop, NavMobile } from './Components/Nav';
import './Assets/styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

// TODO: Add a navbar
// TODO: Add a Menu
// TODO: add react router

function App() {
  return (
    <div className="App">
      <NavDesktop />
      {/* <Home /> */}
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
