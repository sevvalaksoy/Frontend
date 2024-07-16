import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import HireMe from './pages/HireMe'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { fetchData } from './store/actions/actions';
import { data } from './data';
import { useDispatch, useSelector } from 'react-redux';


export const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const lan = useSelector(myStore=>myStore.lan)
  const bilgi = useSelector(myStore=>myStore.info)

  useEffect(()=>{
    window.scrollTo(0, 0);
    const md = localStorage.getItem("mode");
    if ( md === 'false') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    const fetchLangData = async () => {
        const creds = lan === "eng" ? data.eng : data.tr;
        setLoading(true);
        await dispatch(fetchData(creds));
        setLoading(false);
    }
    fetchLangData();
  },[lan, dispatch])

  if (loading || !bilgi) {
    return (
      <h3 className="font-Inter md:text-5xl min-h-screen font-medium text-center pt-60 sm:text-lg xs:text-base text-purple">
        Please Wait While the Page is Loading...
      </h3>
    );
  }
  
  return (
    
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
        <ToastContainer/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
  
  )
}

export default App
