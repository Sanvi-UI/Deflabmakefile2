import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Facilities } from "./pages/Facilities";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";
import { Research } from "./pages/Research";
import { ResearchDetail } from "./pages/ResearchDetail";
import { Events } from "./pages/Events";
import { EventsFigma } from "./pages/EventsFigma";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./components/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "facilities", Component: Facilities },
      { path: "courses", Component: Courses },
      { path: "courses/:slug", Component: CourseDetail },
      { path: "research", Component: Research },
      { path: "research/:id", Component: ResearchDetail },
      { path: "events", Component: EventsFigma },
      { path: "contact", Component: Contact },
    ],
  },
]);