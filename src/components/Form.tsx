import React, { useState, ChangeEvent } from 'react';
import "./Form.css";

export type Name = {
  firstName: string;
  lastName: string;
};

type FormProps = {
  formTitle: string;
  initialName: Name;
  updateName: (newName: Name) => void;
};

function Form(props: FormProps) {
  const [name, setName] = useState (props.initialName);

  const updateFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(Object.assign(name, { firstName: event.target.value }));
  };

  const updateLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(Object.assign(name, { lastName: event.target.value }));
  };

  const submitName = () => {
    props.updateName(name);
  };

  return (
    <div>
      <div>{props.formTitle}</div>

      <form className="clearfix form">
        <input
          placeholder="First name"
          name="firstName"
          className="form-control form-input"
          onChange={ updateFirstName }
        />

        <input
          placeholder="Last name"
          name="lastName"
          className="form-control form-input"
          onChange={ updateLastName }
        />
      </form>

      <button
        type="button"
        className="btn btn-primary form-btn"
        onClick={ submitName }
      >
        Save
      </button>
    </div>
  );
}

export default Form;
