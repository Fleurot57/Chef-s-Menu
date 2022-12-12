import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./Component/Error404/Error404";
import Accueil from "./Pages/Accueil/Accueil";
import Inscription from "./Pages/page_inscription/page_inscription";
import Profil from "./Pages/page_profil/page_profil";
import QRgenerator from "./Component/Qrcode/QRgenerator";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    error: <Error404 />
  },

  {
    path: "/Inscription",
    element: <Inscription />,
    error: <Error404 />
  },

  {
    path: "/Profil",
    element: <Profil />,
    error: <Error404 />
  },

  {
    path: "/QRgenerator",
    element: <QRgenerator />,
    error: <Error404 />
  }

]);

function App() {
  return  (
    <div className="App">
        
      <RouterProvider router={router} />
    </div>
  )
}

export default App;