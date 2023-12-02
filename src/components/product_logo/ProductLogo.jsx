/* eslint-disable react/prop-types */
import styles from './logo.module.css'

const ProductLogo = () => {
  return (
    <div className={`${styles.container} ${styles.isfadeIn}`}>
      <img 
        src="./leap_logo_blue.svg" 
        alt="leap logo" 
        className={styles.leap_logo}
      />
      <div className={`${styles.logo_text}`}>
        <span>swift.</span>
        <span>transparent.</span>
        <span>global.</span>
      </div>
    </div>
  )
}

export default ProductLogo;