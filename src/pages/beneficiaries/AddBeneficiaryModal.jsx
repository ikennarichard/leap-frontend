/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './addBeneficiary.module.css';
import { useDispatch } from "react-redux";
import { addBeneficiary } from "../../redux/beneficiaries/beneficiarySlice";
import CustomButton from "../../components/CustomButton";
import CountryBankSelector from "../../components/countryBankSelect/countryBankSelect";

const AddBeneficiaryModal = ({ closeModal }) => {
  const [data, setData] = useState({
    fullName: '',
    country: '',
    bankName: '',
    accountNumber: '',
  });

  const dispatch = useDispatch();

  const handleUpdateUserDetails = ({ country, bankName }) => {
    setData(
      {
      ...data, 
      country, 
      bankName 
    }
    );
  };

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
    dispatch(addBeneficiary(data));
    setData({
      fullName: '',
      country: '',
      bankName: '',
      accountNumber: '',
    });
    closeModal();
  }
  return (
    <div className={styles.modal}>
      <h3>Add a beneficiary</h3>
      <form 
        onSubmit={handleSubmit} 
        className={styles['add-beneficiary-form']}
      >
        <div>
          <div className="field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={data.fullName}
              placeholder="Enter beneficiary name"
              onChange={handleChange}
              required
            />
          </div>

            <CountryBankSelector 
              onUpdateUserDetails={handleUpdateUserDetails}
            />

          <div className="field">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              id="accountNumber"
              value={data.accountNumber}
              placeholder="Enter beneficiary account number"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <CustomButton 
          type='submit'
          content='Add Beneficiary'
          />
      </form>
    </div>
  )
}

export default AddBeneficiaryModal;