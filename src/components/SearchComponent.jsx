/* eslint-disable react/prop-types */
import { useRef } from "react";

const SearchComponent = ({ data, setData }) => {
  const searchInput = useRef();

  const handleChange = () => {
    filterData(searchInput.current.value)
  }

  const filterData = query => {
    const filteredData = data.filter(item => item.fullName.toLowerCase().includes(query.toLowerCase()));
    setData(filteredData);
  }

  const styles = {
    appearance: 'none',
    width: '170px',
    fontSize:' 1rem',
    padding: '0.3em',
    backgroundColor: '#fff',
    border: '1px solid #caced1',
    outline:' 0.3px solid var(--light-gray)',
    borderRadius: '0.25rem',
    color: 'gray',
    cursor:' pointer',
  }
  return (
    <form>
      <div>
        <input
          ref={searchInput}
          type="text"
          placeholder="Search name.."
          onChange={handleChange}
          style={styles}
        />
      </div>
    </form>
  )
}

export default SearchComponent;