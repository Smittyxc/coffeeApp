import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./demo"; // Assuming you have a Home component
import RadarDemo from "./components/radarDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/radar",
    element: <RadarDemo />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;