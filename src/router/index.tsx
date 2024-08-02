import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../landingPage";
import { ErrorPage } from "../components/errorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: "This is about page",
  },
  {
    path: "/contact-us",
    element: "This is contact us page",
  },
]);
