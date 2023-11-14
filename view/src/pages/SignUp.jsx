import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { Await } from 'react-router-dom';

const SingUpForm = () => {
    const navigate = useNavigate();

    // Input border style 
    const inputBorderStyle = {
        background: 'transparent',
        border:'none',
        borderBottom: '1px solid #CDCDCD84',
        placeholder : '#CDCDCD84',
        color:'white'
    }
    // Form div style 
    const FormDivStyle = {
        // margin : '5rem',
        // marginLeft : '5rem',
        margin : '5rem',
        // padding : '5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: `url(${deadseatwo})`,
        backgroundSize: 'cover',
        borderRadius: '2rem',
        
    }
    // Form style 
    const FormStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:'2rem',
        padding:'2rem',
    }
        // Error messages 
        const erroMessage = {
          fontSize: '0.65rem',
          padding: '0.5rem',
          color: '#FF0000',
          maxWidth: '15rem',
          textAlign: 'start',
      }
        // Invalid Credintials 
        const invalidCredintials = {
          fontSize: '1rem',
          padding: '0.5rem',
          color: '#FF0000',
          maxWidth: '20rem',
          textAlign: 'start',
      }

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  
  const [error, setError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
          // Password validation
          const validatePassword = (password) => {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
            return passwordRegex.test(password);
          };
          // Email Validation 
          const validateEmail = (email) => {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return emailRegex.test(email);
          };
          const isValid = validateEmail(formData.email);
          setIsEmailValid(isValid);
          // UserName Validation 
          const validateUserName = (username) => {
          const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
          return nameRegex.test(username);
          };
          const nameIsValid = validateUserName(formData.username);
          setIsNameValid(nameIsValid);
      
          const isPasswordValid = validatePassword(formData.password);
          if (!isPasswordValid) {
            setIsPasswordValid(false);
    
          // UserName Validation 
          const validateUserName = (username) => {
          const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
          return nameRegex.test(username);
          };
          const nameIsValid = validateUserName(formData.username);
          setIsNameValid(nameIsValid);
          
    
          // Password validation
          const validatePassword = (password) => {
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
          return passwordRegex.test(password);
          };
          const validPassword = validatePassword(formData.password);
          setIsPasswordValid(validPassword);

          // Phonenumber validation
          const validatePhoneNumber = (phonenumber) => {
            const phoneNumberRegex = /^(?:(?:\+|00)962|0)?7[789]\d{8}$/;
            return phoneNumberRegex.test(phonenumber);
          };
          const validPhoneNumber = validatePhoneNumber(formData.phonenumber);
          setIsPhoneNumberValid(validPhoneNumber);
        }
  
  

    // Send the form data to the server for authentication
    axios.post('/api/login', formData)
      .then((response) => {
        navigate('/');
        // add navigation and successfully signed in 
      })
      .catch((error) => {
        setError('Invalid credentials. Please try again.');
      });
  };



  return (
    <>
    <div className='font-semibold text-[#373737] text-[2rem] text-center mt-20'>My bucket List =')</div>
    <div className='text-center text-[1.1rem] text-[#00000095] pt-4 pb-8'>your friendly todo app !!</div>


    <div style={FormDivStyle}>
    <div className='p-8 grid grid-col-3 justify-items-stretch  bg-[#373737] rounded-[2rem] w-[45rem] ' >
            <div className="col-span-3 justify-self-center text-[2.25rem] font-extralight pb-16 pt-4 text-[#fff]">SIGN UP</div>
            <form onSubmit={handleSubmit} style={FormStyle} >
            <div className='col-span-1 place-items-center flex-center'>
                <label></label>
                <input
                type="text"
                name="username"
                style={inputBorderStyle}
                value={formData.username}
                onChange={handleChange}
                placeholder='Full Name'
                className='placeholder-[#CDCDCD84] mb-4 font-light'
                />
            </div>
            {!isNameValid && (
            <p style={erroMessage}>Username should be 3-6 characters without any special characters</p>
            )}
            
            <label></label>
            <input
              type="email"
              name="email"
              style={inputBorderStyle}
              placeholder='Email'
              className='placeholder-[#CDCDCD84] mb-4 font-light'
              value={formData.email}
              onChange={handleChange}
            />
            {!isEmailValid && (
            <span style={erroMessage}>please enter a valid email address </span>
            )} 


            <label></label>
            <input
            type="password"
            name="password"
            style={inputBorderStyle}
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='placeholder-[#CDCDCD84] mb-4 font-light'
            />
            {!isPasswordValid && (
            <p style={erroMessage}>Password should be 8-20 characters with at least 1 letter, 1 number and 1 special character</p>
            )}
             <button type="submit"className=" px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737] text-xs  rounded-lg text-xs px-5 py-2 mt-8 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</button>
            {error && <div style={invalidCredintials}>{error}</div>}

        </form>  
  
        <div className='col-span-3 text-[0.75rem] mb-1 mt-8 justify-self-center place-items-center text-[#CDCDCD]'>Already have an account ? <Link to='/signin' className='hover:text-[#ffffff95]  underline decoration-solid'>Sing In</Link></div>

    </div>
    </div>
    </>
  );
};

export default SingUpForm;