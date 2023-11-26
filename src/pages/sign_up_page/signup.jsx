/* eslint-disable react/prop-types */
import { useState, useRef } from "react"
import SignInLink from "../components/SignIn";
import InputCode from "../../components/InputCode";
import RetryButton from "../../components/RetryButton";
import styles from './signup.module.css'
// import CustomSelect from "../components/CustomSelect";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Signup = ({ countries }) => {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phone: '',
    referral: '',
    password: '',
    passwordConfirmation: '',
  });
  const [visible, setVisible] = useState(false);
  const [nxtVisible, setNxtVisible] = useState(false);
  const [step, setStep] = useState(4);
  const [loading, setLoading] = useState(false);
  const codeRef = useRef(null);

  let href = null;
  let text = null;

  const selectedCodeRef = useRef('');
  const selectedCountryFlagRef = useRef('');
  const selectedCountryCodeRef = useRef('');

  const toggleVisibility = () => setVisible(prev => !prev);
  const toggleNxt = () => setNxtVisible(prev => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => (
      {
        ...prev,
        [name]: value,
      }
    ));

    if (name === 'country') {
      const selectedCountry = countries.find(
        (country) => country.name === value
      );
      selectedCodeRef.current = selectedCountry ? selectedCountry.code : '';
      selectedCountryFlagRef.current = selectedCountry ? selectedCountry.flag : '';
      selectedCountryCodeRef.current = selectedCountry ? selectedCountry.countryCode : '';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { 
      firstname, 
      lastname, 
      email, 
      country, 
      phone,
      referral,
      password,
      passwordConfirmation
      
      } = userDetails;


      if (password === passwordConfirmation) {
        const data = {
          firstname,
          lastname,
          email,
          country,
          phone: `${selectedCodeRef.current}${phone}`,
          referral,
          password
        }
        console.log('Form Submitted:', data);
        incrementStep()
        return data;
      } else {
        console.log('Check password');
        return false;
      }
  };

  switch(step) {
    case 1:
      href = './location.svg'
      text = 'Choose Location'
      break
    case 2:
      href = './details.svg'
      text = 'Personal details'
      break
    case 3:
      href = './password.svg'
      text = 'Create a password'
      break
    default:
      href = null
      text = null
  }

  const incrementStep = () => step < 4 ? setStep(prev => prev+=1) : null
  const decrementStep = () => step > 1 ? setStep(prev => prev-=1) : null
  

  return (
    <>
    <button onClick={() => decrementStep()}>Back</button>   
    { step !== 4 &&
      <>
      <h2>Create an account</h2>
      <SignInLink/>
      </>
    }
      <div className={styles.stepView}>
        <img src={href} />
        <span>{text}</span>
      </div> 
      
      {step !== 4 &&
      
      <form onSubmit={handleSubmit}>
        {
          step === 1 && (
            <div className="field">
            <label htmlFor="country">Country</label>
            <div className={styles.custom_select}>
              <select
                name="country"
                onChange={handleChange}
                id="country"
                required
              >
                <option value="" disabled selected>Select your country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          )
        }

        { 
          step === 2 && (
          <>
            <div className="field">
              <label htmlFor="firstname">First Name</label>
              <input 
                type="text" 
                name="firstname" 
                id="firstname"
                value={userDetails.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="lastname">Last Name</label>
              <input 
                type="text" 
                name="lastname" 
                id="lastname"
                value={userDetails.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              {/* <span className={
                `fi fi-${selectedCountryCodeRef.current}`
              }
              ></span>  */}
              <span>{selectedCodeRef.current}</span>

              <input 
                type="tel"
                name="phone"
                id="phone"
                value={userDetails.phone}
                onChange={handleChange}
                placeholder="0710000"
                required 
              />
            </div>

            <div className="field">
              <label htmlFor="referral">Refeerral code <span>(optional)</span></label>
              {/* <span className={
                `fi fi-${selectedCountryCodeRef.current}`
              }
              ></span>  */}
              <span>{selectedCodeRef.current}</span>

              <input 
                type="text"
                name="referral"
                id="referral"
                value={userDetails.referral}
                onChange={handleChange}
              />
            </div>
          </>
          )
        }
        
        {
          step === 3 && (
            <>
              <div className={`field ${styles.password_field}`}>
                <img src={visible ? './eye.svg' : 'eye-slash.svg'} 
                    className={styles.visibility}
                    onClick={toggleVisibility}
                />
                <img src={ nxtVisible ? './eye.svg' : 'eye-slash.svg'} 
                    className={styles.visibility}
                    onClick={toggleNxt}
                />
           
                <label htmlFor="password">Password</label>
                <input 
                  type={visible ? 'text' : 'password'} 
                  name="password" 
                  id="password"
                  value={userDetails.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password_confirmation">
                  Password Confirmation
                </label>
                <input
                  type={visible ? 'text' : 'password'}
                  name="passwordConfirmation" 
                  id="password_confirmation"
                  value={userDetails.passwordConfirmation}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
            </div>
            </>
          )
        }
        <button 
          type={step !== 3 ? "button" : "submit"}
          onClick={
            step !== 3 ? 
            () => incrementStep() : 
            null
          } 
          >
            Continue
        </button>
      </form>
      }

      {
        step === 4 && (
          <section>
            <h2>Verify your email</h2>
            <p>Input the verification code sent to your email</p>
            <div>
              <InputCode
                length={6}
                label="Code Label"
                loading={loading}
                onComplete={code => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 3000);
                  codeRef.current = code;
                  console.log(codeRef.current)
                }}
              />
            </div>
            <RetryButton/>
          </section>
        )
      }
    </>
  )
}

export default Signup;