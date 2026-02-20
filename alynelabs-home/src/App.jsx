
import './App.css';
import Home from './pages/HomePage/Home';
import Topbar from './components/TopBar/Topbar';
import Infra from './pages/Infra/Infra';
import Solution from './pages/Solution/Solution.jsx';

function App() {
  

  return (
    <>
      <Topbar />
      <Home />
      <Infra />
      <Solution />
    </>
  )
}

export default App
