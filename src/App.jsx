import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import SingleBlogContent from "./pages/SingleBlogContent";
import SingleServicesContent from "./pages/SingleServicesContent";
import MainLayout from "./components/MainLayout";
import Trend from "./pages/Trend";
import SingleBooking from "./components/booking/bookingServiceCard/SingleBooking";
import Booking from "./pages/Booking";
import { HelmetProvider } from 'react-helmet-async';

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
      { path: "booking/detailed/:id", element: <SingleBooking /> },
      { path: "trend", element: <Trend /> },
      { path: "booking", element: <Booking /> },
    ],
  },
];

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
