import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Store from "./components/Store";


function App() {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/store",
      element:<Store/>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
