import React, { useState } from 'react'
import '../../styles/userCredentials.css'

function UserCredentials() {
   // Define state variables for name and phone number
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

   // Function to handle form submission
   const handleSubmit = (e) => {
     e.preventDefault();
     // You can do something with the form data here, like sending it to an API
     console.log('Name:', name);
     console.log('Phone Number:', phoneNumber);
   };

   return (
    <div>
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
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
   );
 }


export default UserCredentials
