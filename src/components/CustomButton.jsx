/* eslint-disable react/prop-types */
const CustomButton = ({ content, type }) => {
  const styles =  {
    padding: '0.7em 5em',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: 'var(--main-blue)',
    color: 'white',
    fontSize: '1rem',
    borderRadius: '200px',
    cursor: 'pointer',
    margin: '0 auto'
  }
  return (
    <button
      className="reset_btn"
      style={styles}
      type={type}
    >
      {content}
    </button>
  )
}

export default CustomButton