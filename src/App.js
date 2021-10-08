import { useState } from "react";
import { StyledApp } from "./AppStyles";
import Form from "./components/form/Form";

const App = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const onFormSubmit = (event) => {
    if (name.trim() === "") {
      event.preventDefault();
      setError(true);
    } else {
      event.preventDefault();
      setError(false);
      alert(`Your name: ${name}`);
      setName("");
    }
  };

  return (
    <StyledApp>
      <div>
        <button>Button1</button>
      </div>
      <Form
        onFormSubmit={onFormSubmit}
        name={name}
        setName={setName}
        error={error}
      />
      <div>
        <button>Button3</button>
      </div>
    </StyledApp>
  );
};

export default App;
