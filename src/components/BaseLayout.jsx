import { Outlet } from "react-router-dom";
import LandingPage from "../pages/landing_page/landing_page";
import { useEffect, useState } from "react";

const BaseLayout = () => {

  const [user, setUser] = useState(false);

  useEffect(() => {

    setTimeout(() => setUser(true), 8000)
    return () => {
      clearTimeout()
    }
  }, [])

  if (!user) {
    return <LandingPage/>
  }


  return (
    <main>
      <Outlet/>
    </main>
  )
}

export default BaseLayout;