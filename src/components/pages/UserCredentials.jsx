import React, { useEffect, useState } from 'react'
import '../../styles/userCredentials.css'

function UserCredentials() {
   // Define state variables for name and phone number
   const[userData, setUserData] = useState({});
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

   // Function to handle form submission
   const handleSubmit = (e) => {
     e.preventDefault();

    //  setUserData({...userData, name:name, number:phoneNumber});

     if (userData) {
      // console.log("USER", userData);
      fetch(`http://localhost:3000/api/creds`, {
        method: "POST",
        body: JSON.stringify({number: phoneNumber}),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then((res) => {
        console.log(res);
        sessionStorage.setItem('target_phone', phoneNumber);

        if (!sessionStorage.getItem("target_phone")) {
          alert("Phone number not saved. Please try");
        }
      }).catch((err) => {
        console.log(err);
      })
    }
   };

   useEffect(() => {
    console.log('userData',userData);
   },[userData])

   return (
    <div>
      <a href='/' className='floating-back-btn m-3 mt-2'>
          <i className='bi bi-arrow-left'></i>
      </a>
    <h2>Input Details</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          className="input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input
          className="input"
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button  className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
   );
 }


export default UserCredentials
