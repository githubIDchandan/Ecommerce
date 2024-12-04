import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";


function App() {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
