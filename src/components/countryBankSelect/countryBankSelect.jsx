/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const CountryBankSelector = ({ onUpdateUserDetails }) => {

  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [selectedBank, setSelectedBank] = useState('');

  const { banks, countries } = useSelector(state => state.auth);

  const countryOptions = countries.map((c) => ({
    value: c,
    label: `${c.name} - ${c.currency.toUpperCase()}`
  }));

  const bankOptions = banks[selectedCountry].map((bank) => ({
    label:`${bank.name} - ${selectedCountry}`,
    value: bank.name
  }))

  const handleSelectChange = (selected, {name}) => {
    if (name === 'country name') {
     setSelectedCountry(selected.value.name);
     onUpdateUserDetails({ country: selectedCountry, bankName: null });
     console.log(selectedCountry)
    } else if (name === 'bank name') {
     setSelectedBank(selected.value)
     onUpdateUserDetails({ country: selectedCountry, bankName: selectedBank })
     console.log(selectedBank)
    } 
   }

  return (
    <>
    <div className='field'>
      <label>Select a Country</label>
      <Select
        name='country name'
        onChange={handleSelectChange}
        options={countryOptions}
      />
    </div>

    <div className='field'>
      <label>Select a Bank</label>
      <Select
        name='bank name'
        onChange={handleSelectChange}
        options={bankOptions}
      />
    </div>
    </>
  );
};

export default CountryBankSelector;
