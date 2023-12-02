/* eslint-disable react/prop-types */
import styles from './pageheading.module.css'
import { Link } from 'react-router-dom'

const PageHeading = ({ link, heading}) => {
  return (
    <div className={styles.container}>
      <Link to={link} className={styles.back_link}>
        <img src="/back-arrow.svg" className={styles.back_arrow} />
      </Link>

      <h2>{heading}</h2>
    </div>
  )
}

export default PageHeading;