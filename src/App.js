import React, { useState } from "react";
import "./App.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

function App() {
  const [phoneNumberValidation, setPhoneNumberValidation] = useState();

  const onPhoneNumberBlur = (isValid) => {
    setPhoneNumberValidation(
      isValid ? "Phone number is valid" : "Phone number is invalid"
    );
  };

  const onSelectFlag = (isValid) => {
    setPhoneNumberValidation(
      isValid ? "Phone number is valid" : "Phone number is invalid"
    );
  };

  return (
    <div className="App">
      <label htmlFor="phoneNumber" className="form-label">
        Phone Number
      </label>
      <IntlTelInput
        fieldId="phoneNumber"
        defaultValue="234-567-8901"
        containerClassName="intl-tel-input"
        inputClassName="form-control"
        preferredCountries={["us"]}
        separateDialCode={true}
        format={true}
        onPhoneNumberBlur={onPhoneNumberBlur}
        onSelectFlag={onSelectFlag}
      />
      {phoneNumberValidation && (
        <div className="form-error">{phoneNumberValidation}</div>
      )}
    </div>
  );
}

export default App;
