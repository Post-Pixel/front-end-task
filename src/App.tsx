import React from "react";
import "./App.css";
import Form, { Name } from "./components/Form";

function App() {
  const initialName = { firstName: "", lastName: "" };

  const logName = (name: Name) => {
    console.log(name);
  };

  return (
    <div className="app">
      <header className="app__header">
        <Form
          formTitle="New Form"
          initialName={initialName}
          updateName={ logName }
        />
      </header>
    </div>
  );
}

export default App;
