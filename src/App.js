import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
      
      return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );


};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function


      return true;

  };

  const clearForm = (e) => {
    // Implement this function
    e.preventDefault();

  };

  const handleSubmit = (e) => {

    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input 
            placeholder="First name"  
            type="text"
            value={ firstName }
            onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">
              Last name</label>
            <input 
            placeholder="Last name"  
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value) }
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input 
            placeholder="Email address"  
            type="email"
            value={ email }
            onChange={(e) => setEmail(e.target.value) }
            />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input 
            placeholder="Password"   
            type="password"
            value={ password.value }
            onChange={(e)=>setPassword({...password,value:e.target.value})}
            onBlur={() => setPassword({...password,isTouched:true})}
            />
            {password.value.length < 8  && password.isTouched ? <PasswordErrorMessage/>:<></>}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
