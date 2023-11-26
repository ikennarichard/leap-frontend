import { Link } from "react-router-dom";
// import ProductLogo from "../components/ProductLogo";
import SignIn from "../components/SignIn";
import styles from './landing_page.module.css'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* <ProductLogo/> */}
      {/* <h1>Welcome to Leap Finance</h1> */}

      <div className={styles.call_to_action}>
        <div className={styles.image}>
        </div>
        <div className="box">
          <div className="line-container">
            <span className="line-1 lines"></span>
            <span className="line-2 lines"></span>
            <span className="line-3 lines"></span>
          </div>
          <div className="text-container">
            <h3 className="text-1 text">Your Gateway to Global Transactions</h3>
            <h3 className="text-2 text">More Currencies, More Possibilities</h3>
            <h3 className="text-3 text">Real-Time Rates, Real-Time Control</h3>
          </div>
        </div>

        <div className={styles.links}>
          <Link className={styles.started} to="/signup">Get Started</Link>
          <SignIn/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;