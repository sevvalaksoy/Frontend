import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import HireMe from './pages/HireMe'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HireMe />
        </Route>
        <Route path="/projects" >
          <ProjectsPage />
        </Route>
        <Route path="/skills" >
          <SkillsPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
