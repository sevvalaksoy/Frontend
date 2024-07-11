import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import HireMe from './pages/HireMe'
import Projects from './pages/ProjectsPage'
import Skills from './pages/SkillsPage'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HireMe />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
      </Switch>
    </>
  )
}

export default App
