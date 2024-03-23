
import './App.css';
import Homepage from './screens/Homepage';
import QuotePage from './screens/QuotePage';
import Resturant from './screens/Resturant';
import Contact from './screens/Contact';
import Food from './screens/Food';
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/quote',
    element: <QuotePage />
  },
  {
    path: '/resturant',
    element: <Resturant />
  },
  {
    path: '/food',
    element: <Food />
  },
  {
    path: '/contact',
    element: <Contact />
  }
  
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
