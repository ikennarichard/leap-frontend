/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PageHeading from "../../components/PageHeading.jsx/PageHeading";
import AddBeneficiaryModal from "./AddBeneficiaryModal";
import SearchComponent from "../../components/SearchComponent";
import styles from './beneficiaries.module.css'
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Beneficiaries = () => {
  const beneficiaries = useSelector(state => 
    state.beneficiaries.beneficiaries);
  const [showModal, setShowModal] = useState(false);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState(beneficiaries);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    setFilteredBeneficiaries(beneficiaries);
  }, [beneficiaries]);

  return (
    <section className={styles['beneficiaries-container']}>
      <PageHeading link='/' heading='Beneficiaries' />
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
            <ul className={styles['beneficiaries-list']}>
              <div className={styles.list_heading}>
                <b>My beneficiaries</b>
                <SearchComponent 
                  data={beneficiaries} 
                  setData={setFilteredBeneficiaries} 
                />
              </div>
              {
                filteredBeneficiaries.length ? filteredBeneficiaries.map((b) => (
                  <li key={nanoid()}>
                    <div className={styles['list-item']}>
                      <div>
                        <b>{b.fullName}</b>
                        <p>{b.bankName.toUpperCase()}</p>
                        <p>{b.accountNumber}</p>
                      </div>
                      <img 
                        src="arrow-down.svg" 
                        className={styles['down-arrow']}/>
                    </div>
                    <hr className={styles['hr-line']} />
                  </li>
                )) : <p>Beneficiary not available</p>
              }
            </ul>
            </>
            )}

          {
            showModal && (
              <div>
                <AddBeneficiaryModal closeModal={closeModal}/>
              </div>
            )
          }
    </section>
  )
}

export default Beneficiaries;