import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { ToastContainer, toast } from 'react-toastify';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
// import Logout from './Logout.js';
import Login from './components/sections/Login.js';
import Register from './components/sections/Register.js';
import Forum from './components/sections/Forum.js';
import { Redirect } from 'react-router-dom';
import * as Api from "./utils/Api";
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);
const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>

  </div>
);
const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};
export const PrivateRoute = ({ children}) => {
  const isAuthenticated = Api.checkUser()
      
  if (isAuthenticated ) {
    return children
  }
    
  return <Redirect to="/login" />
}
const Logout = () =>{
  // window.history.pushState("", "", '/');
  localStorage.clear()
  window.location.href = "/"
  // Api.logout().then(value =>{
  //   // fulfillment
  //   console.log("Finished")
  //   sessionStorage.setItem("notify", "logged_out")
    
  // });
}
const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("notify")=="logged_in"){
       toast.success("Successfully logged in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
        sessionStorage.clear()
    }
    if (sessionStorage.getItem("notify")=="logged_out"){
      toast.success("Successfully logged out", {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark"
       });
       sessionStorage.clear()
   }
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/logout" component={Logout} layout={LayoutDefault}  />
          <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/register" component={Register} layout={LayoutDefault} />
         
          <AppRoute exact path="/forum/:screen/" component={(props) => <PrivateRoute><Forum {...props} /></PrivateRoute>}  />
          <AppRoute exact path="/forum/:screen/:id" component={(props) => <Forum {...props} />}  />
          <AppRoute exact path="/forum/*" component={(props) => <Forum {...props} />}  />
          <AppRoute exact path="/forum" component={(props) => <Forum {...props} />}  />
          <AppRoute component={NotFound} />
        </Switch>
      )} />
  );
}

export default App;