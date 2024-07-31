import React, { useState } from 'react';
// import Axios from 'axios'

// import React, {useState,useEffect} from 'react';

const SignIn = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    const udata = { "username":username };

    fetch('http://127.0.0.1:5000/sign_in', 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(udata)    
      }).then(response => {
        return response.json();
      }).then(data => {
        alert(JSON.stringify(data)); // Display response in an alert
      })




// ajyegjrfw




    console.log('Signed in with:', { username, password });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>





    </div>
  );
};

export default SignIn;
