import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './selectcurrency.module.css';
import { nanoid } from '@reduxjs/toolkit';


function SelectCountry() {

  const [country, setCountry] = useState('ng');
  const [showList, setShowList] = useState(false);

  const countries = useSelector(state => state.auth.countries);

  const handleCountrySelect = (c) => {
    setCountry(c.countryCode);
  }

  return (
    <div 
      className={styles.select_country}
      onClick={() => setShowList(prev => !prev)} 
      >
      <span className={`fi fi-${country}`}></span>
      <small>{country.toUpperCase()}</small>
      <img 
        src="arrow-down.svg" alt=""
        
      />

      <div 
        className={styles.country_list}
      >
        {
          showList && 
          (
            countries.map((c) => (
            <div 
              key={nanoid()}
              onClick={() => handleCountrySelect(c)}
            >
              <span className={`fi fi-${c.countryCode}`}></span>
              <small>{c.countryCode.toUpperCase()}</small>
            </div>
            ))
          )
        }
      </div>
     
    </div>
)}

export default SelectCountry