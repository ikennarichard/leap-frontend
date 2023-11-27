import { useState, useEffect } from "react";
import ProductLogo from "../../components/product_logo/ProductLogo";
import OnBoading from "../../components/onboarding_screen/OnBoading";
import styles from './landing_page.module.css'

const LandingPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showOnBoarding, setShowOnBoarding] = useState(false);

  useEffect(() => {

    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setShowWelcome(true);
    }, 3500);

    const onBoardingTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowOnBoarding(true);
    }, 7000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(onBoardingTimer);
    };

  }, [])
  return (
    <div className={styles.container}>
      { showLogo && <ProductLogo /> }
      
      { showWelcome && 
        <h1 className={styles.fadeIn}>Welcome to Leap Finance</h1> 
      }

      { showOnBoarding && <OnBoading/> }
    </div>
  )
}

export default LandingPage;