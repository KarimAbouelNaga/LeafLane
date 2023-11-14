import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardMobility from "./pages/DashboardMobility";
import DashboardRewards from "./pages/DashboardRewards";
import DashboardFriends from "./pages/DashboardFriends";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-mobility":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-rewards":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-friends":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/dashboard-mobility" element={<DashboardMobility />} />
      <Route path="/dashboard-rewards" element={<DashboardRewards />} />
      <Route path="/dashboard-friends" element={<DashboardFriends />} />
    </Routes>
  );
}
export default App;
