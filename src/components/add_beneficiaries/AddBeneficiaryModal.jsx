/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './addBeneficiary.module.css'
import CustomButton from "../CustomButton";

const AddBeneficiaryModal = ({ handleAddBeneficiary, countries }) => {
  const [data, setData] = useState({
    fullName: '',
    country: '',
    bankName: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => (
      {
        ...prev,
        [name]: value
      }
    ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleAddBeneficiary(data);
    setData({
      fullName: '',
      country: '',
      bankName: '',
      accountNumber: '',
    });
  }
  return (
    <div className={styles.modal}>
      <h3>Add a beneficiary</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text"
            name="fullName"
            id="fullName"
            value={data.fullName}
            placeholder="Enter beneficiary name"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            onChange={handleChange}
            id="country"
            required
          >
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="bankName">Bank Name</label>
          <input 
            type="text"
            name="bankName"
            id="bankName"
            value={data.bankName}
            placeholder="Enter beneficiary bank name"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="accountNumber">Account Number</label>
          <input 
            type="number"
            name="accountNumber"
            id="accountNumber"
            value={data.accountNumber}
            placeholder="Enter beneficiary account number"
            onChange={handleChange}
          />
        </div>
        <CustomButton 
          type='submit'
          content='Proceed'
          />
      </form>
    </div>
  )
}

export default AddBeneficiaryModal;