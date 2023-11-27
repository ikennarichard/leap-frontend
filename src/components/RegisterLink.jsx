/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const RegisterLink = ({ question, content, link }) => {
  const styles = {
    display: 'inline-block',
    textDecoration: 'none',
    color: 'var(--main-blue)',
    marginTop: '5px',
    marginLeft: '5px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  }
  return (
    <div>
      <small>{question}</small>
      <span>
        <Link style={styles} to={link}>{content}</Link>
      </span>
    </div>
  )
}

export default RegisterLink;