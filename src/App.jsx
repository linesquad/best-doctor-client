import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Awards from "./pages/Awards";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import SingleBlogContent from "./pages/SingleBlogContent";
import SingleServicesContent from "./pages/SingleServicesContent";
import Skills from "./pages/Skills";
import MainLayout from "./components/MainLayout";
import Booking from "./pages/Booking";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutMe /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlogContent /> },
      { path: "service/:id", element: <SingleServicesContent /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "skills", element: <Skills /> },
      { path: "awards", element: <Awards /> },
      { path: "booking", element: <Booking /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
