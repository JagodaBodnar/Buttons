import { IoPersonRemoveSharp, IoPersonAddSharp } from "react-icons/io5";
import { StyledUserButton, StyledListContainer } from "./UsersStyles";

const Users = ({ users, onRemoveUser, onAddUser, addUsers }) => {
  return (
    <div>
      <StyledListContainer>
        <h4>Choose user you want to add to list.</h4>
        {addUsers.map((user) => {
          return (
            <li key={user.id}>
              <div>
                Name: {user.name} {user.surname}
              </div>
              <div>Age: {user.age}</div>
              <StyledUserButton add onClick={() => onAddUser(user.id)}>
                <IoPersonAddSharp />
              </StyledUserButton>
            </li>
          );
        })}
      </StyledListContainer>
      <h4>List of users:</h4>
      <StyledListContainer>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                Name: {user.name} {user.surname}
              </div>
              <div>Age: {user.age}</div>
              <StyledUserButton remove onClick={() => onRemoveUser(user.id)}>
                <IoPersonRemoveSharp />
              </StyledUserButton>
            </li>
          );
        })}
      </StyledListContainer>
    </div>
  );
};
export default Users;
