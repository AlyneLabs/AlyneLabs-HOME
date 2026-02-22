
import './App.css';
import Home from './pages/HomePage/Home';
import Topbar from './components/TopBar/Topbar';
import Infra from './pages/Infra/Infra';
import Solution from './pages/Solution/Solution.jsx';
import WorkFlow from './pages/WorkFlow/Workflow.jsx';
import Protocol from './pages/Protocol/Protocol.jsx';
import ModuleDL from './pages/ModuleDL/Moduledl.jsx';

function App() {  
  

  return (
    <>
      <Topbar />
      <Home />
      <Infra />
      <Solution />
      <WorkFlow />
      <Protocol />
      <ModuleDL />
    </>
  )
}

export default App
