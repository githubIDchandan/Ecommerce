import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Store from "./components/Store";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import LoginBody from "./components/LoginBody";


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
    },
    {
      path:"/home",
      element:<LoginBody/>
    }
  ])


  return (
    <div className="App">
      <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
