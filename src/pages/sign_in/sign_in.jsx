import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/auth/apiSlice.js";
import { Link } from "react-router-dom";
import RegisterLink from "../../components/RegisterLink";
import CustomButton from "../../components/CustomButton";
import styles from './signin.module.css'

const Sign_In = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    const data ={
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    } 

    dispatch(signin(data));
    console.log(data)

    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className={styles.container}>
      <Link to='/'>
        <img src="back-arrow.svg" alt="" />
      </Link>

      <div>
        <h2>Log in</h2>
        <RegisterLink
          question="Don't have an account?"
          content='Create account'
          link='/sign_up'
        />
      </div>

      <form method="post" onSubmit={handleSignIn}>
        <div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              placeholder="john@mail.com"
              id="email"
              ref={emailRef}
              required
            />
          </div>
          <div className={`field ${styles.password_field}`}>
            <label htmlFor="password">Password</label>
            <input 
              type={showPassword ? 'text' : 'password'}
              id="password" 
              ref={passwordRef}
              placeholder="●●●●●●●●" 
              required
            />
            <img
              className={styles.eye_image}
              src={showPassword ? 'eye.svg' 
                : 'eye-slash.svg'}
              onClick={() => setShowPassword(prev => !prev)}
              alt="" />
            <div className={styles.forgot_password}>
              <Link>Forgot password?</Link>
            </div>
          </div>
        </div>

        <div className={styles.btn}>
          <CustomButton type='submit' content='Log in'/>
        </div>
      </form>
    </div>
  )
}

export default Sign_In;