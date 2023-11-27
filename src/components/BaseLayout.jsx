// import { Outlet } from "react-router-dom";
import LandingPage from "../pages/landing_page";

const BaseLayout = () => {

  const user = useSelector(state => state.auth.user);

  if (!user) return <LandingPage/>
  return (
    <>
      <LandingPage/>
    </>
  )
}

export default BaseLayout;