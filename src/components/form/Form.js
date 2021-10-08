import {
  StyledFormContainer,
  StyledLabel,
  StyledInput,
  StyledFormButton,
  StyledSpanError,
} from "./FormStyles";

const Form = ({ onFormSubmit, name, setName, error }) => {
  return (
    <StyledFormContainer onSubmit={(event) => onFormSubmit(event)}>
      <StyledLabel htmlFor="name">Enter your name:</StyledLabel>
      {error && name.length < 2 && (
        <StyledSpanError>Name input is empty.</StyledSpanError>
      )}
      <StyledInput
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledFormButton type="submit">Submit</StyledFormButton>
    </StyledFormContainer>
  );
};
export default Form;
