import { useState, useEffect } from "react";
import ProductLogo from "../../components/product_logo/ProductLogo";
import styles from './landing_page.module.css'

const LandingPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {

    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setShowWelcome(true);
    }, 3500);

    const onBoardingTimer = setTimeout(() => {
      setShowWelcome(false);
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
    </div>
  )
}

export default LandingPage;