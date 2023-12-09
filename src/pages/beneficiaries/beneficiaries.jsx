/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import PageHeading from "../../components/PageHeading.jsx/PageHeading";
import AddBeneficiaryModal from "./AddBeneficiaryModal";
import SearchComponent from "../../components/SearchComponent";
import styles from './beneficiaries.module.css'
import { useSelector, useDispatch } from "react-redux";
import { removeBeneficiary } from "../../redux/beneficiaries/beneficiarySlice";
import { nanoid } from "@reduxjs/toolkit";

const Beneficiaries = () => {
  const beneficiaries = useSelector(state => 
    state.beneficiaries.beneficiaries);
  const [addBeneficiaryForm, setAddBeneficiaryForm] = useState(false);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = 
  useState(beneficiaries);
  const [onDelete, setOnDelete] = useState(false);
  const beneficiaryId = useRef();
  const dispatch = useDispatch();

  const openBeneficaryForm = () => setAddBeneficiaryForm(true);
  const closeBeneficiaryForm = () => setAddBeneficiaryForm(false);

  // delete beneficiary
  const openModal = (id) => {
    beneficiaryId.current = id;
    setOnDelete(true);
  }

  const handleDelete = (id) => {
    dispatch(removeBeneficiary(id));
    setOnDelete(false);
  }

  useEffect(() => {
    setFilteredBeneficiaries(beneficiaries);
  }, [beneficiaries]);

  return (
    <section className={styles['beneficiaries-container']}>
      <PageHeading link='/' heading='Beneficiaries' />
      { !addBeneficiaryForm && (
        <>
          <button 
            type="button" 
            onClick={openBeneficaryForm}
            className={`reset_btn ${styles.add_beneficiary}`}
          >
            <img src="add-square.svg" alt="square icon" />
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
                        <b>{b.name}</b>
                        <p>{b.bankName.toUpperCase()}</p>
                        <p>{b.accountNumber}</p>
                        <p>{b.country}</p>
                      </div>
                      <div className={styles['trash__container']}>
                        <img
                          src="trash.svg"
                          className={styles['trash']}
                          onClick={() => openModal(b.id)}
                        />
                      </div>
                    </div>
                    <hr className={styles['hr-line']} />
                  </li>
                )) : <p>No beneficiaries added yet</p>
              }
            </ul>
            </>
            )}

          {
            addBeneficiaryForm && (
              <div>
                <AddBeneficiaryModal closeModal={closeBeneficiaryForm}/>
              </div>
            )
          }

          {
            onDelete && (
              <div className={styles['delete__modal']}>
                <div>
                  <p>Confirm delete?</p>
                  <div className={styles['container__modal__buttons']}>
                    <button 
                      className={styles['button__confirm__delete']}
                      onClick={() => handleDelete(beneficiaryId.current)}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setOnDelete(false)}
                      className={styles['button_cancel_delete']}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )
          }
    </section>
  )
}

export default Beneficiaries;