import styles from './logo.module.css'

const ProductLogo = () => {
  return (
    <div className={styles.container}>
      <img src="./leap_logo_blue.svg" alt="leap logo" />
      <div className={styles.logo_text}>
        <span>swift.</span>
        <span>transparent.</span>
        <span>global.</span>
      </div>
    </div>
  )
}

export default ProductLogo;