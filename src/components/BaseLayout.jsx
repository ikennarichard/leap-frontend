import { Outlet } from "react-router-dom";
import LandingPage from "../pages/landing_page/landing_page";
import { useSelector } from "react-redux";

const BaseLayout = () => {

  const user = useSelector(state => state.auth.user);

  if (!user) return <LandingPage/>
  return (
    <main>
      <Outlet/>
    </main>
  )
}

export default BaseLayout;