import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

  <Home/>
  <Outlet/>
  </>


  );
  
}

export default App;
