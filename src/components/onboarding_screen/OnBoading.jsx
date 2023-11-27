import { Link } from "react-router-dom"
import styles from './onboarding.module.css'
import SignIn from "../RegisterLink";

const OnBoading = () => {
  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={`${styles.register}`}>
        <div className={styles.image}>
        </div>
        <div className={styles.box}>
          <div className={styles.line_container}>
            <span 
              className={`${styles.line_1} ${styles.lines}`}>  
            </span>
            <span 
              className={`${styles.line_2} ${styles.lines}`}>  
            </span>
            <span 
              className={`${styles.line_3} ${styles.lines}`}>  
            </span>
          </div>
          <div className={styles.text_container}>
            <h3 className={`${styles.text_1} ${styles.text}`}>
              Your Gateway to Global Transactions
            </h3>
            <h3 className={`${styles.text_2} ${styles.text}`}>
              More Currencies, More Possibilities
            </h3>
            <h3 className={`${styles.text_3} ${styles.text}`}>
              Real-Time Rates, Real-Time Control
            </h3>
          </div>
        </div>

          <div className={styles.links}>
            <Link 
              className={styles.started} 
              to="/sign_up">Get Started
            </Link>
            <SignIn/>
          </div>
        </div>
      </div>
  )
}

export default OnBoading