import "./Application.css";
import React from "react";
import { useState } from "react";
import { validateEmail } from "./utils";

function Application() {

  const PasswordErrorMessage = () => <p className="FieldError">The password needs more then 8 characters</p>

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = React.useState("role");

  const isPasswordValid = () => password.value && password.value.length >= 8;
  const isFirstnameValid = () => !!firstName;
  const isLastnameValid = () => true;
  const isRoleValid = () => role !== 'role';

  const isFormValid = () => isFirstnameValid() && isLastnameValid() && isPasswordValid() && isRoleValid() && validateEmail(email);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({value: "", isTouched: false});
    setRole("role");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Created account")
    clearForm();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label className="Row">
              First Name <sup>*</sup>
            </label>
            <input
            className="Row"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label className="Row">
              Last Name 
            </label>
            <input
            className="Row"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label className="Row">
              Email Address <sup>*</sup>
            </label>
            <input
            className="Row"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label className="Row">
              Password <sup>*</sup>
            </label>
            <input
            className="Row"
              type="password"
              value={password.value}
              onChange={e => setPassword({...password, value: e.target.value})}
              onBlur={() => setPassword({...password, isTouched: true})}
            />
            { password.isTouched && !isPasswordValid() ? <PasswordErrorMessage/>:null}
          </div><div className="Field">
            <label className="Row">
              Role <sup>*</sup>
            </label>
            <select
            className="Row"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!isFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Application;