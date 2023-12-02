/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const CountryBankSelector = ({ onUpdateUserDetails }) => {

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const { banks, countries } = useSelector(state => state.auth);

  const handleCountryChange = selectedOption => {
    setSelectedCountry(selectedOption);
    setSelectedBank(null);
    onUpdateUserDetails({ country: selectedOption.label, bankName: null });
    
  };

  const handleBankChange = selectedOption => {
    setSelectedBank(selectedOption);
    onUpdateUserDetails({ country: selectedCountry.label, bankName: selectedOption.label });
  };

  return (
    <>
    <div className='field'>
      <label>Select a Country</label>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries}
      />
    </div>

    <div className='field'>
      <label>Select a Bank</label>
      <Select
        value={selectedBank}
        onChange={handleBankChange}
        options={banks[selectedCountry.value]}
      />
    </div>
    </>
  );
};

export default CountryBankSelector;
