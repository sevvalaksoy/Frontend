import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import HireMe from './pages/HireMe'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Contact from './pages/Contact'


export const queryClient = new QueryClient();

function App() {

  useEffect(()=>{
    window.scrollTo(0, 0);
    const md = localStorage.getItem("mode");
    if ( md === 'false') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  },[])

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
          <Route path="/contact" >
            <Contact />
          </Route>
        </Switch>
      </QueryClientProvider>
    </>
  )
}

export default App
