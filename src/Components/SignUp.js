import React, { useState } from 'react';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    const userdata= {"email":email,"password":password,"username":Username,"firstname":firstname,"lastname":lastname};
    
    fetch('http://127.0.0.1:5000/sign_up', 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata)    
      }).then(response => {
        return response.json();
      }).then(data => {
        alert(JSON.stringify(data)); // Display response in an alert
      })
    
    // alert(`username ${response}`);
    console.log('Signed up with:', { email, password });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Username</label>
          <input
            type="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>First Name:</label>
          <input
            type="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
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


        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
