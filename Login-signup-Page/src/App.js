import Sign from "./SIGNUP/Sign";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./LOGIN/Login";
import Hello from "./Hello"

function App() {
  
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Hello/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign",
      element: <Sign />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;


