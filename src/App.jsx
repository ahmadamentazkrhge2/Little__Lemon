import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
    path: "/",
    element: <RootLayout />,
    children:[  {
    path: "/",
    element: <Home />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
    {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path:"*",
    element:<NotFound />
  }
] },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
