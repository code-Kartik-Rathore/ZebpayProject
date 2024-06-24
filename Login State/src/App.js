import './App.css';
import PortfolioPage from './components/PortfolioPage';
import QuickTrade from './QuickTrade/QuickTrade';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <QuickTrade />,
    },
    {
      path: "/portfolio",
      element: <PortfolioPage />,
    },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
