/* eslint-disable react/prop-types */
import styles from './backarrow.module.css'
import { Link } from 'react-router-dom'

const BackArrow = ({ onClick, link }) => {

  const handleClick = () => {
    if (onClick !== undefined || onClick !== null) {
      onClick()
    } else {
      return;
    }
  }
  return (
    <div>
      <button
        className={`reset_btn ${styles.back_btn}`}
        onClick={handleClick}
      > 
      <Link to={link} className={styles.back_link}>
        <img src="back-arrow.svg" className={styles.back_arrow} />
      </Link>
      </button>   
    </div>
  )
}

export default BackArrow