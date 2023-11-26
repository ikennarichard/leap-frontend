/* eslint-disable react/prop-types */
import { useState } from "react";
import AddBeneficiaryModal from "../components/AddBeneficiaryModal";
import SelectCountry from "../components/SelectCountry";
import styles from './beneficiaries.module.css'

const BeneficiaryPage= ({ countries }) => {
  const [beneficiaries, setBeneficiaries] = useState([
    {
      fullName: 'Tom Foster',
      bankName: 'Leap Africa',
      country: 'Nigeria',
      accountNumber: '022000202',
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  const addBeneficiary = (newBeneficiary) => {
    setBeneficiaries([...beneficiaries, newBeneficiary]);
    closeModal();
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleModal = () => {
    if (showModal) {
      closeModal();
    } else {
      // navigate to profile page
    }
  }

  return (
    <section>
      <div className={styles.heading}>
        <button 
          className={`reset_btn`}
          onClick={handleModal}
        >
          <img src="back-arrow.svg" alt="" />
        </button>
        <h2>Beneficaries</h2>
      </div>

      { !showModal && (
        <>
          <button 
            type="button" 
            onClick={openModal}
            className={`reset_btn ${styles.add_beneficiary}`}
          >
            <img src="add-square.svg" alt="" />
            Add a Beneficiary
          </button>

          {/* list of beneficiaries */}
            <ul>
              <div className={styles.list_heading}>
                <b>My beneficiaries</b>
                <SelectCountry/>
              </div>
              {
                beneficiaries.map((b) => (
                  <li key={crypto.randomUUID()}>
                    <div>
                      <b>{b.fullName}</b>
                      <p>{b.bankName}</p>
                      <p>{b.accountNumber}</p>
                    </div>
                    <img src="arrow-down.svg" alt="" />
                  </li>
                ))
              }
            </ul>
            </>
            )}

          {
            showModal && (
              <div>
                <AddBeneficiaryModal
                  handleAddBeneficiary = {addBeneficiary}
                  handleModal={closeModal}
                  countries={countries}
                />
              </div>
            )
          }
    </section>
  )
}

export default BeneficiaryPage;