import React, { useState } from 'react';
import './RegistrationForm.css';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegistrationForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    surname: yup.string().required('Surname is required!'),
    email: yup.string().email('Invalid email').required('Email is required!'),
    age: yup.number().positive('Age must be a positive number').required('Age is required!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      age: '',
    },

    validationSchema: validationSchema,
    validateOnBlur:false,
    ValidateOnChange:false,
    onSubmit: async (values) => {
      try {
        const checkResponse = await fetch(`http://localhost:3000/users?email=${values.email}`);
        const existingUser = await checkResponse.json();
    
        if (existingUser.length > 0) {
          console.error('User with this email already exists');
          setSuccessMessage(null);
         alert("User with this email already exist")
          return;
        }




        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('User registered successfully');
          setSuccessMessage('Registration successful!');
          formik.resetForm();
          navigate('/');
        } else {
          console.error('Failed to register user');
          setSuccessMessage(null);
        }
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage(null);
      }
    },
  });

  return (
    <>
      <h2>New participant registration form</h2>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formik.values.name}
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name || formik.submitCount > 0 ? (formik.errors.name && (
              <div className="error-message">{formik.errors.name}</div>
            )
            ) :null}
          </label>

          <label>

           Surname:
            <input
              type="text"
              name="surname"
              value={formik.values.surname}
              placeholder="Surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.surname && formik.errors.surname && (
              <div className="error-message">{formik.errors.surname}</div>
            )}
          </label>
        <label>
         Email:
            <input
              type="email"
              name="email"
              value={formik.values.email}
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div> 
            )}
         </label>
          
         <label>
       Age:
            <input
              type="number"
              name="age"
              value={formik.values.age}
              placeholder="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="error-message">{formik.errors.age}</div> 
            )}
         </label>
         
          <button className="register-button" type="submit" disabled={!formik.isValid}>
            Register
          </button>
          <Link to="/">
            Already registered? <span>Back to home page</span>
          </Link>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </>
  );
};

export default RegistrationForm;
